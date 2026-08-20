const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

function updateThemeIcon() {
  themeIcon.textContent = root.getAttribute("data-theme") === "light" ? "☾" : "☀";
}
updateThemeIcon();

themeToggle?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon();
});

const translations = {
  fr: {
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio étudiant",
    "hero.title":
      "Développeur en devenir,<br/>passionné de <span class=\"grad-text\">code</span> &amp; d'<span class=\"grad-text\">IA</span>.",
    "hero.text":
      "Étudiant en informatique, je conçois des projets concrets en intelligence artificielle, web et développement logiciel. Architecture propre, interfaces soignées, logique technique.",
    "hero.cta1": "Voir les projets",
    "hero.cta2": "Me contacter",
    "hero.meta1": "Disponible pour un stage",
    "hero.meta2": "Basé en France",
    "hero.side1.label": "Focus",
    "hero.side1.title": "IA · Web · Logiciel",
    "hero.side1.text":
      "Développement applicatif, interfaces modernes et expérimentations autour de l'intelligence artificielle.",
    "hero.side2.label": "Approche",
    "hero.side2.title": "Concret & soigné",
    "hero.side2.text":
      "Projets aboutis, code structuré, interfaces lisibles et logique technique assumée.",

    "stats.projects": "Projets réalisés",
    "stats.domains": "Domaines principaux",
    "stats.techs": "Technologies utilisées",

    "about.eyebrow": "À propos",
    "about.title": "Profil",
    "about.p1":
      "Étudiant en informatique, j'utilise ce portfolio pour présenter différents projets réalisés en intelligence artificielle, web et développement logiciel.",
    "about.p2":
      "L'objectif : montrer des réalisations concrètes, la manière dont elles ont été conçues, ainsi que les outils et technologies utilisés.",
    "about.listTitle": "Ce que je cherche à montrer",
    "about.li1": "des projets variés et structurés",
    "about.li2": "une approche technique claire",
    "about.li3": "une attention à l'interface et à l'expérience utilisateur",
    "about.li4": "un intérêt réel pour les sujets liés à l'IA",

    "projects.eyebrow": "Projets",
    "projects.title": "Sélection de réalisations",
    "projects.filterAll": "Tous",
    "projects.filterSoft": "Logiciel",
    "projects.filterWeb": "Web",
    "projects.filterAi": "IA",
    "projects.filterPerso": "Personnel",
    "projects.badge.tech": "Projet technique",
    "projects.badge.perso": "Projet personnel",

    "projects.chess.title": "Chess Vision",
    "projects.chess.subtitle": "Analyse visuelle d'un plateau d'échecs",
    "projects.chess.description":
      "Projet orienté vision par ordinateur visant à reconnaître l'état d'un échiquier à partir d'une image. Travail sur le traitement d'image, l'extraction d'informations visuelles et l'interprétation du plateau.",
    "projects.chess.short":
      "Reconnaissance d'un état de jeu d'échecs à partir d'une image.",

    "projects.portfolio.title": "Portfolio",
    "projects.portfolio.subtitle": "Conception et développement front-end",
    "projects.portfolio.description":
      "Création de ce portfolio avec une attention particulière portée à la hiérarchie visuelle, aux animations, au responsive et à la mise en valeur des projets.",
    "projects.portfolio.short":
      "Interface pensée pour présenter des projets et compétences de manière claire.",

    "projects.dashboard.title": "Dashboard IA",
    "projects.dashboard.subtitle": "Intégration d'outils IA dans une interface web",
    "projects.dashboard.description":
      "Prototype d'interface permettant de manipuler différents traitements liés à l'IA dans une interface web claire. Travail sur la structuration front-end et l'intégration de fonctionnalités interactives.",
    "projects.dashboard.short":
      "Interface web pour expérimenter et présenter des fonctionnalités liées à l'IA.",

    "projects.powerAutomate.title": "Microsoft Power Automate",
    "projects.powerAutomate.subtitle": "Gestion de demandes clients",
    "projects.powerAutomate.description": "Flux no-code qui prend une demande via Microsoft Forms, la classifie avec IA (catégorie, priorité, résumé) et la stocke dans une liste SharePoint. Une tâche Planner est créée dans le bon compartiment, l’équipe est alertée sur Teams, et un brouillon d’email est généré puis validé manuellement avant envoi au client.",
    "projects.powerAutomate.short": "Flux no-code : Forms, classification IA, SharePoint, Planner, Teams et validation d'email.",

    "projects.rag.title": "RAG Monitor",
    "projects.rag.subtitle": "Système RAG local avec monitoring & CI/CD",
    "projects.rag.description": "Système de question-réponse basé sur des documents, propulsé par un LLM local et gratuit. Le projet intègre un pipeline RAG complet, un monitoring du drift, un versioning des expériences et une pipeline CI/CD entièrement automatisée. Tout s'exécute localement via Docker et se lance en une seule commande.",
    "projects.rag.short": "Système RAG local complet avec monitoring et pipeline CI/CD automatisée.",

    "projects.chatbot.title": "Chatbot IA Portfolio",
    "projects.chatbot.subtitle": "Assistant conversationnel sur profil développeur",
    "projects.chatbot.description": "Chatbot utilisant React, Express et l'API Google Gemini pour répondre aux questions sur mon profil développeur. Le backend charge profile.json comme base de connaissances et injecte son contenu dans le prompt système Gemini. Architecture : React (5173) → Express (3001) → Gemini API, avec bascule automatique sur un modèle de repli si le modèle configuré est indisponible.",
    "projects.chatbot.short": "Chatbot Gemini qui répond aux questions sur mon profil à partir de profile.json.",

    "projects.assistantRh.title": "Assistant RH IA",
    "projects.assistantRh.subtitle": "Automatisation des candidatures par email",
    "projects.assistantRh.description": "Workflow 100 % local : réception d'un email avec CV PDF → extraction → analyse IA (Ollama) → stockage PostgreSQL → notification recruteur. Orchestration via n8n, configuration centralisée dans un seul fichier .env, déclenchement à la réception IMAP (sans planification). Stack Docker : n8n, pdf-extractor, Ollama et PostgreSQL.",
    "projects.assistantRh.short": "Pipeline local n8n : CV par email, analyse Ollama, score PostgreSQL, alerte recruteur.",

    "projects.elyrii.title": "Elyrii",
    "projects.elyrii.subtitle": "Application mobile IA de soutien émotionnel",
    "projects.elyrii.description": "Application mobile innovante intégrant l'IA pour accompagner les personnes en dépression ou en difficulté émotionnelle. Elyrii propose une mascotte interactive intelligente qui dialogue avec l'utilisateur, lui propose des défis quotidiens, et peut jouer le rôle de conseiller bienveillant ou de journal intime numérique.",
    "projects.elyrii.short": "Mascotte IA mobile pour accompagner les personnes en difficulté émotionnelle.",

    "projects.denoise.title": "Image Denoising",
    "projects.denoise.subtitle": "Modèle IA de débruitage d'images",
    "projects.denoise.description": "Entraînement d'un modèle d'IA capable de débruiter des images. Le pipeline ajoute artificiellement du bruit à des images d'entrée, puis entraîne un réseau de neurones à reconstruire l'image originale au plus près. Implémenté sur Google Colab pour profiter de l'accélération GPU.",
    "projects.denoise.short": "Réseau de neurones entraîné à reconstruire des images bruitées.",

    "projects.prospecthor.title": "Prospecthor",
    "projects.prospecthor.subtitle": "Application de gestion intelligente d'emails",
    "projects.prospecthor.description": "Application développée en binôme avec mon maître de stage, permettant la gestion automatisée des emails grâce à l'IA. Le système analyse chaque message reçu, détecte s'il s'agit de prospection commerciale, et attribue une note en fonction de l'intention détectée comparée aux critères définis par le client. Stack complète : back-end Python pour les modèles d'IA et l'analyse sémantique, front-end Flutter multiplateforme et services PHP. Projet collaboratif versionné sur GitLab.",
    "projects.prospecthor.short": "Application de tri d'emails par IA avec scoring d'intention de prospection.",

    "projects.recognition.title": "Image Recognition",
    "projects.recognition.subtitle": "Classification d'images avec CNN",
    "projects.recognition.description": "Entraînement d'un modèle d'IA dédié à la classification d'images sur différents datasets (chats, chiens, voitures, etc.). Le projet explore les architectures de réseaux convolutifs (CNN) et leurs performances sur des problèmes multi-classes. Réalisé sur Google Colab.",
    "projects.recognition.short": "CNN entraînés sur plusieurs datasets pour de la classification multi-classes.",

    "projects.chess.title": "Chess Game State",
    "projects.chess.subtitle": "Analyse visuelle d'un plateau d'échecs",
    "projects.chess.description": "Projet de vision par ordinateur visant à reconnaître automatiquement l'état d'un échiquier à partir d'une simple image. Mise en œuvre de techniques de traitement d'image, d'extraction de caractéristiques visuelles et d'interprétation du plateau pour identifier la position de chaque pièce.",
    "projects.chess.short": "Reconnaissance d'un état de jeu d'échecs à partir d'une image.",

    "projects.ue5chess.title": "Échecs Multijoueur UE5",
    "projects.ue5chess.subtitle": "Jeu d'échecs en ligne sous Unreal Engine 5",
    "projects.ue5chess.description": "Jeu d'échecs multijoueur en ligne jouable via Steam, développé sous Unreal Engine 5.6.1 en Blueprint et C++. Le jeu réinvente les échecs traditionnels avec un système de factions uniques et de pouvoirs spéciaux, apportant une profondeur stratégique inédite.",
    "projects.ue5chess.short": "Échecs en ligne sur Steam avec factions et pouvoirs spéciaux.",

    "projects.rtype.title": "R-Type",
    "projects.rtype.subtitle": "Moteur de jeu réseau en C++ from scratch",
    "projects.rtype.description": "Recréation du célèbre shoot 'em up R-Type avec un moteur de jeu réseau développé entièrement from scratch en C++. Le projet exploite SFML pour le rendu graphique et Boost pour les utilitaires réseau. Architecture modulaire, multiplateforme et pensée pour la scalabilité.",
    "projects.rtype.short": "Moteur de jeu réseau multiplateforme codé from scratch en C++.",

    "projects.portfolio.title": "Portfolio",
    "projects.portfolio.subtitle": "Conception et développement front-end",
    "projects.portfolio.description": "Conception et développement de ce portfolio personnel from scratch en HTML, CSS et JavaScript pur, sans framework. Travail approfondi sur la hiérarchie visuelle, les animations, le responsive design, le système de thème clair/sombre, le multilingue (FR/EN) et la mise en valeur des projets via une modale interactive.",
    "projects.portfolio.short": "Site personnel développé from scratch pour présenter mes projets.",

    "tag.ai": "IA",
    "tag.web": "Web",
    "tag.software": "Logiciel",
    "tag.personal": "Personnel",

    "skills.eyebrow": "Compétences",
    "skills.title": "Technologies et domaines",
    "skills.ai.title": "Intelligence artificielle",
    "skills.ai.c1": "Python",
    "skills.ai.c2": "NLP",
    "skills.ai.c3": "Classification",

    "skills.web.title": "Développement web",
    "skills.web.c1": "HTML",
    "skills.web.c2": "PHP",
    "skills.web.c3": "JavaScript",
    "skills.web.c4": "React",
    "skills.web.c5": "PostgreSQL",
    "skills.web.c6": "Flutter",

    "skills.soft.title": "Développement logiciel",
    "skills.soft.c1": "C",
    "skills.soft.c2": "C++",
    "skills.soft.c3": "UE5",

    "skills.tools.title": "Outils",
    "skills.tools.c1": "Gitlab",
    "skills.tools.c2": "Git",
    "skills.tools.c3": "Docker",
    "skills.tools.c4": "Bash",

    "contact.eyebrow": "Contact",
    "contact.title": "Échangeons",
    "contact.headline": "Une idée, un projet, une opportunité ?",
    "contact.text":
      "Que ce soit pour un stage, une collaboration ou simplement pour échanger autour d'un projet, je serai ravi de discuter. Réponse rapide garantie.",
    "contact.statusTitle": "Disponible immédiatement",
    "contact.statusText": "Stage / CDI / CDD / Projets",
    "contact.location": "Localisation",
    "contact.response": "Délai de réponse",
    "contact.responseValue": "Sous 24h",
    "contact.languages": "Langues",
    "contact.languagesValue": "Français · Anglais",
    "contact.cv": "CV",
    "contact.cvValue": "Voir le PDF",

    "modal.cta": "Voir le projet",
  },

  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.eyebrow": "Student portfolio",
    "hero.title":
      "Developer in the making,<br/>passionate about <span class=\"grad-text\">code</span> &amp; <span class=\"grad-text\">AI</span>.",
    "hero.text":
      "Computer science student building concrete projects in artificial intelligence, web development and software development. Clean architecture, polished interfaces, solid technical logic.",
    "hero.cta1": "View projects",
    "hero.cta2": "Contact me",
    "hero.meta1": "Open to internship",
    "hero.meta2": "Based in France",
    "hero.side1.label": "Focus",
    "hero.side1.title": "AI · Web · Software",
    "hero.side1.text":
      "Application development, modern interfaces and experiments around artificial intelligence.",
    "hero.side2.label": "Approach",
    "hero.side2.title": "Concrete & polished",
    "hero.side2.text":
      "Solid projects, structured code, readable interfaces and committed technical logic.",

    "stats.projects": "Projects completed",
    "stats.domains": "Main domains",
    "stats.techs": "Technologies used",

    "about.eyebrow": "About",
    "about.title": "Profile",
    "about.p1":
      "Computer science student, I use this portfolio to showcase various projects in artificial intelligence, web development and software development.",
    "about.p2":
      "The goal: show concrete work, how it was designed, and the tools and technologies used.",
    "about.listTitle": "What I aim to show",
    "about.li1": "varied and structured projects",
    "about.li2": "a clear technical approach",
    "about.li3": "attention to interface and user experience",
    "about.li4": "a genuine interest in AI-related topics",

    "projects.eyebrow": "Projects",
    "projects.title": "Selected works",
    "projects.filterAll": "All",
    "projects.filterSoft": "Software",
    "projects.filterWeb": "Web",
    "projects.filterAi": "AI",
    "projects.filterPerso": "Personal",
    "projects.badge.tech": "Technical project",
    "projects.badge.perso": "Personal project",

    "projects.chess.title": "Chess Vision",
    "projects.chess.subtitle": "Visual analysis of a chess board",
    "projects.chess.description":
      "Computer vision project aimed at recognising the state of a chessboard from an image. Work on image processing, visual information extraction and board interpretation.",
    "projects.chess.short": "Chess game state recognition from an image.",

    "projects.portfolio.title": "Portfolio",
    "projects.portfolio.subtitle": "Front-end design and development",
    "projects.portfolio.description":
      "Creation of this portfolio with particular attention to visual hierarchy, animations, responsiveness and project showcasing.",
    "projects.portfolio.short":
      "Interface designed to clearly present projects and skills.",

    "projects.dashboard.title": "AI Dashboard",
    "projects.dashboard.subtitle": "Integrating AI tools into a web interface",
    "projects.dashboard.description":
      "Interface prototype for manipulating various AI-related processes in a clear web interface. Work on front-end structure and integration of interactive features.",
    "projects.dashboard.short":
      "Web interface to experiment with and present AI features.",

    "projects.portfolio.title": "Portfolio",
    "projects.portfolio.subtitle": "Front-end design and development",
    "projects.portfolio.description": "Design and development of this personal portfolio built from scratch with vanilla HTML, CSS and JavaScript, no framework. Strong focus on visual hierarchy, animations, responsive design, light/dark theme system, multilingual support (FR/EN), and an interactive modal to showcase projects.",
    "projects.portfolio.short": "Personal website built from scratch to showcase my projects.",

    "projects.powerAutomate.title": "Microsoft Power Automate",
    "projects.powerAutomate.subtitle": "Client request management",
    "projects.powerAutomate.description": "No-code flow that takes a request via Microsoft Forms, classifies it with AI (category, priority, summary) and stores it in a SharePoint list. A Planner task is created in the right bucket, the team is alerted on Teams, and an email draft is generated then manually validated before sending to the client.",
    "projects.powerAutomate.short": "No-code flow: Forms, AI classification, SharePoint, Planner, Teams and email validation.",

    "projects.rag.title": "RAG Monitor",
    "projects.rag.subtitle": "Local RAG system with monitoring & CI/CD",
    "projects.rag.description": "A document-based question-answering system powered by a free, local LLM. It includes a complete RAG pipeline, drift monitoring, experiment versioning, and a fully automated CI/CD pipeline. Everything runs locally through Docker and launches with a single command.",
    "projects.rag.short": "Full local RAG system with monitoring and automated CI/CD pipeline.",

    "projects.chatbot.title": "Chatbot IA Portfolio",
    "projects.chatbot.subtitle": "Conversational assistant for developer profile",
    "projects.chatbot.description": "Chatbot built with React, Express and the Google Gemini API to answer questions about my developer profile. The backend loads profile.json as a knowledge base and injects its content into the Gemini system prompt. Architecture: React (5173) → Express (3001) → Gemini API, with automatic fallback to a backup model if the configured one is unavailable.",
    "projects.chatbot.short": "Gemini-powered chatbot that answers profile questions from profile.json.",

    "projects.assistantRh.title": "HR AI Assistant",
    "projects.assistantRh.subtitle": "Email-driven application automation",
    "projects.assistantRh.description": "Fully local workflow: incoming email with PDF resume → extraction → AI analysis (Ollama) → PostgreSQL storage → recruiter notification. Orchestrated with n8n, centralized configuration in a single .env file, triggered on IMAP receipt (no scheduling). Docker stack: n8n, pdf-extractor, Ollama and PostgreSQL.",
    "projects.assistantRh.short": "Local n8n pipeline: resume by email, Ollama analysis, PostgreSQL scoring, recruiter alert.",

    "projects.elyrii.title": "Elyrii",
    "projects.elyrii.subtitle": "AI-powered mobile app for emotional support",
    "projects.elyrii.description": "An innovative mobile application leveraging AI to support people dealing with depression or emotional struggles. Elyrii features an interactive AI-powered mascot that engages with users, suggests daily challenges, and acts as a caring companion or digital journal.",
    "projects.elyrii.short": "AI mascot mobile app supporting people facing emotional struggles.",

    "projects.denoise.title": "Image Denoising",
    "projects.denoise.subtitle": "AI model for image denoising",
    "projects.denoise.description": "Training of an AI model capable of denoising images. The pipeline artificially adds noise to input images, then trains a neural network to reconstruct the original image as accurately as possible. Implemented on Google Colab to leverage GPU acceleration.",
    "projects.denoise.short": "Neural network trained to reconstruct noisy images.",

    "projects.prospecthor.title": "Prospecthor",
    "projects.prospecthor.subtitle": "Smart email management application",
    "projects.prospecthor.description": "Application developed as a pair with my internship supervisor, automating email management with AI. The system analyzes each incoming message, detects whether it is commercial prospecting, and assigns a score based on the detected intent compared to the client's criteria. Full stack: Python backend for AI models and semantic analysis, cross-platform Flutter frontend, and PHP services. Collaborative project versioned on GitLab.",
    "projects.prospecthor.short": "AI email sorting app with prospecting intent scoring.",

    "projects.recognition.title": "Image Recognition",
    "projects.recognition.subtitle": "Image classification with CNNs",
    "projects.recognition.description": "Training of an AI model dedicated to image classification across various datasets (cats, dogs, cars, etc.). The project explores convolutional neural network (CNN) architectures and their performance on multi-class problems. Built on Google Colab.",
    "projects.recognition.short": "CNNs trained on multiple datasets for multi-class classification.",

    "projects.chess.title": "Chess Game State",
    "projects.chess.subtitle": "Visual analysis of a chess board",
    "projects.chess.description": "A computer vision project that automatically recognizes the state of a chessboard from a single image. It applies image processing techniques, visual feature extraction, and board interpretation to detect the position of every piece.",
    "projects.chess.short": "Chess game state recognition from an image.",

    "projects.ue5chess.title": "Multiplayer Chess UE5",
    "projects.ue5chess.subtitle": "Online chess game built with Unreal Engine 5",
    "projects.ue5chess.description": "An online multiplayer chess game playable via Steam, built with Unreal Engine 5.6.1 using both Blueprint and C++. This game reinvents traditional chess with unique factions and special abilities, bringing a fresh strategic depth to the genre.",
    "projects.ue5chess.short": "Online Steam chess featuring unique factions and special abilities.",

    "projects.rtype.title": "R-Type",
    "projects.rtype.subtitle": "Networked game engine in C++ from scratch",
    "projects.rtype.description": "A recreation of the iconic R-Type shoot 'em up, powered by a fully networked game engine built from scratch in C++. Leveraging SFML for rendering and Boost for networking utilities, the project features a modular, cross-platform, and scalable architecture.",
    "projects.rtype.short": "Cross-platform networked game engine built from scratch in C++.",

    "tag.ai": "AI",
    "tag.web": "Web",
    "tag.software": "Software",
    "tag.personal": "Personal",
  
    "skills.eyebrow": "Skills",
    "skills.title": "Technologies & domains",
    "skills.ai.title": "Artificial intelligence",
    "skills.ai.c1": "Python",
    "skills.ai.c2": "NLP",
    "skills.ai.c3": "Classification",

    "skills.web.title": "Web development",
    "skills.web.c1": "HTML",
    "skills.web.c2": "PHP",
    "skills.web.c3": "JavaScript",
    "skills.web.c4": "React",
    "skills.web.c5": "PostgreSQL",
    "skills.web.c6": "Flutter",

    "skills.soft.title": "Software development",
    "skills.soft.c1": "C",
    "skills.soft.c2": "C++",
    "skills.soft.c3": "UE5",

    "skills.tools.title": "Tools",
    "skills.tools.c1": "Gitlab",
    "skills.tools.c2": "Git",
    "skills.tools.c3": "Docker",
    "skills.tools.c4": "Bash",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.headline": "An idea, a project, an opportunity?",
    "contact.text":
      "Whether for an internship, a collaboration or simply to discuss a project, I would be happy to chat. Quick reply guaranteed.",
    "contact.statusTitle": "Available now",
    "contact.statusText": "Internship / Permanent / Fixed-term / Projects",
    "contact.location": "Location",
    "contact.response": "Response time",
    "contact.responseValue": "Within 24h",
    "contact.languages": "Languages",
    "contact.languagesValue": "French · English",
    "contact.cv": "Resume",
    "contact.cvValue": "View PDF",

    "modal.cta": "View project",
  },
};

