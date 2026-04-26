const body = document.body;
const yearEl = document.getElementById("year");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-toggle-icon");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const revealEls = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.getElementById("contact-form");
const navLinks = document.querySelectorAll(".nav a");

yearEl.textContent = new Date().getFullYear();

/* ------------------------------ */
/* Theme */
/* ------------------------------ */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeIcon.textContent = "☀️";
} else {
  body.classList.remove("light");
  themeIcon.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeIcon.textContent = isLight ? "☀️" : "🌙";
});

/* ------------------------------ */
/* Mobile menu */
/* ------------------------------ */
menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* ------------------------------ */
/* Reveal on scroll */
/* ------------------------------ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealEls.forEach((el) => observer.observe(el));

/* ------------------------------ */
/* Active section in nav */
/* ------------------------------ */
const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        const match = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("active", match);
      });
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => sectionObserver.observe(section));

/* ------------------------------ */
/* Project filter */
/* ------------------------------ */
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === "all" || category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

/* ------------------------------ */
/* Contact form -> mailto */
/* ------------------------------ */
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Contact portfolio — ${name}`);
  const bodyContent = encodeURIComponent(
    `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
  );

  window.location.href = `mailto:lucas.debize@epitech.eu?subject=${subject}&body=${bodyContent}`;
});
