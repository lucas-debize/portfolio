const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

function syncThemeColor() {
  if (!themeColorMeta) return;
  themeColorMeta.setAttribute(
    "content",
    root.getAttribute("data-theme") === "light" ? "#f3eee5" : "#100f0d"
  );
}
syncThemeColor();

themeToggle?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  syncThemeColor();
});

const translations = {
  fr: {
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio · Développeur Full-Stack & IA",
    "hero.title":
      "Développeur <span class=\"grad-text\">IA</span> &amp; <span class=\"grad-text\">full-stack</span>,<br/>expert en <span class=\"grad-text\">automatisation</span>.",
    "hero.text":
      "En 5ème année à Epitech Lyon, je conçois et déploie des solutions concrètes en intelligence artificielle, automatisation de processus et développement web full-stack. Architectures robustes, interfaces soignées et logique technique maîtrisée.",
    "hero.cta1": "Voir les projets",
    "hero.cta2": "Me contacter",
    "hero.meta1": "Stage fin d'études / CDI (Mars 2027)",
    "hero.meta2": "Lyon, France",
    "hero.side1.label": "Focus",
    "hero.side1.title": "IA · Automatisation · Full-Stack",
    "hero.side1.text":
      "Déploiement de workflows d'automatisation, intégration de modèles d'IA (LLMs, RAG, NLP) et développement d'applications SaaS complètes.",
    "hero.side2.label": "Approche",
    "hero.side2.title": "Concret & soigné",
    "hero.side2.text":
      "Projets aboutis, code structuré, interfaces ergonomiques et rigueur technique de bout en bout.",
    "stats.projects": "Projets réalisés",
    "stats.domains": "Domaines principaux",
    "stats.techs": "Technologies utilisées",

    "about.eyebrow": "À propos",
    "about.title": "Profil",
    "about.p1":
      "Actuellement en 5ème année à Epitech Lyon après une 4ème année internationale à Epitech Berlin, je développe des solutions performantes alliant intelligence artificielle, automatisation de processus et développement logiciel full-stack.",
    "about.p2":
      "De la conception d'architectures SaaS à la mise en production de pipelines RAG locaux et de workflows d'automatisation, je privilégie l'efficacité opérationnelle et la qualité d'exécution.",
    "about.listTitle": "Domaines d'expertise & atouts",
    "about.li1": "des architectures logicielles structurées et prêtes pour la production",
    "about.li2": "une expertise pratique en IA (LLMs, RAG, NLP) et automatisation",
    "about.li3": "une maîtrise full-stack avec une attention portée à l'expérience utilisateur",
    "about.li4": "une capacité d'adaptation rapide sur des stacks modernes et exigeantes",
    "projects.eyebrow": "Projets",
    "projects.title": "Sélection de réalisations",
    "projects.filterAll": "Tous",
    "projects.filterSoft": "Logiciel",
    "projects.filterWeb": "Web",
    "projects.filterAi": "IA",
    "projects.filterPerso": "Personnel",
    "projects.badge.tech": "Projet technique",
    "projects.badge.perso": "Projet personnel",

    "projects.powerAutomate.title": "Microsoft Power Automate",
    "projects.powerAutomate.subtitle": "Gestion de demandes clients",
    "projects.powerAutomate.description": "Flux no-code qui prend une demande via Microsoft Forms, la classifie avec IA (catégorie, priorité, résumé) et la stocke dans une liste SharePoint. Une tâche Planner est créée dans le bon compartiment, l’équipe est alertée sur Teams, et un brouillon d’email est généré puis validé manuellement avant envoi au client.",
    "projects.powerAutomate.short": "Orchestration no-code de demandes clients avec classification IA et validation humaine.",

    "projects.rag.title": "RAG Monitor",
    "projects.rag.subtitle": "Système RAG local avec monitoring & CI/CD",
    "projects.rag.description": "Système de question-réponse basé sur des documents, propulsé par un LLM local et gratuit. Le projet intègre un pipeline RAG complet, un monitoring du drift, un versioning des expériences et une pipeline CI/CD entièrement automatisée. Tout s'exécute localement via Docker et se lance en une seule commande.",
    "projects.rag.short": "Système RAG local avec surveillance de dérive en temps réel et suivi d'expériences MLflow.",

    "projects.chatbot.title": "Chatbot IA Portfolio",
    "projects.chatbot.subtitle": "Assistant conversationnel IA hybride",
    "projects.chatbot.description": "Assistant conversationnel intelligent pour portfolio propulsé par une architecture IA hybride. Il utilise Groq (Llama 3.3 70B) en moteur principal pour des réponses instantanées, avec bascule automatique sur Google Gemini en cas d'indisponibilité. Stack développée avec React 19, Vite et Express.",
    "projects.chatbot.short": "Assistant conversationnel hybride ultra-rapide sous Groq (Llama 3.3 70B) et repli Gemini.",

    "projects.assistantRh.title": "Assistant RH IA",
    "projects.assistantRh.subtitle": "Automatisation des candidatures par email",
    "projects.assistantRh.description": "Workflow 100 % local : réception d'un email avec CV PDF → extraction → analyse IA (Ollama) → stockage PostgreSQL → notification recruteur. Orchestration via n8n, configuration centralisée dans un seul fichier .env, déclenchement à la réception IMAP (sans planification). Stack Docker : n8n, pdf-extractor, Ollama et PostgreSQL.",
    "projects.assistantRh.short": "Pipeline souverain de tri et scoring sémantique de candidatures par IA locale (Ollama).",

    "projects.elyrii.title": "Elyrii",
    "projects.elyrii.subtitle": "Application mobile IA de soutien émotionnel",
    "projects.elyrii.description": "Application mobile d'accompagnement émotionnel développée en Flutter dans le cadre du projet de fin d'études Epitech. Elle propose une mascotte interactive, un journal numérique et des quêtes quotidiennes, connectés à des microservices TypeScript (Hono) et un modèle Mistral-7B adapté.",
    "projects.elyrii.short": "Application mobile Flutter de soutien émotionnel avec compagnon IA et microservices Hono.",

    "projects.denoise.title": "Image Denoising",
    "projects.denoise.subtitle": "Autoencodeur U-Net de débruitage d'images",
    "projects.denoise.description": "Autoencodeur convolutif U-Net avec connexions résiduelles développé sous TensorFlow et Keras. Entraîné sur le jeu de données CIFAR-10 altéré par un bruit gaussien synthétique, le réseau apprend à reconstruire fidèlement les images d'origine avec optimisation de l'erreur quadratique moyenne (MSE).",
    "projects.denoise.short": "Restauration et débruitage d'images haute fidélité par autoencodeur convolutif U-Net.",

    "projects.prospecthor.title": "Prospecthor",
    "projects.prospecthor.subtitle": "Application de gestion intelligente d'emails",
    "projects.prospecthor.description": "Application développée en binôme avec mon maître de stage, permettant la gestion automatisée des emails grâce à l'IA. Le système analyse chaque message reçu, détecte s'il s'agit de prospection commerciale, et attribue une note en fonction de l'intention détectée comparée aux critères définis par le client. Stack complète : back-end Python pour les modèles d'IA et l'analyse sémantique, front-end Flutter multiplateforme et services PHP. Projet collaboratif versionné sur GitLab.",
    "projects.prospecthor.short": "Plateforme SaaS de qualification d'emails et détection de prospection commerciale par NLP.",

    "projects.recognition.title": "Image Recognition",
    "projects.recognition.subtitle": "Classification d'images avec CNN & Grad-CAM",
    "projects.recognition.description": "Modèle de vision par ordinateur convolutif (CNN) entraîné sur le dataset CIFAR-10 avec data augmentation. Le projet intègre un module d'IA explicable (XAI) par Grad-CAM visualisant les zones de décision du réseau, ainsi qu'une démonstration interactive déployée sous Gradio.",
    "projects.recognition.short": "Classification d'images par CNN profond avec cartes d'explicabilité Grad-CAM et démo Gradio.",

    "projects.chess.title": "Chess Game State",
    "projects.chess.subtitle": "Réseau de neurones pour l'analyse d'échecs",
    "projects.chess.description": "Réseau de neurones artificiel développé from scratch en Python pour l'analyse d'états de jeu d'échecs. À partir d'une représentation matricielle de 64 cases, le réseau classifie la situation tactique (échec, mat, pat, position normale) via une architecture neuronale optimisée avec Adam et Dropout.",
    "projects.chess.short": "Modèle neuronal développé from scratch pour l'analyse tactique de positions d'échecs.",

    "projects.ue5chess.title": "Échecs Multijoueur UE5",
    "projects.ue5chess.subtitle": "Jeu d'échecs en ligne sous Unreal Engine 5",
    "projects.ue5chess.description": "Jeu d'échecs multijoueur en ligne jouable via Steam, développé sous Unreal Engine 5.6.1 en Blueprint et C++. Le jeu réinvente les échecs traditionnels avec un système de factions uniques et de pouvoirs spéciaux, apportant une profondeur stratégique inédite.",
    "projects.ue5chess.short": "Jeu d'échecs multijoueur sous Unreal Engine 5 avec factions asymétriques et Steam SDK.",

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
    "skills.ai.c4": "RAG",
    "skills.ai.c5": "Ollama",
    "skills.ai.c6": "Deep Learning",

    "skills.web.title": "Développement web & BDD",
    "skills.web.c1": "JavaScript",
    "skills.web.c2": "React",
    "skills.web.c3": "Vue.js",
    "skills.web.c4": "Node.js",
    "skills.web.c5": "HTML / CSS",
    "skills.web.c6": "PHP",
    "skills.web.c7": "Dart",
    "skills.web.c8": "Flutter",
    "skills.web.c9": "PostgreSQL",
    "skills.web.c10": "MySQL",

    "skills.soft.title": "Développement logiciel",
    "skills.soft.c1": "C",
    "skills.soft.c2": "C++",
    "skills.soft.c3": "UE5",
    "skills.soft.c4": "Linux",

    "skills.tools.title": "Outils & Automatisation",
    "skills.tools.c1": "Git",
    "skills.tools.c2": "GitLab",
    "skills.tools.c3": "Docker",
    "skills.tools.c4": "n8n",
    "skills.tools.c5": "Power Automate",
    "skills.tools.c6": "Bash",
    "skills.tools.c7": "Microsoft 365",
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

    "chatbot.toggleLabel": "Assistant IA",
    "chatbot.title": "Assistant Lucas Debize",
    "chatbot.statusOnline": "En ligne · IA hybride (Groq / Gemini)",
    "chatbot.welcome": "Bonjour ! Je suis l'assistant IA de Lucas. Posez-moi des questions sur son parcours, ses projets (Prospecthor, RAG Monitor, Elyrii...), ses compétences ou son CV !",
    "chatbot.suggestion1": "Quelles sont ses compétences en IA ?",
    "chatbot.suggestion2": "Parle-moi de ses projets phares",
    "chatbot.suggestion3": "Où télécharger son CV ?",
    "chatbot.suggestion4": "Quelles sont ses disponibilités professionnelles ?",
    "chatbot.inputPlaceholder": "Posez une question sur le profil...",
    "chatbot.offlineNotice": "Le serveur de l'assistant IA n'est pas joignable pour le moment. Vous pouvez consulter directement le CV officiel ou me contacter via les liens ci-dessous.",
    "chatbot.cvBtn": "Télécharger le CV (PDF)",
  },

  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio · Full-Stack & AI Developer",
    "hero.title":
      "<span class=\"grad-text\">AI</span> &amp; <span class=\"grad-text\">full-stack</span> developer,<br/>focused on <span class=\"grad-text\">automation</span>.",
    "hero.text":
      "In my 5th year at Epitech Lyon, I design and deploy concrete solutions in artificial intelligence, process automation, and full-stack web development. Clean architecture, polished interfaces, and solid engineering.",
    "hero.cta1": "View projects",
    "hero.cta2": "Contact me",
    "hero.meta1": "End-of-studies internship / Full-time (March 2027)",
    "hero.meta2": "Lyon, France",
    "hero.side1.label": "Focus",
    "hero.side1.title": "AI · Automation · Full-Stack",
    "hero.side1.text":
      "Deployment of automation workflows, integration of AI models (LLMs, RAG, NLP), and development of complete SaaS applications.",
    "hero.side2.label": "Approach",
    "hero.side2.title": "Concrete & polished",
    "hero.side2.text":
      "Complete projects, structured code, ergonomic interfaces, and end-to-end technical rigor.",

    "stats.projects": "Projects completed",
    "stats.domains": "Main domains",
    "stats.techs": "Technologies used",

    "about.eyebrow": "About",
    "about.title": "Profile",
    "about.p1":
      "Currently in my 5th year at Epitech Lyon following an international 4th year at Epitech Berlin, I build high-performance solutions combining artificial intelligence, process automation, and full-stack software development.",
    "about.p2":
      "From designing SaaS architectures to deploying local RAG pipelines and automation workflows, I prioritize operational efficiency and execution quality.",
    "about.listTitle": "Core expertise & strengths",
    "about.li1": "structured, production-ready software architectures",
    "about.li2": "hands-on expertise in AI (LLMs, RAG, NLP) and automation",
    "about.li3": "full-stack proficiency with high attention to user experience",
    "about.li4": "rapid adaptability to modern and demanding tech stacks",
    "projects.eyebrow": "Projects",
    "projects.title": "Selected works",
    "projects.filterAll": "All",
    "projects.filterSoft": "Software",
    "projects.filterWeb": "Web",
    "projects.filterAi": "AI",
    "projects.filterPerso": "Personal",
    "projects.badge.tech": "Technical project",
    "projects.badge.perso": "Personal project",

    "projects.powerAutomate.title": "Microsoft Power Automate",
    "projects.powerAutomate.subtitle": "Client request management",
    "projects.powerAutomate.description": "No-code flow that takes a request via Microsoft Forms, classifies it with AI (category, priority, summary) and stores it in a SharePoint list. A Planner task is created in the right bucket, the team is alerted on Teams, and an email draft is generated then manually validated before sending to the client.",
    "projects.powerAutomate.short": "No-code customer request orchestration with AI classification and human-in-the-loop validation.",

    "projects.rag.title": "RAG Monitor",
    "projects.rag.subtitle": "Local RAG system with monitoring & CI/CD",
    "projects.rag.description": "A document-based question-answering system powered by a free, local LLM. It includes a complete RAG pipeline, drift monitoring, experiment versioning, and a fully automated CI/CD pipeline. Everything runs locally through Docker and launches with a single command.",
    "projects.rag.short": "Local RAG system with real-time drift monitoring and MLflow experiment tracking.",

    "projects.chatbot.title": "Chatbot IA Portfolio",
    "projects.chatbot.subtitle": "Hybrid AI conversational assistant",
    "projects.chatbot.description": "Intelligent conversational assistant for developer portfolio powered by a hybrid AI architecture. It leverages Groq (Llama 3.3 70B) as its primary ultra-fast engine, with automatic fallback to Google Gemini. Full stack built with React 19, Vite, and Express.",
    "projects.chatbot.short": "Ultra-fast hybrid conversational assistant powered by Groq (Llama 3.3 70B) with Gemini fallback.",

    "projects.assistantRh.title": "HR AI Assistant",
    "projects.assistantRh.subtitle": "Email-driven application automation",
    "projects.assistantRh.description": "Fully local workflow: incoming email with PDF resume → extraction → AI analysis (Ollama) → PostgreSQL storage → recruiter notification. Orchestrated with n8n, centralized configuration in a single .env file, triggered on IMAP receipt (no scheduling). Docker stack: n8n, pdf-extractor, Ollama and PostgreSQL.",
    "projects.assistantRh.short": "Sovereign AI recruitment pipeline for CV parsing and semantic scoring using local LLMs.",

    "projects.elyrii.title": "Elyrii",
    "projects.elyrii.subtitle": "AI-powered mobile app for emotional support",
    "projects.elyrii.description": "Cross-platform mobile application for emotional support built with Flutter for the EPITECH master-level final project. It features an interactive companion mascot, digital journaling, and daily quests connected to TypeScript microservices (Hono) and a tailored Mistral-7B model.",
    "projects.elyrii.short": "Flutter emotional support mobile app featuring an AI companion and Hono microservices.",

    "projects.denoise.title": "Image Denoising",
    "projects.denoise.subtitle": "U-Net deep learning model for image denoising",
    "projects.denoise.description": "U-Net convolutional autoencoder with residual skip connections developed with TensorFlow and Keras. Trained on the CIFAR-10 dataset corrupted with synthetic Gaussian noise, the network learns to accurately reconstruct original images by minimizing mean squared error (MSE).",
    "projects.denoise.short": "High-fidelity image restoration and denoising using a deep U-Net convolutional autoencoder.",

    "projects.prospecthor.title": "Prospecthor",
    "projects.prospecthor.subtitle": "Smart email management application",
    "projects.prospecthor.description": "Application developed as a pair with my internship supervisor, automating email management with AI. The system analyzes each incoming message, detects whether it is commercial prospecting, and assigns a score based on the detected intent compared to the client's criteria. Full stack: Python backend for AI models and semantic analysis, cross-platform Flutter frontend, and PHP services. Collaborative project versioned on GitLab.",
    "projects.prospecthor.short": "SaaS email qualification platform detecting commercial prospecting through NLP.",

    "projects.recognition.title": "Image Recognition",
    "projects.recognition.subtitle": "Image classification with CNN & Grad-CAM",
    "projects.recognition.description": "Convolutional neural network (CNN) trained on the CIFAR-10 dataset with data augmentation. The project features explainable AI (XAI) using Grad-CAM heatmaps to visualize decision regions, alongside an interactive web demo deployed with Gradio.",
    "projects.recognition.short": "Deep CNN image classification featuring Grad-CAM explainability heatmaps and Gradio demo.",

    "projects.chess.title": "Chess Game State",
    "projects.chess.subtitle": "Neural network for chess position analysis",
    "projects.chess.description": "Artificial neural network built from scratch in Python for chess position analysis. From a 64-square board representation, the network classifies tactical game states (check, checkmate, stalemate, normal position) using an architecture optimized with Adam and Dropout.",
    "projects.chess.short": "Neural network built from scratch for tactical chess position and state analysis.",

    "projects.ue5chess.title": "Multiplayer Chess UE5",
    "projects.ue5chess.subtitle": "Online chess game built with Unreal Engine 5",
    "projects.ue5chess.description": "An online multiplayer chess game playable via Steam, built with Unreal Engine 5.6.1 using both Blueprint and C++. This game reinvents traditional chess with unique factions and special abilities, bringing a fresh strategic depth to the genre.",
    "projects.ue5chess.short": "Multiplayer chess game in Unreal Engine 5 featuring asymmetric factions and Steam SDK.",

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
    "skills.ai.c4": "RAG",
    "skills.ai.c5": "Ollama",
    "skills.ai.c6": "Deep Learning",

    "skills.web.title": "Web development & Databases",
    "skills.web.c1": "JavaScript",
    "skills.web.c2": "React",
    "skills.web.c3": "Vue.js",
    "skills.web.c4": "Node.js",
    "skills.web.c5": "HTML / CSS",
    "skills.web.c6": "PHP",
    "skills.web.c7": "Dart",
    "skills.web.c8": "Flutter",
    "skills.web.c9": "PostgreSQL",
    "skills.web.c10": "MySQL",

    "skills.soft.title": "Software development",
    "skills.soft.c1": "C",
    "skills.soft.c2": "C++",
    "skills.soft.c3": "UE5",
    "skills.soft.c4": "Linux",

    "skills.tools.title": "Tools & Automation",
    "skills.tools.c1": "Git",
    "skills.tools.c2": "GitLab",
    "skills.tools.c3": "Docker",
    "skills.tools.c4": "n8n",
    "skills.tools.c5": "Power Automate",
    "skills.tools.c6": "Bash",
    "skills.tools.c7": "Microsoft 365",
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

    "chatbot.toggleLabel": "AI Assistant",
    "chatbot.title": "Lucas Debize's Assistant",
    "chatbot.statusOnline": "Online · Hybrid AI (Groq / Gemini)",
    "chatbot.welcome": "Hello! I am Lucas's AI assistant. Ask me anything about his background, projects (Prospecthor, RAG Monitor, Elyrii...), skills, or resume!",
    "chatbot.suggestion1": "What are his AI skills?",
    "chatbot.suggestion2": "Tell me about his key projects",
    "chatbot.suggestion3": "Where can I download his resume?",
    "chatbot.suggestion4": "What is his professional availability?",
    "chatbot.inputPlaceholder": "Ask a question about the profile...",
    "chatbot.offlineNotice": "The AI assistant server is currently unreachable. You can consult the official resume directly or reach out via the contact channels below.",
    "chatbot.cvBtn": "Download Resume (PDF)",
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
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
  window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
}

