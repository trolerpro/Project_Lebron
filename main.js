function updateBirthdayCountdown() {
    const now = new Date();
    let birthday = new Date(now.getFullYear(), 11, 30);
    if (now > birthday) {
        birthday = new Date(now.getFullYear() + 1, 11, 30);
    }

    const difference = birthday - now;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', function() {
    updateBirthdayCountdown();
    setInterval(updateBirthdayCountdown, 1000);
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function moveSlide(direction) {
    event.preventDefault();
    
    const videos = document.querySelectorAll('.carousel-item video');
    videos.forEach(function(video) {
        video.pause();
        video.currentTime = 0;
    });
    
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
}

function toggleStats() {
    const statsTable = document.getElementById('statsTable');
    if (statsTable.style.display === 'none') {
        statsTable.style.display = 'block';
    } else {
        statsTable.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = 'translateX(0)';
});


const atbildes = ["b", "b", "b", "c", "b", "b", "b", "c", "b", "b", "a", "a", "b", "c", "a", "a", "b", "b", "a", "c"];
let tagadJaut = 0;
let rezult = 0;

const jautajumi = document.querySelectorAll('.question');
const result = document.getElementById("result");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");

checkBtn.addEventListener('click', function() {
    const current = jautajumi[tagadJaut];
    let isCorrect = false;

    if (tagadJaut === 14) {
        // Special handling for the text input question
        const answer = document.getElementById('q14').value.trim();
        if (answer === '') {
            alert("Lūdzu ievadiet atbildi!");
            return;
        }
        isCorrect = answer === '6';
    } else {
        // Handle radio button questions
        const atlasits = current.querySelector('input[type="radio"]:checked');
        if (!atlasits) {
            alert("Lūdzu izvēlies atbilžu variantu!");
            return;
        }
        isCorrect = atlasits.value === atbildes[tagadJaut];
    }

    if (isCorrect) {
        rezult++;
        result.textContent = "Pareizi!";
    } else {
        result.textContent = "Nepareizi!";
    }

    checkBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
});

nextBtn.addEventListener('click', function() {
    jautajumi[tagadJaut].classList.remove("active");
    tagadJaut++;
    result.textContent = "";

    if (tagadJaut < jautajumi.length) {
        jautajumi[tagadJaut].classList.add("active");
        checkBtn.style.display = "inline-block";
        nextBtn.style.display = "none";
    } else {
        document.getElementById("quizForm").innerHTML = '<img src="https://i.etsystatic.com/51516337/r/il/20e70c/6287083849/il_fullxfull.6287083849_1fov.jpg" alt="Viktorina Beigas">';
        result.textContent = `Tu ieguvi ${rezult} punktus no ${jautajumi.length}!`;
    }
});