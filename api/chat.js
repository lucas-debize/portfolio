import { KNOWLEDGE } from "./knowledge.js";

// Limiteur de débit en mémoire (15 requêtes / minute par IP)
const ipRequests = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const max = 15;

  const timestamps = (ipRequests.get(ip) || []).filter((t) => now - t < windowMs);
  if (timestamps.length >= max) {
    return true;
  }
  timestamps.push(now);
  ipRequests.set(ip, timestamps);
  return false;
}

function buildSystemPrompt() {
  const cvLink =
    process.env.CV_URL ||
    KNOWLEDGE.contact?.cvLink ||
    "https://lucas-debize.github.io/portfolio/assets/images/CV.pdf";

  const projectsSummary = (KNOWLEDGE.projects || [])
    .map(
      (p) =>
        `- ${p.title} (${p.category}) : ${p.description} [Technologies : ${p.tags.join(", ")}]`
    )
    .join("\n");

  const skillsSummary = Object.entries(KNOWLEDGE.skills || {})
    .map(([cat, list]) => `${cat}: ${Array.isArray(list) ? list.join(", ") : list}`)
    .join(" | ");

  return `Tu es l'assistant IA officiel du portfolio de Lucas Debize.
Rôle : Développeur IA, Automatisation & Full-Stack (5ème année Epitech Lyon, promo 2027).
Statut actuel : ${KNOWLEDGE.hero?.status || "Disponible pour un stage"} (${KNOWLEDGE.contact?.statusText || "Stage / CDI / CDD / Projets"}).
Localisation : ${KNOWLEDGE.hero?.location || "Lyon, France"}.

Tu réponds aux questions des visiteurs (recruteurs, collaborateurs, curieux) en te basant STRICTEMENT et EXCLUSIVEMENT sur les informations officielles ci-dessous extraites directement du CV et du portfolio.

--- 1. CONTENU OFFICIEL DU CV (assets/images/CV.pdf) ---
${KNOWLEDGE.cvText}

--- 2. TOUS LES PROJETS DU PORTFOLIO (${(KNOWLEDGE.projects || []).length} projets) ---
${projectsSummary}

--- 3. COMPÉTENCES DU PORTFOLIO ---
${skillsSummary}

--- 4. CONTACT & PROFIL ---
Email : ${KNOWLEDGE.contact?.email || "lucas.debize@epitech.eu"}
GitHub : ${KNOWLEDGE.contact?.github || "https://github.com/lucas-debize"}
LinkedIn : ${KNOWLEDGE.contact?.linkedin || "https://linkedin.com/in/lucas-debize"}
Portfolio : ${KNOWLEDGE.contact?.portfolio || "https://lucas-debize.github.io/portfolio/"}
Lien CV officiel : ${cvLink}

RÈGLES IMPORTANTES :
- Réponds en français (ou dans la langue de la question du visiteur), de manière professionnelle mais chaleureuse et naturelle.
- Utilise UNIQUEMENT les faits réels ci-dessus. N'invente jamais d'informations.
- Sois concis (2-4 phrases max sauf si l'utilisateur demande explicitement des détails ou une liste complète).
- Si l'utilisateur demande à consulter ou télécharger le CV, fournis-lui directement ce lien : ${cvLink}
- Mentionne les projets ou expériences pertinents quand la question s'y prête (MyAIFactory, SBDR Team, Prospecthor, RAG Monitor, Assistant RH IA, Image Denoising, etc.).`;
}

const DEFAULT_GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_FALLBACK_MODELS = [
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
  "qwen/qwen3.8-27b",
  "openai/gpt-oss-120b",
];

const DEFAULT_GEMINI_MODEL = "gemini-flash-lite-latest";
const GEMINI_FALLBACK_MODELS = [
  "gemini-flash-lite-latest",
  "gemini-3.6-flash",
  "gemini-flash-latest",
  "gemini-3.5-flash-lite",
];

async function requestGroq(model, message, apiKey) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: buildSystemPrompt() },
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    const err = new Error(`Groq HTTP ${res.status}: ${errorBody}`);
    err.status = res.status;
    err.retryable = res.status === 429 || res.status === 404;
    throw err;
  }

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content;
  if (!reply) throw new Error("Groq n'a pas renvoyé de contenu.");
  return reply.trim();
}

async function requestGemini(model, message, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: buildSystemPrompt() }],
      },
      contents: [{ role: "user", parts: [{ text: message }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    const err = new Error(`Gemini HTTP ${res.status}: ${errorBody}`);
    err.status = res.status;
    err.retryable = res.status === 429 || res.status === 404;
    throw err;
  }

  const data = await res.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!reply) throw new Error("Gemini n'a pas renvoyé de contenu.");
  return reply.trim();
}

export default async function handler(req, res) {
  try {
    // En-têtes CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Méthode non autorisée" });
    }

    // Rate Limiting IP
    const clientIp =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket?.remoteAddress ||
      "anonymous";

    if (isRateLimited(clientIp)) {
      return res.status(429).json({
        error: "Trop de messages envoyés. Veuillez patienter une minute avant de réessayer.",
        code: "RATE_LIMIT_EXCEEDED",
      });
    }

    // Parsing tolérant du corps (objet ou chaîne)
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }

    const { message } = body || {};
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Le message est requis." });
    }

    const trimmed = message.trim();
    if (!trimmed || trimmed.length > 500) {
      return res.status(400).json({
        error: "Le message doit contenir entre 1 et 500 caractères.",
      });
    }

    const groqKey = process.env.GROQ_API_KEY?.trim();
    const geminiKey = process.env.GEMINI_API_KEY?.trim();

    // 1. Essai Groq si clé présente
    if (groqKey && groqKey.startsWith("gsk_")) {
      const models = [
        process.env.GROQ_MODEL?.trim() || DEFAULT_GROQ_MODEL,
        ...GROQ_FALLBACK_MODELS,
      ];
      for (const model of new Set(models)) {
        try {
          const reply = await requestGroq(model, trimmed, groqKey);
          return res.status(200).json({ reply, provider: "groq" });
        } catch (err) {
          if (!err.retryable && !geminiKey) {
            return res.status(503).json({ error: err.message, code: "AI_ERROR" });
          }
        }
      }
    }

    // 2. Repli Gemini si configuré
    if (geminiKey) {
      const models = [
        process.env.GEMINI_MODEL?.trim() || DEFAULT_GEMINI_MODEL,
        ...GEMINI_FALLBACK_MODELS,
      ];
      for (const model of new Set(models)) {
        try {
          const reply = await requestGemini(model, trimmed, geminiKey);
          return res.status(200).json({ reply, provider: "gemini" });
        } catch (err) {
          if (!err.retryable) break;
        }
      }
    }

    return res.status(503).json({
      error: "Aucun service d'IA n'a pu répondre. Vérifiez la configuration des clés API.",
      code: "AI_UNAVAILABLE",
    });
  } catch (error) {
    console.error("Erreur api/chat:", error);
    return res.status(500).json({
      error: "Une erreur interne est survenue sur le serveur.",
      details: error.message,
      code: "SERVER_ERROR",
    });
  }
}
