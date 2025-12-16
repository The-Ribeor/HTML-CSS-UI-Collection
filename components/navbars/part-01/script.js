// Dropdown functionality
const dropdownLinks = document.querySelectorAll("[data-dropdown]");
const navMenu = document.getElementById("navMenu");
let activeDropdown = null;
let activeLink = null;

// Función para detectar si estamos en móvil/tablet
function isMobileView() {
  return window.innerWidth <= 900;
}

// Función para cerrar todos los dropdowns
function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
    dropdown.classList.remove("show");
  });
  document.querySelectorAll("[data-dropdown]").forEach((link) => {
    link.classList.remove("active");
  });
  activeDropdown = null;
  activeLink = null;
}

// Manejo de clicks en los links con dropdown
dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const dropdownId = link.getAttribute("data-dropdown");
    const dropdown = document.getElementById(`dropdown-${dropdownId}`);

    // Si el dropdown clickeado ya está abierto, lo cerramos
    if (activeDropdown === dropdown && dropdown.classList.contains("show")) {
      closeAllDropdowns();
    } else {
      // Cerramos cualquier dropdown abierto
      closeAllDropdowns();

      // Abrimos el nuevo dropdown
      dropdown.classList.add("show");
      link.classList.add("active");
      activeDropdown = dropdown;
      activeLink = link;
    }
  });
});

// Cerrar dropdown al hacer click fuera
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-item") && activeDropdown) {
    closeAllDropdowns();
  }
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

mobileMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = navMenu.classList.toggle("show");
  mobileMenuBtn.textContent = isOpen ? "✕" : "☰";

  // Cerrar todos los dropdowns al cerrar el menú móvil
  if (!isOpen) {
    closeAllDropdowns();
  }
});

// Cerrar menú móvil al hacer click fuera
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar") && navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
    mobileMenuBtn.textContent = "☰";
    closeAllDropdowns();
  }
});

// Cerrar dropdowns al cambiar el tamaño de pantalla
let previousWidth = window.innerWidth;
window.addEventListener("resize", () => {
  const currentWidth = window.innerWidth;

  // Si cambiamos entre vista móvil y desktop
  if (
    (previousWidth <= 900 && currentWidth > 900) ||
    (previousWidth > 900 && currentWidth <= 900)
  ) {
    closeAllDropdowns();
    navMenu.classList.remove("show");
    mobileMenuBtn.textContent = "☰";
  }

  previousWidth = currentWidth;
});

// Cerrar dropdown al presionar Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllDropdowns();
    if (isMobileView() && navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
      mobileMenuBtn.textContent = "☰";
    }
  }
});
