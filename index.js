// Carousel de imágenes en todos los cursos
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const imageCount = images.length;

// Muestra la primera imagen inmediatamente
images[currentIndex].classList.add('active');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % imageCount;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos

// Menú desplegable
// scripts.js

// scripts.js

const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
    menuToggle.classList.toggle('change');
});
