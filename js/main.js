// =============================================
// Centro de Graduados FACEI - UCALP
// JavaScript principal
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------
    // Mobile menu toggle
    // -----------------------------------------
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menu mobile al hacer click en un link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // -----------------------------------------
    // Carousel auto-scroll infinito
    // -----------------------------------------
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        const cards = carouselTrack.innerHTML;
        carouselTrack.innerHTML = cards + cards;
    }

    // -----------------------------------------
    // Fade in on scroll (IntersectionObserver)
    // -----------------------------------------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // -----------------------------------------
    // Counters animados en estadísticas
    // -----------------------------------------
    const statsSection = document.getElementById('stats');
    let countersStarted = false;

    function animateCounter(el) {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 1500; // ms
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutQuart para que desacelere al final
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    countersStarted = true;
                    document.querySelectorAll('.counter').forEach(animateCounter);
                    statsObserver.disconnect();
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);
    }

});
