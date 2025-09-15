// A script to create a typing effect.

document.addEventListener('DOMContentLoaded', () => {
    // --- Dynamic Typing Effect ---
    const dynamicTitle = document.getElementById('dynamic-title');
    const dynamicIntro = document.getElementById('dynamic-intro');
    const titleText = "Welcome to My Website";
    const introText = "My name is Teboho Reabetswe Sepanya. I am 21 years old and excited to share a little bit about myself with you through this website. I've created this platform to showcase my interests, skills, and many more.";

    /**
     * Types text into an HTML element.
     * @param {string} text - The text to be typed.
     * @param {HTMLElement} element - The DOM element.
     * @param {number} delay - The delay in milliseconds.
     * @returns {Promise<void>} - Resolves when typing is complete.
     */
    const typeText = (text, element, delay) => {
        return new Promise(resolve => {
            let i = 0;
            element.textContent = '';
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    resolve();
                }
            }, delay);
        });
    };

    // Animate the title and introduction
    const startTypingAnimation = async () => {
        await typeText(titleText, dynamicTitle, 50);
        setTimeout(() => {
            typeText(introText, dynamicIntro, 20);
        }, 500);
    };

    startTypingAnimation();
});