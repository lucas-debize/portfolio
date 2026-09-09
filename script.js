const en = {
  skip: "Skip to content",
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.stack": "Stack",
  "nav.contact": "Contact",

  "hero.role": "Developer · AI, web, software",
  "hero.avail": "Available · internship, full-time, contract",
  "hero.lede":
    "Computer science student at Epitech. I build AI systems that run locally, web applications and game engines in C++.",
  "hero.cta1": "See the projects",
  "hero.cta2": "Get in touch",

  "about.title": "About",
  "about.p1":
    "Computer science student at Epitech, I build projects that run end to end. AI pipelines executed locally, web applications, game engines in C++.",
  "about.p2":
    "What I aim for in every project. An architecture you can explain in one sentence, an interface that needs no manual, a result you can reproduce.",
  "about.f1k": "Education",
  "about.f2k": "Fields",
  "about.f2v": "AI, web, software",
  "about.f3k": "Method",
  "about.f3v": "Docker, CI/CD, versioned code",
  "about.f4k": "Location",
  "about.v1": "Complete projects, not demos.",
  "about.v2": "An architecture you can explain in one sentence.",
  "about.v3": "Interfaces that need no manual.",
  "about.v4": "AI as a concrete tool, not a selling point.",

  "projects.title": "Projects",
  "projects.note": "Four projects in depth, eight in the index.",
  "projects.open": "View project",
  "kind.perso": "Personal project",
  "kind.tech": "Technical project",
  "kind.stage": "Internship project",
  "cat.ai": "AI",
  "tag.localLlm": "Local LLM",
  "tag.convAi": "Conversational AI",
  "tag.cv": "Computer vision",
  "tag.a11y": "Accessibility",

  "rag.tagline": "Question answering over documents, local LLM, drift monitoring.",
  "rag.desc":
    "A document question-answering system powered by a free, local LLM. Complete RAG pipeline, drift monitoring, experiment versioning with MLflow and automated CI/CD. Everything runs in Docker and starts with a single command.",
  "rh.title": "HR AI Assistant",
  "rh.tagline": "A resume arrives by email, a score lands in the database.",
  "rh.desc":
    "Fully local workflow. An email with a PDF resume triggers extraction, analysis by Ollama, PostgreSQL storage and a recruiter notification. n8n orchestration, IMAP trigger on receipt, one .env file for the whole configuration. Docker stack with n8n, pdf-extractor, Ollama and PostgreSQL.",
  "ue5.title": "Multiplayer Chess UE5",
  "ue5.tagline": "Online chess on Steam, with factions and powers.",
  "ue5.desc":
    "Online multiplayer chess playable through Steam, built with Unreal Engine 5.6 in Blueprint and C++. The classic rules are extended by a system of factions and special powers that changes the strategic reading of every game.",
  "rtype.tagline": "A networked game engine written from scratch in C++.",
  "rtype.desc":
    "A recreation of the R-Type shoot 'em up on a networked game engine built from zero in C++. SFML for rendering, Boost for networking, CMake for the build. Modular, cross-platform architecture.",

  "chatbot.title": "AI Portfolio Chatbot",
  "chatbot.cat": "AI · Web",
  "chatbot.tagline": "A Gemini assistant that answers questions about my profile.",
  "chatbot.desc":
    "React, Express and Google Gemini API chatbot that answers questions about my background. The backend loads profile.json as a knowledge base and injects it into the system prompt. Automatic fallback to a backup model if the configured one is unavailable.",
  "pa.tagline": "Customer requests sorted and scheduled without code.",
  "pa.desc":
    "No-code flow. A request comes in through Microsoft Forms, AI classifies it (category, priority, summary) and stores it in a SharePoint list. A Planner task is created in the right bucket, the team is notified on Teams and an email draft is reviewed by hand before it goes to the customer.",
  "elyrii.cat": "AI · Mobile",
  "elyrii.tagline": "An AI mascot for emotional support.",
  "elyrii.desc":
    "Mobile app that supports people dealing with depression or emotional difficulty. An interactive mascot talks with the user, suggests daily challenges and acts as a counselor or a private journal.",
  "denoise.tagline": "A network that rebuilds noisy images.",
  "denoise.desc":
    "The pipeline adds noise to images, then trains a neural network to reconstruct the original as closely as possible. Trained on Google Colab with GPU acceleration.",
  "prospecthor.cat": "AI · Web",
  "prospecthor.tagline": "AI email sorting with prospecting intent scoring.",
  "prospecthor.desc":
    "Built in a pair with my internship supervisor. The system analyzes every incoming email, detects commercial prospecting and assigns a score based on the detected intent against the client's criteria. Python backend for the models and semantic analysis, cross-platform Flutter frontend, PHP services, versioned on GitLab.",
  "recog.tagline": "Multi-class classification with CNNs.",
  "recog.desc":
    "Training convolutional networks to classify images across several datasets (cats, dogs, cars). Comparison of CNN architectures and their multi-class performance. Built on Google Colab.",
  "chess.tagline": "Reading a chessboard position from a photo.",
  "chess.desc":
    "Computer vision. The program recognizes the state of a chessboard from a single image. Image processing, feature extraction and board interpretation to locate every piece.",
  "pf.tagline": "This site. HTML, CSS and JavaScript, no framework.",
  "pf.desc":
    "Designed and built without a framework. Variable typography, light and dark theme, FR/EN, scroll animations that respect prefers-reduced-motion, contact form and a side-panel project sheet.",

  "stack.title": "Stack",
  "stack.note": "What the projects above actually use.",
  "stack.ai": "Artificial intelligence",
  "stack.web": "Web",
  "stack.soft": "Software",
  "stack.tools": "Tools",

  "contact.title": "Contact",
  "contact.headline": "Let's talk.",
  "contact.lede":
    "Internship, full-time, contract, or simply a project to discuss. I reply within 24 hours, in French or English.",
  "contact.cv": "Resume (PDF)",
  "form.name": "Name",
  "form.email": "Email",
  "form.message": "Message",
  "form.send": "Send",

  "foot.made": "HTML, CSS, JavaScript. No framework.",
  "foot.top": "Back to top",
  "dialog.close": "Close",
};

