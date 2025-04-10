let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function moveSlide(direction) {
    // Prevent default button behavior
    event.preventDefault();
    
    // Stop all videos in the carousel
    const videos = document.querySelectorAll('.carousel-item video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    
    // Update current slide
    currentSlide += direction;
    
    // Handle wrap-around
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    // Update carousel position
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function toggleStats() {
    const statsTable = document.getElementById('statsTable');
    if (statsTable.style.display === 'none') {
        statsTable.style.display = 'block';
    } else {
        statsTable.style.display = 'none';
    }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = 'translateX(0)';
});