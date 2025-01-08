const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-items");
const btnToggleNav = document.querySelector(".menu-btn");
const workEls = document.querySelectorAll(".work-box");
const workImgs = document.querySelectorAll(".work-img");
const mainEl = document.querySelector("main");
const yearEl = document.querySelector(".footer-text span");

const toggleNav = () => {
  nav.classList.toggle("hidden");

  // Prevent screen from scrolling when menu is opened
  document.body.classList.toggle("lock-screen");

  if (nav.classList.contains("hidden")) {
    btnToggleNav.textContent = "menu";
  } else {
    // When menu is opened after transition change text respectively
    setTimeout(() => {
      btnToggleNav.textContent = "\u2716";
    }, 475);
  }
};

btnToggleNav.addEventListener("click", toggleNav);

navMenu.addEventListener("click", (e) => {
  if (e.target.localName === "a") {
    toggleNav();
  }
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !nav.classList.contains("hidden")) {
    toggleNav();
  }
});

// Animating work instances on scroll

workImgs.forEach((workImg) => workImg.classList.add("transform"));

let observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    const [textbox, picture] = Array.from(entry.target.children);
    if (entry.isIntersecting) {
      picture.classList.remove("transform");
      Array.from(textbox.children).forEach(
        (el) => (el.style.animationPlayState = "running")
      );
    }
  },
  { threshold: 0.3 }
);

workEls.forEach((workEl) => {
  observer.observe(workEl);
});

// Toggle theme and store user preferred theme for future

const switchThemeEl = document.querySelector('input[type="checkbox"]');
const storedTheme = localStorage.getItem("theme");

switchThemeEl.checked = storedTheme === "dark" || storedTheme === null;

switchThemeEl.addEventListener("click", () => {
  const isChecked = switchThemeEl.checked;

  if (!isChecked) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
    switchThemeEl.checked = false;
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
});

// Trap the tab when menu is opened

const lastFocusedEl = document.querySelector('a[data-focused="last-focused"]');

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Tab" && document.activeElement === lastFocusedEl) {
    e.preventDefault();
    btnToggleNav.focus();
  }
});

// Rotating logos animation

const logosWrappers = document.querySelectorAll(".logo-group");

const sleep = (number) => new Promise((res) => setTimeout(res, number));

logosWrappers.forEach(async (logoWrapper, i) => {
  const logos = Array.from(logoWrapper.children);
  await sleep(1400 * i);
  setInterval(() => {
    let temp = logos[0];
    logos[0] = logos[1];
    logos[1] = logos[2];
    logos[2] = temp;
    logos[0].classList.add("hide", "to-top");
    logos[1].classList.remove("hide", "to-top", "to-bottom");
    logos[2].classList.add("hide", "to-bottom");
  }, 5600);
});

