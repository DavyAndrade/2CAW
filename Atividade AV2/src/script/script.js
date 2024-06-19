// Carrossel

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrossel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carrossel-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentSlide);
    });
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

// Troca de Temas
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});