// Main JavaScript file for AWS User Groups Austria

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return;
            
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Add hover effects to cards
    document.querySelectorAll('.reinvent-card, .reinvent-card-highlight').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });
    
    // Initialize all shimmer effects
    const shimmerElements = document.querySelectorAll('.shimmer-effect');
    shimmerElements.forEach((element, index) => {
        // Add slight delay to each element for a staggered effect
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Force reveal all animations after a short delay
    setTimeout(function() {
        document.querySelectorAll('.reveal-animation').forEach(el => {
            el.classList.add('revealed');
        });
    }, 500);
});
