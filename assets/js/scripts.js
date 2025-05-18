document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
                behavior: 'smooth'
            });

            // Update active class
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Update navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '8px 0';
        navbar.style.background = 'rgba(28, 28, 28, 1) !important';
    } else {
        navbar.style.padding = '12px 0';
        navbar.style.background = 'linear-gradient(180deg, rgba(28, 28, 28, 0.98) 0%, rgba(28, 28, 28, 0.9) 100%) !important';
    }
});
// Disable parallax on mobile for performance
function toggleParallax() {
    const hero = document.querySelector('.hero');
    if (window.innerWidth <= 768) {
        hero.style.backgroundAttachment = 'scroll';
    } else {
        hero.style.backgroundAttachment = 'fixed';
    }
}

window.addEventListener('load', toggleParallax);
window.addEventListener('resize', toggleParallax);

// Add subtle mouse move effect for desktop
document.querySelector('.hero').addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        document.querySelector('.hero-content').style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Reset transform on mouse leave
document.querySelector('.hero').addEventListener('mouseleave', () => {
    document.querySelector('.hero-content').style.transform = 'translate(0, 0)';
});

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
});