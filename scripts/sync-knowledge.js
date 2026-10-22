import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

console.log("=== Synchronisation automatique des connaissances (CV + Portfolio) ===");

// 1. Extraction du texte officiel du CV (assets/images/CV.pdf)
async function extractCvText() {
  const cvPath = path.join(rootDir, "assets/images/CV.pdf");
  if (!fs.existsSync(cvPath)) {
    console.warn("Fichier CV non trouvé :", cvPath);
    return "";
  }

  const buffer = new Uint8Array(fs.readFileSync(cvPath));
  const doc = await pdfjs.getDocument({ data: buffer, useSystemFonts: true }).promise;
  let fullText = "";

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map((item) => item.str);
    fullText += strings.join(" ") + "\n";
  }

  // Nettoyage des espaces multiples
  const cleaned = fullText.replace(/[ \t]+/g, " ").replace(/\n\s*\n/g, "\n").trim();
  console.log(`✓ CV officiel extrait (${cleaned.length} caractères, ${doc.numPages} page(s))`);
  return cleaned;
}

// 2. Extraction des traductions et données depuis script.js
function extractTranslations() {
  const scriptPath = path.join(rootDir, "script.js");
  const scriptContent = fs.readFileSync(scriptPath, "utf-8");

  const match = scriptContent.match(/const translations\s*=\s*(\{[\s\S]*?\n\s*\};\n)/);
  if (!match) {
    console.warn("Impossible d'extraire les traductions de script.js");
    return { fr: {}, en: {} };
  }

  const fn = new Function("return " + match[1]);
  const trans = fn();
  console.log(`✓ Traductions extraites de script.js (${Object.keys(trans.fr || {}).length} clés FR)`);
  return trans;
}

// 3. Extraction des projets depuis index.html & script.js
function extractProjects(indexHtml, translationsFr) {
  const projects = [];
  const cardRegex = /<article\s+class="[^"]*project-card[^"]*"([\s\S]*?)<\/article>/gi;
  let match;

  while ((match = cardRegex.exec(indexHtml)) !== null) {
    const cardHtml = match[1];

    const categoryMatch = cardHtml.match(/data-category="([^"]*)"/);
    const tagsMatch = cardHtml.match(/data-tags="([^"]*)"/);
    const titleKeyMatch = cardHtml.match(/data-i18n-title="([^"]*)"/);
    const subtitleKeyMatch = cardHtml.match(/data-i18n-subtitle="([^"]*)"/);
    const descKeyMatch = cardHtml.match(/data-i18n-description="([^"]*)"/);

    const titleKey = titleKeyMatch ? titleKeyMatch[1] : "";
    const subtitleKey = subtitleKeyMatch ? subtitleKeyMatch[1] : "";
    const descKey = descKeyMatch ? descKeyMatch[1] : "";

    const title = translationsFr[titleKey] || titleKey;
    const subtitle = translationsFr[subtitleKey] || subtitleKey;
    const description = translationsFr[descKey] || descKey;
    const category = categoryMatch ? categoryMatch[1] : "";
    const tags = tagsMatch ? tagsMatch[1].split(",").map((t) => t.trim()).filter(Boolean) : [];

    if (title) {
      projects.push({
        title,
        subtitle,
        category,
        tags,
        description,
      });
    }
  }

  console.log(`✓ ${projects.length} projets extraits depuis index.html & script.js`);
  return projects;
}

// 4. Extraction des compétences et sections textuelles
function extractSections(t) {
  return {
    hero: {
      eyebrow: t["hero.eyebrow"] || "",
      title: (t["hero.title"] || "").replace(/<[^>]*>/g, ""),
      text: t["hero.text"] || "",
      status: t["hero.meta1"] || "",
      location: t["hero.meta2"] || "",
    },
    about: {
      title: t["about.title"] || "",
      p1: t["about.p1"] || "",
      p2: t["about.p2"] || "",
      goals: [
        t["about.li1"],
        t["about.li2"],
        t["about.li3"],
        t["about.li4"],
      ].filter(Boolean),
    },
    skills: {
      ai: Object.keys(t)
        .filter((k) => k.startsWith("skills.ai.c"))
        .map((k) => t[k])
        .filter(Boolean),
      web: Object.keys(t)
        .filter((k) => k.startsWith("skills.web.c"))
        .map((k) => t[k])
        .filter(Boolean),
      software: Object.keys(t)
        .filter((k) => k.startsWith("skills.soft.c"))
        .map((k) => t[k])
        .filter(Boolean),
      tools: Object.keys(t)
        .filter((k) => k.startsWith("skills.tools.c"))
        .map((k) => t[k])
        .filter(Boolean),
    },
    contact: {
      statusTitle: t["contact.statusTitle"] || "",
      statusText: t["contact.statusText"] || "",
      location: t["contact.location"] || "Lyon, France",
      responseValue: t["contact.responseValue"] || "Sous 24h",
      languagesValue: t["contact.languagesValue"] || "Français · Anglais",
      cvLink: "https://lucas-debize.github.io/portfolio/assets/images/CV.pdf",
      email: "lucas.debize@epitech.eu",
      github: "https://github.com/lucas-debize",
      linkedin: "https://linkedin.com/in/lucas-debize",
      portfolio: "https://lucas-debize.github.io/portfolio/",
    },
  };
}

async function main() {
  const cvText = await extractCvText();
  const translations = extractTranslations();
  const tFr = translations.fr || {};

  const indexPath = path.join(rootDir, "index.html");
  const indexHtml = fs.readFileSync(indexPath, "utf-8");

  const projects = extractProjects(indexHtml, tFr);
  const sections = extractSections(tFr);

  const knowledge = {
    lastSyncedAt: new Date().toISOString(),
    cvText,
    hero: sections.hero,
    about: sections.about,
    skills: sections.skills,
    projects,
    contact: sections.contact,
  };

  const outputJsPath = path.join(rootDir, "api/knowledge.js");
  const fileContent = `// AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
// This file is automatically generated by scripts/sync-knowledge.js
// from assets/images/CV.pdf, index.html and script.js during build or sync.
// Last generated: ${knowledge.lastSyncedAt}

export const KNOWLEDGE = ${JSON.stringify(knowledge, null, 2)};
`;

  fs.writeFileSync(outputJsPath, fileContent, "utf-8");
  console.log(`✓ Base de connaissances générée avec succès dans ${outputJsPath} (${fileContent.length} octets)`);
}

main().catch((err) => {
  console.error("Erreur lors de la synchronisation:", err);
  process.exit(1);
});
