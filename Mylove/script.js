// Music player functionality
let isPlaying = false;
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.querySelector('.music-icon');

// Set initial volume
music.volume = 0.5;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.classList.remove('playing');
        musicIcon.classList.add('paused');
    } else {
        music.play().catch(err => {
            console.log('Playback error:', err);
        });
        musicIcon.classList.remove('paused');
        musicIcon.classList.add('playing');
    }
    isPlaying = !isPlaying;
}

function startMusic() {
    music.play().then(() => {
        isPlaying = true;
        musicIcon.classList.remove('paused');
        musicIcon.classList.add('playing');
    }).catch(err => {
        console.log('Autoplay prevented, waiting for user interaction');
        isPlaying = false;
        musicIcon.classList.remove('playing');
        musicIcon.classList.add('paused');
    });
}

musicToggle.addEventListener('click', toggleMusic);

// Attempt autoplay on page load
window.addEventListener('load', startMusic);

// Fallback: Play on first user interaction if autoplay was blocked
let musicStarted = false;
function playOnInteraction() {
    if (!musicStarted && !isPlaying) {
        startMusic();
        musicStarted = true;
    }
}

document.addEventListener('click', playOnInteraction, { once: true });
document.addEventListener('touchstart', playOnInteraction, { once: true });
document.addEventListener('keydown', playOnInteraction, { once: true });

// Try to autoplay (may be blocked by browser)
window.addEventListener('load', () => {
    music.play().then(() => {
        isPlaying = true;
        musicIcon.classList.add('playing');
    }).catch(() => {
        // Autoplay blocked, user needs to click
        isPlaying = false;
        musicIcon.classList.add('paused');
    });
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        // Random size variation for hearts
        const size = Math.random() * 10 + 15; // Between 15px and 25px
        particle.style.fontSize = size + 'px';
        
        // Random opacity variation
        const opacity = Math.random() * 0.4 + 0.3; // Between 0.3 and 0.7
        particle.style.setProperty('--particle-opacity', opacity);
        
        particlesContainer.appendChild(particle);
    }
}

// Open letter animation
function openLetter() {
    const letterContainer = document.getElementById('letterContainer');
    const button = document.getElementById('openLetter');
    
    // Add pulse animation to button
    button.style.animation = 'none';
    setTimeout(() => {
        button.style.animation = '';
    }, 10);
    
    // Show letter with delay for smooth transition
    setTimeout(() => {
        letterContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 100);
}

// Close letter animation
function closeLetter() {
    const letterContainer = document.getElementById('letterContainer');
    letterContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.getElementById('openLetter').addEventListener('click', openLetter);
document.getElementById('closeLetter').addEventListener('click', closeLetter);

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLetter();
    }
});

// Close on backdrop click
document.getElementById('letterContainer').addEventListener('click', (e) => {
    if (e.target.id === 'letterContainer') {
        closeLetter();
    }
});

// Initialize particles on load
window.addEventListener('load', () => {
    createParticles();
});

// Add subtle mouse parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const container = document.querySelector('.container');
    if (container && !document.getElementById('letterContainer').classList.contains('active')) {
        container.style.transform = `translate(${mouseX * 20 - 10}px, ${mouseY * 20 - 10}px)`;
    }
});