const ui = {
  fr: {
    langToggle: "Switch to English",
    langLabel: "EN",
    themeToLight: "Passer en thème clair",
    themeToDark: "Passer en thème sombre",
    link: { default: "Voir le code", download: "Télécharger le jeu", notebook: "Ouvrir le notebook" },
    imageAlt: (title) => `Aperçu du projet ${title}`,
    sending: "Envoi en cours…",
    sent: "Message envoyé. Je vous réponds sous 24 h.",
    invalid: "Nom, email valide et message sont requis.",
    failed: "L'envoi a échoué. Écrivez-moi directement à lucasdebize@epitech.eu.",
  },
  en: {
    langToggle: "Passer en français",
    langLabel: "FR",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    link: { default: "View the code", download: "Download the game", notebook: "Open the notebook" },
    imageAlt: (title) => `Preview of the ${title} project`,
    sending: "Sending…",
    sent: "Message sent. I reply within 24 hours.",
    invalid: "Name, a valid email and a message are required.",
    failed: "Sending failed. Email me directly at lucasdebize@epitech.eu.",
  },
};

const root = document.documentElement;
const $ = (sel, scope = document) => scope.querySelector(sel);
const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];

/* i18n. The HTML is the French source; `en` overrides by key. */
const i18nNodes = $$("[data-i18n]").map((el) => ({ el, key: el.dataset.i18n, fr: el.textContent.trim() }));
let lang = localStorage.getItem("lang") === "en" ? "en" : "fr";

function applyLang(next) {
  lang = next;
  for (const { el, key, fr } of i18nNodes) el.textContent = next === "en" ? en[key] ?? fr : fr;
  root.lang = next;
  const langBtn = $("#lang-toggle");
  langBtn.textContent = ui[next].langLabel;
  langBtn.setAttribute("aria-label", ui[next].langToggle);
  updateThemeLabel();
  localStorage.setItem("lang", next);
}

$("#lang-toggle").addEventListener("click", () => applyLang(lang === "fr" ? "en" : "fr"));

const themeColor = { dark: "#0c0c0b", light: "#f3efe7" };

function updateThemeLabel() {
  const dark = root.dataset.theme !== "light";
  $("#theme-toggle").setAttribute("aria-label", dark ? ui[lang].themeToLight : ui[lang].themeToDark);
  $('meta[name="theme-color"]').content = themeColor[dark ? "dark" : "light"];
}

