// Carrossel

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carrossel-item");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector(
    ".carrossel-inner"
  ).style.transform = `translateX(${offset}%)`;

  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === currentSlide);
  });
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});

// Troca de Temas
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  // Salva o tema atual no localStorage
  const isDarkTheme = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

// Evento de troca de tema
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Carrega o tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});