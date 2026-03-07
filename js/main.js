document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  mobileBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileBtn.classList.toggle("active"); // Add animation class if needed
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // Smooth Scrolling for Anchors (with offset for fixed header)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      // Logo / blank hash → scroll to top
      if (targetId === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 90; // Height of fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Active Link Highlight on Scroll (Optional)
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link"); // You can add .active-link styles in CSS if you want
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active-link");
      }
    });
  });
});