applyLang(currentLang);

document.getElementById("langToggle")?.addEventListener("click", () => {
  applyLang(currentLang === "fr" ? "en" : "fr");
});

function computeStats() {
  const allCards = document.querySelectorAll(".project-card");

  const totalProjects = allCards.length;

  const domainCategories = new Set(["ai", "web", "software"]);
  const activeDomains = new Set();
  allCards.forEach((c) => {
    (c.getAttribute("data-category") || "")
      .split(" ")
      .filter((d) => domainCategories.has(d))
      .forEach((d) => activeDomains.add(d));
  });

  const techs = new Set();
  allCards.forEach((c) => {
    (c.getAttribute("data-tags") || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((t) => techs.add(t));
  });

  document.querySelectorAll(".skill-card .chip span[data-i18n]").forEach((el) => {
    const text = el.textContent.trim();
    if (text) techs.add(text);
  });

  animateCounter("statProjects", totalProjects);
  animateCounter("statDomains", activeDomains.size || 3);
  animateCounter("statTechs", techs.size);
}

function animateCounter(id, target) {
  const el = document.getElementById(id);
  if (!el) return;

  const suffix = target >= 10 ? "+" : "";

  if (target <= 0) {
    el.textContent = "0";
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = target + suffix;
    return;
  }

  const duration = 900;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * target);
    el.textContent = current + (progress >= 1 ? suffix : "");

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }

  requestAnimationFrame(update);
}