$("#theme-toggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", root.dataset.theme);
  updateThemeLabel();
});

applyLang(lang);

/* Header state and active section, both driven by IntersectionObserver rather than a scroll listener. */
const header = $("#top");
new IntersectionObserver(([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting)).observe(
  $("#top-sentinel")
);

const menuLinks = new Map($$(".menu a").map((a) => [a.hash.slice(1), a]));
const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const a of menuLinks.values()) a.removeAttribute("aria-current");
      menuLinks.get(entry.target.id)?.setAttribute("aria-current", "true");
    }
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
$$(".sec").forEach((sec) => sectionObserver.observe(sec));

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-in");
      revealObserver.unobserve(entry.target);
    }
  },
  { rootMargin: "0px 0px -10% 0px" }
);
$$("[data-reveal]").forEach((el) => revealObserver.observe(el));

/* Project dialog. A project is read from its [data-project] element. */
const projects = $$("[data-project]");
const dialog = $("#project-dialog");
const dImg = $("#d-img");
const dVideo = $("#d-video");
const dLink = $("#d-link");

function readProject(el) {
  const text = (sel) => $(sel, el)?.textContent.trim() ?? "";
  return {
    num: el.closest(".index") ? `${text(".row-num")} / 12` : text(".scene-num"),
    title: text(".scene-title, .row-title"),
    tagline: text(".tagline"),
    desc: text(".desc"),
    kind: text(".kind"),
    tags: $$(".tags li", el).map((li) => li.textContent.trim()),
    image: el.dataset.image,
    video: el.dataset.video,
    link: el.dataset.link,
    linkLabel: ui[lang].link[el.dataset.linkLabel ?? "default"],
  };
}

function openProject(el) {
  const p = readProject(el);
  $("#d-num").textContent = p.num;
  $("#d-kind").textContent = p.kind;
  $("#d-title").textContent = p.title;
  $("#d-tagline").textContent = p.tagline;
  $("#d-desc").textContent = p.desc;
  $("#d-tags").replaceChildren(
    ...p.tags.map((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      return li;
    })
  );

  dImg.hidden = Boolean(p.video);
  dVideo.hidden = !p.video;
  if (p.video) {
    dVideo.src = p.video;
  } else {
    dImg.src = p.image;
    dImg.alt = ui[lang].imageAlt(p.title);
  }

  dLink.hidden = !p.link;
  if (p.link) {
    dLink.href = p.link;
    $("#d-link-label").textContent = p.linkLabel;
  }

  dialog.showModal();
  dialog.scrollTop = 0;
}

for (const el of projects) {
  $(".open-project, .row", el).addEventListener("click", () => openProject(el));
}
$("#d-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  dVideo.pause();
  dVideo.removeAttribute("src");
  dVideo.load();
});

/* Contact form. EmailJS loads on first interaction so it never costs the initial page. */
const EMAILJS = {
  sdk: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
  publicKey: "9BcxSy1PlF-zOjG-U",
  service: "service_h4k901q",
  template: "template_8naughk",
};

const form = $("#contact-form");
const formStatus = $("#form-status");
let sdkReady;

function loadEmailJs() {
  sdkReady ??= new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = EMAILJS.sdk;
    s.onload = () => {
      window.emailjs.init({ publicKey: EMAILJS.publicKey });
      resolve(window.emailjs);
    };
    s.onerror = () => {
      sdkReady = undefined;
      reject(new Error("EmailJS SDK failed to load"));
    };
    document.head.append(s);
  });
  return sdkReady;
}

form.addEventListener("focusin", loadEmailJs, { once: true });

function setStatus(message, isError = false) {
  formStatus.textContent = message;
  formStatus.classList.toggle("is-error", isError);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    setStatus(ui[lang].invalid, true);
    form.querySelector(":invalid")?.focus();
    return;
  }
  const button = $("button[type=submit]", form);
  button.disabled = true;
  setStatus(ui[lang].sending);
  try {
    const emailjs = await loadEmailJs();
    await emailjs.sendForm(EMAILJS.service, EMAILJS.template, form);
    form.reset();
    setStatus(ui[lang].sent);
  } catch {
    setStatus(ui[lang].failed, true);
  } finally {
    button.disabled = false;
  }
});
