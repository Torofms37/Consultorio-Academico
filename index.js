// scripts.js

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const imageCount = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % imageCount;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos
