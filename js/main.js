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
    // Carousel de graduados destacados
    // Scroll continuo con requestAnimationFrame
    // -----------------------------------------
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const cardWidth = 370;

    // Duplicar las cards para loop infinito
    carousel.innerHTML += carousel.innerHTML;

    let scrollPos = 0;
    let paused = false;
    const speed = 0.5; // px por frame (~30px/seg a 60fps)
    const halfWidth = carousel.scrollWidth / 2;

    function animate() {
        if (!paused) {
            scrollPos += speed;
            // Cuando recorrió la mitad (las cards originales), resetear
            if (scrollPos >= halfWidth) {
                scrollPos = 0;
            }
            carousel.style.transform = `translateX(-${scrollPos}px)`;
        }
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    // Botones: salto manual de una card
    nextBtn.addEventListener('click', () => {
        scrollPos = Math.min(scrollPos + cardWidth, halfWidth - 1);
    });

    prevBtn.addEventListener('click', () => {
        scrollPos = Math.max(scrollPos - cardWidth, 0);
    });

    // Pausar en hover (desktop)
    carousel.parentElement.addEventListener('mouseenter', () => {
        paused = true;
    });

    carousel.parentElement.addEventListener('mouseleave', () => {
        paused = false;
    });

    // Pausar en touch (mobile)
    carousel.parentElement.addEventListener('touchstart', () => {
        paused = true;
    }, { passive: true });

    carousel.parentElement.addEventListener('touchend', () => {
        paused = false;
    }, { passive: true });

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

});