computeStats();

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const projectsGrid = document.querySelector(".projects-grid");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    projectsGrid?.classList.toggle("is-filtered", filter !== "all");

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

  const modalLayout = modal.querySelector(".modal-layout");
  if (modalLayout) modalLayout.scrollTop = 0;
  const modalDialog = modal.querySelector(".modal-dialog");
  if (modalDialog) modalDialog.scrollTop = 0;
  modal.scrollTop = 0;
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

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

function setMenuOpen(open) {
  mobileNav?.classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
  menuToggle?.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
}

menuToggle?.addEventListener("click", () => {
  setMenuOpen(!mobileNav?.classList.contains("open"));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) setMenuOpen(false);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

const sectionIds = ["about", "projects", "skills", "contact"];
const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-nav a");

function updateScrollSpy() {
  const probe = window.scrollY + window.innerHeight * 0.42;
  let current = "";

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= probe) current = id;
  });

  const reachedEnd =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;
  if (reachedEnd) current = "contact";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    link.classList.toggle("is-active", current !== "" && href === `#${current}`);
  });
}

window.addEventListener("scroll", updateScrollSpy, { passive: true });
updateScrollSpy();

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileNav?.classList.contains("open")) {
    setMenuOpen(false);
  }
});

/* ==========================================================================
   CHATBOT CONTROLLER
   ========================================================================== */