let currentLang = localStorage.getItem("lang") || "fr";

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    const fields = ["title", "subtitle", "description", "short"];

    fields.forEach((field) => {
      const key = card.getAttribute(`data-i18n-${field}`);
      if (key && t[key] !== undefined) {
        card.setAttribute(`data-${field}`, t[key]);
      }
    });

    const titleEl = card.querySelector(".card-title");
    const shortEl = card.querySelector(".project-body p");
    const badgeEl = card.querySelector(".badge-main");

    const titleKey = card.getAttribute("data-i18n-title");
    const shortKey = card.getAttribute("data-i18n-short");
    const badgeKey = card.getAttribute("data-i18n-badge");

    if (titleEl && titleKey && t[titleKey]) titleEl.textContent = t[titleKey];
    if (shortEl && shortKey && t[shortKey]) shortEl.textContent = t[shortKey];
    if (badgeEl && badgeKey && t[badgeKey]) badgeEl.textContent = t[badgeKey];
  });

  const modalCta = document.getElementById("modalLink");
  if (modalCta && t["modal.cta"]) modalCta.textContent = t["modal.cta"];

  document.documentElement.setAttribute("lang", lang);

  document.getElementById("langLabel").textContent = lang === "fr" ? "EN" : "FR";

  currentLang = lang;
  localStorage.setItem("lang", lang);
}

