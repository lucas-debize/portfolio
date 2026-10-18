export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const groqKey = process.env.GROQ_API_KEY?.trim();
  const geminiKey = process.env.GEMINI_API_KEY?.trim();

  const isGroqValid = Boolean(groqKey && groqKey.startsWith("gsk_"));
  const isGeminiValid = Boolean(
    geminiKey && (geminiKey.startsWith("AIza") || geminiKey.startsWith("AQ."))
  );

  if (!groqKey && !geminiKey) {
    return res.status(503).json({
      available: false,
      code: "AI_NOT_CONFIGURED",
      error: "L'IA n'est pas configurée. Ajoutez une clé GROQ_API_KEY ou GEMINI_API_KEY dans les variables d'environnement.",
      primaryProvider: "none",
      fallbackAvailable: false,
      activeModel: "",
    });
  }

  if (!isGroqValid && !isGeminiValid) {
    return res.status(503).json({
      available: false,
      code: "AI_INVALID_KEY",
      error: "Les clés d'API configurées semblent invalides (format gsk_ ou AIza/AQ attendu).",
      primaryProvider: "none",
      fallbackAvailable: false,
      activeModel: "",
    });
  }

  const primaryProvider = isGroqValid ? "groq" : "gemini";
  const fallbackAvailable = isGroqValid ? isGeminiValid : false;
  const activeModel = isGroqValid
    ? process.env.GROQ_MODEL?.trim() || "llama-3.3-70b-versatile"
    : process.env.GEMINI_MODEL?.trim() || "gemini-flash-lite-latest";

  return res.status(200).json({
    available: true,
    primaryProvider,
    fallbackAvailable,
    activeModel,
  });
}