(function initChatbot() {
  const widget = document.getElementById("chatbotWidget");
  const toggleBtn = document.getElementById("chatbotToggleBtn");
  const panel = document.getElementById("chatbotPanel");
  const closeBtn = document.getElementById("chatbotCloseBtn");
  const resetBtn = document.getElementById("chatbotResetBtn");
  const messagesEl = document.getElementById("chatbotMessages");
  const suggestionsEl = document.getElementById("chatbotSuggestions");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");
  const charCount = document.getElementById("chatbotCharCount");
  const sendBtn = document.getElementById("chatbotSendBtn");

  if (!widget || !toggleBtn || !panel || !messagesEl) return;

  const CHATBOT_BACKEND_URL =
    window.CHATBOT_BACKEND_URL ||
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? ""
      : (window.location.hostname.endsWith("vercel.app")
          ? ""
          : "https://portfolio-tau-black-5qvho3bbbc.vercel.app"));

  let chatHistory = [];
  let isSending = false;
  let isOpen = false;
  let lastSendTimestamp = 0;
  function getTranslation(key, fallback) {
    const t = translations[currentLang] || translations.fr;
    return t[key] || fallback || "";
  }

  function setOpen(open) {
    isOpen = open;
    widget.classList.toggle("is-open", open);
    panel.hidden = !open;
    toggleBtn.setAttribute("aria-expanded", String(open));
    if (open) {
      if (chatHistory.length === 0) {
        showWelcomeMessage();
      }
      setTimeout(() => input?.focus(), 150);
      scrollToBottom();
    }
  }

  toggleBtn.addEventListener("click", () => setOpen(!isOpen));
  closeBtn?.addEventListener("click", () => setOpen(false));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) {
      setOpen(false);
    }
  });

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function formatTime(date = new Date()) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function sanitizeAndLinkify(text) {
    const div = document.createElement("div");
    div.textContent = text;
    let safe = div.innerHTML;

    const urlPattern = /(https?:\/\/[^\s<]+)/g;
    safe = safe.replace(urlPattern, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });

    return safe;
  }

  function appendMessage(role, content) {
    const msgEl = document.createElement("div");
    msgEl.className = `chatbot-msg ${role}`;

    const bubble = document.createElement("div");
    bubble.className = "chatbot-msg-bubble";
    bubble.innerHTML = sanitizeAndLinkify(content);

    const time = document.createElement("span");
    time.className = "chatbot-msg-time";
    time.textContent = formatTime();

    msgEl.appendChild(bubble);
    msgEl.appendChild(time);
    messagesEl.appendChild(msgEl);

    chatHistory.push({ role, content });
    scrollToBottom();
  }

  function showWelcomeMessage() {
    messagesEl.innerHTML = "";
    chatHistory = [];
    appendMessage(
      "assistant",
      getTranslation(
        "chatbot.welcome",
        "Bonjour ! Je suis l'assistant IA de Lucas. Posez-moi des questions sur son parcours, ses projets, ses compétences ou son CV !"
      )
    );
    renderSuggestions();
  }

  function renderSuggestions() {
    if (!suggestionsEl) return;
    suggestionsEl.innerHTML = "";
    suggestionsEl.style.display = "flex";
    const suggestions = [
      getTranslation("chatbot.suggestion1", "Quelles sont tes compétences en IA ?"),
      getTranslation("chatbot.suggestion2", "Parle-moi de tes projets"),
      getTranslation("chatbot.suggestion3", "Où télécharger ton CV ?"),
      getTranslation("chatbot.suggestion4", "Es-tu disponible pour un stage de fin d'études / CDI ?"),
    ];

    suggestions.forEach((text) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chatbot-suggestion-chip";
      chip.textContent = text;
      chip.addEventListener("click", () => {
        if (isSending) return;
        input.value = text;
        updateInputState();
        sendMessage(text);
      });
      suggestionsEl.appendChild(chip);
    });
  }

  function updateInputState() {
    const val = input.value;
    charCount.textContent = `${val.length}/500`;
    sendBtn.disabled = isSending || val.trim().length === 0;
  }

  input?.addEventListener("input", updateInputState);

  function showTypingIndicator() {
    const typing = document.createElement("div");
    typing.className = "chatbot-typing";
    typing.id = "chatbotTyping";
    typing.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(typing);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    document.getElementById("chatbotTyping")?.remove();
  }

  async function sendMessage(text) {
    const message = (text || input.value).trim();
    if (!message || isSending) return;

    const now = Date.now();
    if (now - lastSendTimestamp < 1500) return;
    lastSendTimestamp = now;
    appendMessage("user", message);
    input.value = "";
    updateInputState();
    isSending = true;
    sendBtn.disabled = true;

    if (suggestionsEl) suggestionsEl.style.display = "none";

    showTypingIndicator();

    try {
      const response = await fetch(`${CHATBOT_BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      removeTypingIndicator();
      const data = await response.json();

      if (response.ok && data.reply) {
        appendMessage("assistant", data.reply);
      } else if (response.status === 429 || data.code === "RATE_LIMIT_EXCEEDED") {
        appendMessage(
          "assistant",
          `⏳ ${data.error || "Trop de messages envoyés. Veuillez patienter une minute avant de réessayer."}`
        );
      } else {
        const errorMsg =
          data.error ||
          getTranslation(
            "chatbot.offlineNotice",
            "Le serveur de l'assistant IA n'est pas joignable."
          );
        appendMessage(
          "assistant",
          `${errorMsg}\n\n👉 CV officiel disponible ici : https://lucas-debize.github.io/portfolio/assets/images/CV.pdf`
        );
      }
    } catch {
      removeTypingIndicator();
      const offlineText = getTranslation(
        "chatbot.offlineNotice",
        "Le serveur de l'assistant IA n'est pas joignable pour le moment."
      );
      appendMessage(
        "assistant",
        `${offlineText}\n\n👉 Vous pouvez consulter et télécharger le CV officiel ici : https://lucas-debize.github.io/portfolio/assets/images/CV.pdf`
      );
    } finally {
      isSending = false;
      updateInputState();
      input?.focus();
    }
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMessage();
  });

  resetBtn?.addEventListener("click", () => {
    if (suggestionsEl) suggestionsEl.style.display = "flex";
    showWelcomeMessage();
  });

  window.addEventListener("languageChanged", () => {
    if (chatHistory.length <= 1) {
      showWelcomeMessage();
    } else {
      renderSuggestions();
    }
  });
})();
