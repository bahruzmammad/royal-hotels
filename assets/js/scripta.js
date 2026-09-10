document.addEventListener("DOMContentLoaded", () => {
  // NAVBAR SCROLL

  const nav = document.querySelector(".nav");

  const checkNav = () => {
    if (!nav) return;

    nav.classList.toggle("scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", checkNav);
  checkNav();

  // SCROLLSPY

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const updateActiveLink = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();

  // MOBILE MENU

  const menuButton = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  if (menuButton && navList) {
    const menuIcon = menuButton.querySelector("i");

    menuButton.addEventListener("click", () => {
      navList.classList.toggle("open");

      const isOpen = navList.classList.contains("open");

      if (menuIcon) {
        menuIcon.className = isOpen
          ? "nav-icon ri-close-line"
          : "nav-icon ri-menu-3-line";
      }
    });

    navList.addEventListener("click", (event) => {
      if (event.target.classList.contains("nav-link")) {
        navList.classList.remove("open");

        if (menuIcon) {
          menuIcon.className = "nav-icon ri-menu-3-line";
        }
      }
    });
  }

  // SCROLL REVEAL

  if (typeof ScrollReveal !== "undefined") {
    const reveal = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".hero-title", {
      ...reveal,
    });

    ScrollReveal().reveal(".hero-desc", {
      ...reveal,
      delay: 500,
    });

    ScrollReveal().reveal(".hero-buttons", {
      ...reveal,
      delay: 1000,
    });

    ScrollReveal().reveal(".hotel", {
      ...reveal,
      interval: 500,
    });

    ScrollReveal().reveal(".step", {
      ...reveal,
      interval: 500,
    });

    ScrollReveal().reveal(".property", {
      ...reveal,
      interval: 500,
    });

    ScrollReveal().reveal(".blog-card", {
      ...reveal,
      interval: 500,
    });
  }

  // INSPIRATION

  const inspiration = document.getElementById("inspiration");

  if (inspiration) {
    const cards = Array.from(inspiration.children);

    cards.forEach((card) => {
      const clone = card.cloneNode(true);

      clone.setAttribute("aria-hidden", "true");

      inspiration.appendChild(clone);
    });
  }
});
