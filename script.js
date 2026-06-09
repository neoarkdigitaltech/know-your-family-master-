gsap.registerPlugin(ScrollTrigger);

// Hero Entrance Animation
window.addEventListener('load', () => {
    gsap.fromTo('.gs-fade-up', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );
});

// Changing Text Logic (Aurora Demo replication)
document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.changing-text');
    let currentIndex = 0;

    if (texts.length > 0) {
        setInterval(() => {
            // Remove active from current
            texts[currentIndex].classList.remove('active');
            
            // Move to next
            currentIndex = (currentIndex + 1) % texts.length;
            
            // Add active to new
            texts[currentIndex].classList.add('active');
        }, 3000); // Change text every 3 seconds
    }
});

// Subtle fade up for scroll sections
const fadeElements = gsap.utils.toArray('.gs-fade');
fadeElements.forEach(el => {
    gsap.fromTo(el, 
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
            }
        }
    );
});

// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        item.classList.toggle('active');
    });
});

// Scroll to Top Button Logic
document.addEventListener('DOMContentLoaded', () => {
    // Inject the button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    scrollBtn.className = 'scroll-top-btn';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);

    // Show/Hide logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Click logic
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Note: Form submission is now handled by native HTML action="thank-you.html"
