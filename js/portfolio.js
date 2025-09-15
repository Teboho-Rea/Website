// A script to add a "reveal on scroll" effect to portfolio project cards.

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    const options = {
        // The animation will trigger when the element is 15% visible.
        root: null, // Use the viewport as the root.
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is visible, add the 'fade-in' class.
                entry.target.classList.add('fade-in');
                // Stop observing the element once it has been animated.
                observer.unobserve(entry.target);
            }
        });
    }, options);

    projectCards.forEach(card => {
        observer.observe(card);
    });
});