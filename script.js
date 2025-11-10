const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const contactBtn = document.getElementById("contactBtn");

// Sidebar navigation
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("data-section");

    // Update active link
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Switch visible section
    sections.forEach(section => {
      section.classList.remove("visible");
      if (section.id === targetId) {
        section.classList.add("visible");
      }
    });
  });
});

// "Get in touch" button
contactBtn.addEventListener("click", () => {
  navLinks.forEach(l => l.classList.remove("active"));
  document.querySelector('.nav-link[data-section="contact"]').classList.add("active");

  sections.forEach(section => {
    section.classList.remove("visible");
    if (section.id === "contact") {
      section.classList.add("visible");
    }
  });
});
