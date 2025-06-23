// Simple interactions for AWS User Groups Austria
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll for reveal elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards for animation
    document.querySelectorAll('.reveal-animation').forEach(card => {
        observer.observe(card);
    });
    
    // Add click tracking for external links (for analytics)
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.textContent.trim();
            const href = this.href;
            console.log(`External link clicked: ${linkText} -> ${href}`);
            // Here you could add analytics tracking
        });
    });
});

// Add CSS animation class dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .hover-scale:hover {
        transform: scale(1.02);
        transition: transform 0.2s ease-in-out;
    }
    
    .text-glow {
        text-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
    }
    
    .gradient-text {
        background: linear-gradient(135deg, #8A2BE2, #6A5ACD, #0047AB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;
document.head.appendChild(style);
