
/**
 * Utility to add scroll animations to elements
 */

// Observer options
const observerOptions = {
  root: null,
  threshold: 0.1, // Trigger when 10% of the element is visible
  rootMargin: '0px'
};

// Animation variants
export enum AnimationDirection {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
  FADE = 'fade'
}

/**
 * Sets up scroll animations for elements with data-animate attributes
 */
export const setupScrollAnimations = () => {
  // Add CSS to create the animations
  const style = document.createElement('style');
  style.textContent = `
    [data-animate] {
      opacity: 0;
      transition: transform 0.6s ease, opacity 0.6s ease;
      will-change: transform, opacity;
    }

    [data-animate="left"] {
      transform: translateX(-50px);
    }

    [data-animate="right"] {
      transform: translateX(50px);
    }

    [data-animate="up"] {
      transform: translateY(50px);
    }

    [data-animate="down"] {
      transform: translateY(-50px);
    }

    [data-animate="fade"] {
      transform: none;
    }

    [data-animate].animated {
      opacity: 1;
      transform: translateX(0) translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Create and setup the Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animated class when element is in view
        entry.target.classList.add('animated');
        // Stop observing after animation is applied
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Start observing elements
  setTimeout(() => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));
  }, 100);
};

/**
 * Hook to apply animation to a section with alternating animations for children
 * @param sectionRef - Reference to the section element
 * @param direction - Direction of the animation
 */
export const applyScrollAnimationToSection = (
  sectionElement: HTMLElement | null,
  direction: AnimationDirection = AnimationDirection.FADE
) => {
  if (!sectionElement) return;
  
  sectionElement.setAttribute('data-animate', direction);
};
