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
    // -----------------------------------------
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let scrollPos = 0;
    const cardWidth = 370;

    function advanceCarousel() {
        const maxScroll = carousel.scrollWidth - carousel.parentElement.clientWidth;
        if (scrollPos >= maxScroll) {
            // Volver al inicio
            scrollPos = 0;
        } else {
            scrollPos = Math.min(scrollPos + cardWidth, maxScroll);
        }
        carousel.style.transform = `translateX(-${scrollPos}px)`;
    }

    function retreatCarousel() {
        scrollPos = Math.max(scrollPos - cardWidth, 0);
        carousel.style.transform = `translateX(-${scrollPos}px)`;
    }

    nextBtn.addEventListener('click', () => {
        advanceCarousel();
        resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
        retreatCarousel();
        resetAutoplay();
    });

    // Autoplay: avanza cada 5 segundos, pausa con interacción
    let autoplayInterval = setInterval(advanceCarousel, 5000);

    function resetAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(advanceCarousel, 5000);
    }

    // Pausar en hover sobre el carousel
    carousel.parentElement.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    carousel.parentElement.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(advanceCarousel, 5000);
    });

    // Pausar en touch (mobile)
    carousel.parentElement.addEventListener('touchstart', () => {
        clearInterval(autoplayInterval);
    }, { passive: true });

    carousel.parentElement.addEventListener('touchend', () => {
        autoplayInterval = setInterval(advanceCarousel, 5000);
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