yearEl.textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language-selector");

  const translations = {
    en: {
      "page-title": "Portfolio",
      "language-label": "Language:",
      "nav-home": "Home",
      "nav-work": "My Work",
      "nav-skills": "My Skills",
      "nav-contact": "Contact",
      "greeting": "Hi, I'm Lucas Debize",
      "role": "Student at Epitech",
      "intro": "I'm actually a computer science student, searching for internship opportunities during my third year and I'd like to specialize myself in AI. Explore my open-source projects and contact me for any inquiries or hiring possibilities.",
      "btn-hire": "Hire me",
      "btn-see-work": "See my work",
      "work-title": "Selected Work",
      "project1-title": "image classification",
      "project1-desc": "Using AI to classify images of ten different categories.",
      "project1-tech1": "Python",
      "project1-tech2": "Supervised learning",
      "project1-tech3": "Convolutional Neural Network (CNN)",
      "project2-title": "image denoising",
      "project2-desc": "Using AI to rebuild image after destruction.",
      "project2-tech1": "Python",
      "project2-tech2": "Autoencoder",
      "project2-tech3": "Unsupervised learning",
      "project3-title": "text recognition",
      "project3-desc": "Using AI to find out what is the subject of a text.",
      "project3-tech1": "Python",
      "project3-tech2": "Supervised learning",
      "project3-tech3": "Dense neural network",
      "project4-title": "video game",
      "project4-desc": "Real-time multiplayer game, reproduction of the R-Type game. It's a project group in which I've done the server part.",
      "project4-tech1": "C",
      "project4-tech2": "Cpp",
      "project4-tech3": "Python",
      "explore-project": "Explore this project",
      "skills-title": "My Skills",
      "contact-title": "Send Message",
      "hire-alert": "Available for hire",
      "contact-intro-1": "For any more information or inquiries, feel free to reach out to my <a href='assets/images/CV.pdf' class='link'>CV</a> or contact me directly.",
      "contact-phone": "Phone: <a href='tel:+33 07 82 75 92 01'>+33 07 82 75 92 01</a>",
      "contact-email": "Mail: <a href='mailto:lucas.debize@epitech.eu'>lucas.debize@epitech.eu</a>",
      "form-name-label": "Name",
      "form-email-label": "Email",
      "form-message-label": "Message",
      "form-submit-btn": "Send Message",
      "footer-credit": "&copy; 2023 Lucas Debize | All rights reserved.",
      "dark_theme": "Dark Theme",
    },
    fr: {
      "page-title": "Portfolio",
      "language-label": "Langue:",
      "nav-home": "Accueil",
      "nav-work": "Mon Travail",
      "nav-skills": "Mes Compétences",
      "nav-contact": "Contact",
      "greeting": "Salut, je suis Lucas Debize",
      "role": "Étudiant à Epitech",
      "intro": "Je suis actuellement étudiant en informatique, à la recherche de stages pour ma troisième année et j'aimerais me spécialiser en IA. Explorez mes projets open-source et contactez-moi pour toute question ou possibilité d'embauche.",
      "btn-hire": "Embauchez-moi",
      "btn-see-work": "Voir mon travail",
      "work-title": "Travaux Sélectionnés",
      "project1-title": "classification d'images",
      "project1-desc": "Utilisation de l'IA pour classifier des images de dix catégories différentes.",
      "project1-tech1": "Python",
      "project1-tech2": "Apprentissage supervisé",
      "project1-tech3": "Réseau Neuronal Convolutif (CNN)",
      "project2-title": "réduction du bruit d'image",
      "project2-desc": "Utilisation de l'IA pour reconstruire des images après destruction.",
      "project2-tech1": "Python",
      "project2-tech2": "Autoencodeur",
      "project2-tech3": "Apprentissage non supervisé",
      "project3-title": "reconnaissance de texte",
      "project3-desc": "Utilisation de l'IA pour déterminer le sujet d'un texte.",
      "project3-tech1": "Python",
      "project3-tech2": "Apprentissage supervisé",
      "project3-tech3": "Réseau Neuronal Dense",
      "project4-title": "jeu vidéo",
      "project4-desc": "Jeu multijoueur en temps réel, reproduction du jeu R-Type. C'est un projet de groupe où j'ai réalisé la partie serveur.",
      "project4-tech1": "C",
      "project4-tech2": "Cpp",
      "project4-tech3": "Python",
      "explore-project": "Explorez ce projet",
      "skills-title": "Mes Compétences",
      "contact-title": "Envoyer un message",
      "hire-alert": "Disponible pour embauche",
      "contact-intro-1": "Pour plus d'informations ou demande, n'hésitez pas à consulter mon <a href='assets/images/CV.pdf' class='link'>CV</a> ou à me contacter directement.",
      "contact-phone": "Téléphone : <a href='tel:+33 07 82 75 92 01'>+33 07 82 75 92 01</a>",
      "contact-email": "Mail : <a href='mailto:lucas.debize@epitech.eu'>lucas.debize@epitech.eu</a>",
      "form-name-label": "Nom",
      "form-email-label": "E-mail",
      "form-message-label": "Message",
      "form-submit-btn": "Envoyer le message",
      "footer-credit": "&copy; 2023 Lucas Debize | Tous droits réservés.",
      "dark_theme": "Thème Sombre",
    },
  };

  // Appliquer la langue choisie si elle est stockée
  const savedLanguage = localStorage.getItem("language") || "en";
  console.log("Langue sauvegardée:", savedLanguage); // Vérifiez quelle langue est chargée
  applyLanguage(savedLanguage);
  languageSelector.value = savedLanguage;

  // Changer de langue au changement du sélecteur
  languageSelector.addEventListener("change", function () {
    const selectedLanguage = languageSelector.value;
    console.log("Langue sélectionnée:", selectedLanguage); // Vérifiez quelle langue est sélectionnée
    localStorage.setItem("language", selectedLanguage);
    applyLanguage(selectedLanguage);
  });

  function applyLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll("[data-lang-key]");

    if (translations[lang]) {
      elementsToTranslate.forEach((element) => {
        const key = element.getAttribute("data-lang-key");
        console.log("Traduction de l'élément clé:", key, "en langue:", lang); // Vérifiez les traductions appliquées
        
        // Mise à jour du HTML interne plutôt que du textContent
        if (translations[lang][key]) {
          element.innerHTML = translations[lang][key];
        }
      });
    } else {
      console.error(`La langue ${lang} n'est pas supportée.`);
    }
  }
});

// Chatbot Implementation
const chatbot = {
  elements: {
    container: document.getElementById('chatbot'),
    toggle: document.getElementById('chatbot-toggle'),
    close: document.getElementById('chatbot-close'),
    input: document.getElementById('chatbot-input'),
    send: document.getElementById('chatbot-send'),
    messages: document.querySelector('.chatbot-messages')
  },

  init() {
    this.bindEvents();
    this.addMessage('bot', 'Hello! How can I help you today?');
  },

  bindEvents() {
    this.elements.toggle.addEventListener('click', () => this.toggleChat());
    this.elements.close.addEventListener('click', () => this.toggleChat());
    this.elements.send.addEventListener('click', () => this.handleSend());
    this.elements.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleSend();
    });
  },

  toggleChat() {
    this.elements.container.classList.toggle('hidden');
    if (!this.elements.container.classList.contains('hidden')) {
      this.elements.input.focus();
    }
  },

  async handleSend() {
    const message = this.elements.input.value.trim();
    if (!message) return;

    // Add user message
    this.addMessage('user', message);
    this.elements.input.value = '';

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user",
            content: message
          }]
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const reply = data.choices[0].message.content;
      this.addMessage('bot', reply);
      
    } catch (error) {
      console.error('Error:', error);
      this.addMessage('bot', 'Sorry, I encountered an error. Please try again.');
    }
  },

  addMessage(type, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = content;
    this.elements.messages.appendChild(messageDiv);
    this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
  }
};

// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => chatbot.init());
