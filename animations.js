// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // rejoue à chaque fois
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observer tous les éléments animables
document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
    observer.observe(el);
});

// Hero visible direct au chargement
window.addEventListener('load', () => {
    document.querySelectorAll('#hero .fade-up, #hero .fade-right').forEach(el => {
        el.classList.add('visible');
    });
});

// Stagger cards projet
document.querySelectorAll('.projects-grid .project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
    card.classList.add('fade-up');
    observer.observe(card);
});

// Stagger skill-groups
document.querySelectorAll('.skill-group').forEach((group, i) => {
    group.style.transitionDelay = `${i * 0.08}s`;
    group.classList.add('fade-up');
    observer.observe(group);
});

// Parallaxe léger hero
const heroText = document.querySelector('.hero-text');
const heroAvatar = document.querySelector('.hero-avatar');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
        if (heroText) heroText.style.transform = `translateY(${scrollY * 0.08}px)`;
        if (heroAvatar) heroAvatar.style.transform = `translateY(${scrollY * 0.05}px)`;
    }
}, { passive: true });