applyLang(currentLang);

document.getElementById("langToggle")?.addEventListener("click", () => {
  applyLang(currentLang === "fr" ? "en" : "fr");
});

function computeStats() {
  const allCards = document.querySelectorAll(".project-card");

  const totalProjects = allCards.length;

  const domains = new Set();
  allCards.forEach((c) => {
    (c.getAttribute("data-category") || "")
      .split(" ")
      .filter(Boolean)
      .forEach((d) => domains.add(d));
  });

  const techs = new Set();
  allCards.forEach((c) => {
    (c.getAttribute("data-tags") || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((t) => techs.add(t));
  });

  animateCounter("statProjects", totalProjects);
  animateCounter("statDomains", domains.size - 1);
  animateCounter("statTechs", techs.size);
}

function animateCounter(id, target) {
  const el = document.getElementById(id);
  if (!el) return;

  if (target <= 0) {
    el.textContent = "0";
    return;
  }

  const suffix = target >= 10 ? "+" : "";
  let start = 0;
  const duration = 900;
  const step = Math.max(30, Math.ceil(duration / target));

  const timer = setInterval(() => {
    start++;
    el.textContent = start + (start >= target ? suffix : "");
    if (start >= target) clearInterval(timer);
  }, step);
}

computeStats();

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      const cats = card.dataset.category || "";
      card.classList.toggle("hidden", filter !== "all" && !cats.includes(filter));
    });
  });
});

