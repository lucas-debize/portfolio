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
      btnToggleNav.textContent = "close";
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

  // Appliquer la langue choisie si elle est stockée
  const savedLanguage = localStorage.getItem("language") || "en";
  applyLanguage(savedLanguage);
  languageSelector.value = savedLanguage;

  // Changer de langue au changement du sélecteur
  languageSelector.addEventListener("change", function () {
    const selectedLanguage = languageSelector.value;
    localStorage.setItem("language", selectedLanguage);
    applyLanguage(selectedLanguage);
  });

  function applyLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll("[data-lang-key]");

    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute("data-lang-key");
      element.textContent = translations[lang][key];
    });
  }

  const translations = {
    en: {
      greeting: "Hi, I'm Lucas Debize",
      role: "Student at Epitech",
      intro:
        "I'm actually a computer science student, searching for internship opportunities during my third year. I'd like to specialize myself in AI. Explore my open-source projects and contact me for any inquiries or hiring possibilities.",
      // Ajoutez d'autres traductions ici...
    },
    fr: {
      greeting: "Bonjour, je suis Lucas Debize",
      role: "Étudiant à Epitech",
      intro:
        "Je suis actuellement étudiant en informatique, à la recherche de stages pour ma troisième année. J'aimerais me spécialiser en IA. Explorez mes projets open-source et contactez-moi pour toute question ou possibilité d'embauche.",
      // Ajoutez d'autres traductions ici...
    },
  };
});
