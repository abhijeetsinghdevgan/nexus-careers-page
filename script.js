document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add staggered fade-in animations to sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply initial styles for animation
    const animatedElements = document.querySelectorAll('.culture-card, .benefit-item, .job-card, .section-header');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index % 3 * 0.1}s, transform 0.6s ease ${index % 3 * 0.1}s`;
        observer.observe(el);
    });

    // Interactive apply buttons
    const applyBtns = document.querySelectorAll('.apply-btn');
    applyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.innerText;
            this.innerText = 'Redirecting...';
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.innerText = originalText;
                this.style.opacity = '1';
                alert('This is a demo. In a real app, this would redirect to an application form!');
            }, 1000);
        });
    });
});
