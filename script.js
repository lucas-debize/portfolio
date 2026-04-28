/* =========================
   THÈME
========================= */
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

/* =========================
   TRADUCTIONS
========================= */
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

/* ---- apply translations ---- */
let currentLang = localStorage.getItem("lang") || "fr";

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  /* text nodes */
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* innerHTML */
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* project card data-attributes */
  document.querySelectorAll(".project-card").forEach((card) => {
    const fields = ["title", "subtitle", "description", "short"];

    fields.forEach((field) => {
      const key = card.getAttribute(`data-i18n-${field}`);
      if (key && t[key] !== undefined) {
        card.setAttribute(`data-${field}`, t[key]);
      }
    });

    /* update visible text inside card */
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

  /* modal CTA button */
  const modalCta = document.getElementById("modalLink");
  if (modalCta && t["modal.cta"]) modalCta.textContent = t["modal.cta"];

  /* html lang attribute */
  document.documentElement.setAttribute("lang", lang);

  /* update button label */
  document.getElementById("langLabel").textContent = lang === "fr" ? "EN" : "FR";

  currentLang = lang;
  localStorage.setItem("lang", lang);
}

/* init */
applyLang(currentLang);

/* toggle */
document.getElementById("langToggle")?.addEventListener("click", () => {
  applyLang(currentLang === "fr" ? "en" : "fr");
});

/* =========================
   STATS DYNAMIQUES
========================= */
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
  animateCounter("statDomains", domains.size);
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

/* =========================
   FILTRES PROJETS
========================= */
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

/* =========================
   MODALE PROJET
========================= */
const modal = document.getElementById("projectModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalLink = document.getElementById("modalLink");

function openModal(card) {
  modalTitle.textContent = card.dataset.title || "";
  modalSubtitle.textContent = card.dataset.subtitle || "";
  modalDescription.textContent = card.dataset.description || "";
  modalImage.src = card.dataset.image || "";
  modalImage.alt = `Image du projet ${card.dataset.title || ""}`;
  modalLink.href = card.dataset.link || "#";

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

/* =========================
   BOUTON RETOUR EN HAUT
========================= */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop?.classList.toggle("visible", window.scrollY > 400);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
