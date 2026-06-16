// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Keyboard visual interaction
const keys = document.querySelectorAll('.key');
let activeKeyIndex = 0;

function activateNextKey() {
    keys.forEach(key => key.classList.remove('active'));
    keys[activeKeyIndex].classList.add('active');
    activeKeyIndex = (activeKeyIndex + 1) % keys.length;
}

// Animate keyboard keys
setInterval(activateNextKey, 400);

// Add click handler for manual key activation
keys.forEach((key, index) => {
    key.addEventListener('click', () => {
        keys.forEach(k => k.classList.remove('active'));
        key.classList.add('active');
        activeKeyIndex = (index + 1) % keys.length;
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.borderBottomColor = 'rgba(102, 126, 234, 0.3)';
        navbar.style.background = 'rgba(30, 41, 59, 0.98)';
    } else {
        navbar.style.borderBottomColor = 'rgba(102, 126, 234, 0.1)';
        navbar.style.background = 'rgba(30, 41, 59, 0.95)';
    }
});

// Add animation on scroll for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .profile-card, .download-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Download button tracking (optional - for analytics)
document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log('Download initiated:', btn.textContent);
    });
});

console.log('🎹 RummyVibes website loaded successfully!');
