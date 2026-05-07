document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-up');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        animatedElements.forEach((element) => observer.observe(element));
    } else {
        animatedElements.forEach((element) => element.classList.add('animate'));
    }

    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navLinks?.classList.toggle('show');
    });

    document.querySelectorAll('.tilt-card').forEach((card) => {
        card.addEventListener('pointermove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `perspective(900px) rotateX(${y * -8}deg) rotateY(${x * 10}deg) translateY(-6px)`;
        });

        card.addEventListener('pointerleave', () => {
            card.style.transform = '';
        });
    });

    document.querySelectorAll('.image-tilt').forEach((imageCard) => {
        imageCard.addEventListener('pointermove', (event) => {
            const rect = imageCard.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            imageCard.style.animation = 'none';
            imageCard.style.transform = `perspective(1100px) rotateX(${y * -12}deg) rotateY(${x * 16 - 10}deg) translateZ(18px) scale(1.02)`;
            imageCard.style.filter = 'drop-shadow(0 48px 75px rgba(0, 0, 0, 0.62))';
        });

        imageCard.addEventListener('pointerleave', () => {
            imageCard.style.transform = '';
            imageCard.style.filter = '';
            imageCard.style.animation = '';
        });
    });
});
