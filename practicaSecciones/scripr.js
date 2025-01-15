document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const closeButtons = document.querySelectorAll(".close-section");

  sections.forEach((section) => {
    section.addEventListener("click", () => {
      if (section.classList.contains("is-expanded")) return;

      sections.forEach((s) => s.classList.remove("is-expanded")); // Cerrar todas las secciones abiertas
      section.classList.add("is-expanded");
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const section = event.target.closest("section");
      section.classList.remove("is-expanded");
      section.classList.add("minimizar");
      event.stopPropagation();
    });
  });
});