const modal = document.getElementById("projectModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalVideo = document.getElementById("modalVideo");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalLink = document.getElementById("modalLink");

function stopModalVideo() {
  if (!modalVideo) return;
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  modalVideo.hidden = true;
  modal?.classList.remove("has-video");
}

function openModal(card) {
  modalTitle.textContent = card.dataset.title || "";
  modalSubtitle.textContent = card.dataset.subtitle || "";
  modalDescription.textContent = card.dataset.description || "";

  const video = (card.dataset.video || "").trim();
  if (video) {
    modal.classList.add("has-video");
    modalImage.hidden = true;
    modalImage.removeAttribute("src");
    modalImage.alt = "";
    modalVideo.hidden = false;
    modalVideo.src = video;
    modalVideo.currentTime = 0;
    modalVideo.addEventListener(
      "loadeddata",
      () => {
        modalVideo.play().catch(() => {});
      },
      { once: true }
    );
  } else {
    stopModalVideo();
    modalImage.hidden = false;
    modalImage.src = card.dataset.image || "";
    modalImage.alt = `Image du projet ${card.dataset.title || ""}`;
  }

  const link = (card.dataset.link || "").trim();
  const modalActions = modalLink?.closest(".modal-actions");
  if (link) {
    modalLink.href = link;
    modalLink.hidden = false;
    if (modalActions) modalActions.hidden = false;
  } else {
    modalLink.removeAttribute("href");
    modalLink.hidden = true;
    if (modalActions) modalActions.hidden = true;
  }

  const t = translations[currentLang];
  if (t && t["modal.cta"]) modalLink.textContent = t["modal.cta"];

  modalTags.innerHTML = "";
  (card.dataset.tags || "")
    .split(",")
    .filter(Boolean)
    .forEach((tag) => {
      const span = document.createElement("span");
      span.className = "badge";
      span.textContent = tag.trim();
      modalTags.appendChild(span);
    });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  stopModalVideo();
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => openModal(card));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(card);
    }
  });
});

modalOverlay?.addEventListener("click", closeModal);
modalClose?.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop?.classList.toggle("visible", window.scrollY > 400);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
