// Import utility function for preloading images
import { preloadImages } from './utils.js';
// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);
// Initialize GSAP's ScrollSmoother for smooth scrolling and scroll-based effects
const smoother = ScrollSmoother.create({
  smooth: 1, // How long (in seconds) it takes to "catch up"
  effects: true, // Enable data-speed and data-lag-based scroll effects
  normalizeScroll: true, // Normalizes scroll behavior across browsers
});
// Reference to the container that wraps all the 3D scene elements
const sceneWrapper = document.querySelector('.scene-wrapper');
// Global flag to prevent multiple animations from overlapping or triggering at once
let isAnimating = false;
// A Map to store SplitText instances keyed by DOM elements (used for animating text characters)
const splitMap = new Map();
/**
 * Returns an array of transform strings to evenly space carousel cells in 3D
 *
 * @param {number} count - Number of carousel cells
 * @param {number} radius - Radius of the circular layout
 * @returns {string[]} Array of transform strings for each cell
 */
const getCarouselCellTransforms = (count, radius) => {
  const angleStep = 360 / count; // Divide 360° by number of cells to get angle step
  return Array.from({ length: count }, (_, i) => {
    const angle = i * angleStep;
    return `rotateY(${angle}deg) translateZ(${radius}px)`; // 3D rotation + translation
  });
};
/**
 * Applies 3D transforms to each cell in a given carousel
 *
 * @param {Element} carousel - DOM element representing the carousel
 * @returns {void}
 */
const setupCarouselCells = (carousel) => {
  const wrapper = carousel.closest('.scene');
  const radius = parseFloat(wrapper.dataset.radius) || 500; // Read radius from data attribute or default to 500
  const cells = carousel.querySelectorAll('.carousel__cell');
  const transforms = getCarouselCellTransforms(cells.length, radius); // Get transform strings
  cells.forEach((cell, i) => {
    cell.style.transform = transforms[i]; // Apply transform to each cell
  });
};
/**
 * Creates a scroll-linked GSAP timeline for a given carousel scene
 *
 * @param {Element} carousel - DOM element of the carousel
 * @returns {GSAPTimeline} Scroll-driven animation timeline
 */
const createScrollAnimation = (carousel) => {
  const wrapper = carousel.closest('.scene');
  const cards = carousel.querySelectorAll('.card');
  const titleSpan = wrapper.querySelector('.scene__title span');
  const split = splitMap.get(titleSpan);
  const chars = split?.chars || [];
  // Create scroll-driven timeline
  carousel._timeline = gsap.timeline({
    defaults: { ease: 'sine.inOut' },
    scrollTrigger: {
      trigger: wrapper,
      start: 'top bottom', // Start when top of wrapper hits bottom of viewport
      end: 'bottom top', // End when bottom of wrapper hits top of viewport
      scrub: true, // Smooth animation based on scroll position
    },
  });
  carousel._timeline
    .fromTo(carousel, { rotationY: 0 }, { rotationY: -180 }, 0) // Rotate carousel horizontally
    .fromTo(
      carousel,
      { rotationZ: 3, rotationX: 3 },
      { rotationZ: -3, rotationX: -3 },
      0
    ) // Subtle 3D tilt
    .fromTo(
      cards,
      { filter: 'grayscale(300%)' },
      { filter: 'grayscale(10%)', ease: 'power3' },
      0
    ) // Brightness dimming
    .fromTo(cards, { rotationZ: 10 }, { rotationZ: -10, ease: 'none' }, 0); // Rotate cards around Z
  // Animate title characters in on scroll
  if (chars.length > 0) {
    animateChars(chars, 'in', {
      scrollTrigger: {
        trigger: wrapper,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });
  }
  return carousel._timeline;
};
/**
 * Initializes SplitText instances on key animated elements
 *
 * @returns {void}
 */
const initTextsSplit = () => {
  document
    .querySelectorAll(
      '.scene__title span, .preview__title span, .preview__close'
    )
    .forEach((span) => {
      const split = SplitText.create(span, {
        type: 'chars', // Split by characters
        charsClass: 'char', // Assign class to each character
        autoSplit: true, // Revert and re-split whenever the fonts finish loading
      });
      splitMap.set(span, split); // Store split instance for reuse
    });
};
/**
 * Returns interpolated rotation values based on scroll progress
 *
 * @param {number} progress - Scroll progress (0 to 1)
 * @returns {Object} Object with interpolated rotationX, rotationY, rotationZ values
 */
const getInterpolatedRotation = (progress) => ({
  rotationY: gsap.utils.interpolate(0, -180, progress), // Horizontal spin from 0° to -180°
  rotationX: gsap.utils.interpolate(3, -3, progress), // Tilt forward/backward
  rotationZ: gsap.utils.interpolate(3, -3, progress), // Z-axis twist
});
/**
 * Animates a single grid item into view with position, scale, and 3D depth
 *
 * @param {Element} el - DOM element to animate
 * @param {number} dx - Horizontal distance from center
 * @param {number} dy - Vertical distance from center
 * @param {number} rotationY - Y-axis rotation direction
 * @param {number} delay - Delay before animation starts
 * @returns {void}
 */
const animateGridItemIn = (el, dx, dy, rotationY, delay) => {
  // Set z-index to ensure proper stacking
  gsap.set(el, { zIndex: 10 });
  
  // Animate 2D transform and opacity
  gsap.fromTo(
    el,
    {
      transformOrigin: `% 50% ${dx > 0 ? -dx * 0.8 : dx * 0.8}px`,
      autoAlpha: 0,
      y: dy * 0.5, // Slight vertical offset
      scale: 0.5, // Scaled down
      rotationY: dx < 0 ? rotationY : rotationY, // Rotate in from left/right
    },
    {
      y: 0,
      scale: 1,
      rotationY: 0,
      autoAlpha: 1,
      duration: 0.4,
      ease: 'sine',
      delay: delay + 0.1,
    }
  );
  // Animate z-position separately for 3D pop
  gsap.fromTo(
    el,
    { z: -3500 },
    {
      z: 0,
      duration: 0.3,
      ease: 'expo',
      delay,
    }
  );
};
/**
 * Animates a single grid item out of view with depth and fade
 *
 * @param {Element} el - DOM element to animate
 * @param {number} dx - Horizontal distance from center
 * @param {number} dy - Vertical distance from center
 * @param {number} rotationY - Y-axis rotation direction
 * @param {number} delay - Delay before animation starts
 * @param {boolean} isLast - Whether this is the last item (for onComplete)
 * @param {Function} [onComplete] - Callback when animation finishes
 * @returns {void}
 */
const animateGridItemOut = (
  el,
  dx,
  dy,
  rotationY,
  delay,
  isLast,
  onComplete
) => {
  // Animate 2D transform and opacity
  gsap.to(el, {
    startAt: {
      transformOrigin: `50% 50% ${dx > 0 ? -dx * 0.8 : dx * 0.8}px`,
    },
    y: dy * 0.4,
    rotationY: dx < 0 ? rotationY : rotationY,
    scale: 0.4,
    autoAlpha: 0,
    duration: 0.4,
    ease: 'sine.in',
    delay,
  });
  gsap.to(el, {
    z: -3500,
    duration: 0.4,
    ease: 'expo.in',
    delay: delay + 0.9,
    onComplete: () => {
      // Reset z-index after animation completes
      gsap.set(el, { zIndex: '' });
      if (isLast && onComplete) onComplete();
    },
  });
};
/**
 * Animates all grid items in or out with a distance-based stagger and easing
 *
 * @param {Object} options
 * @param {NodeList} options.items - Collection of grid item DOM elements
 * @param {number} options.centerX - X-coordinate of the center
 * @param {number} options.centerY - Y-coordinate of the center
 * @param {'in' | 'out'} [options.direction='in'] - Animation direction
 * @param {Function} [options.onComplete] - Callback after all animations complete
 * @returns {void}
 */
const animateGridItems = ({
  items,
  centerX,
  centerY,
  direction = 'in',
  onComplete,
}) => {
  // Measure position of each item and calculate distance from center
  const itemData = Array.from(items).map((el) => {
    const rect = el.getBoundingClientRect();
    const elCenterX = rect.left + rect.width / 2;
    const elCenterY = rect.top + rect.height / 2;
    const dx = centerX - elCenterX;
    const dy = centerY - elCenterY;
    const dist = Math.hypot(dx, dy); // Euclidean distance from center
    const isLeft = elCenterX < centerX;
    return { el, dx, dy, dist, isLeft };
  });
  const maxDist = Math.max(...itemData.map((d) => d.dist)); // Farthest distance
  const totalStagger = 0.025 * (itemData.length - 1); // Total stagger duration
  let latest = { delay: -1, el: null }; // Track latest delay item
  itemData.forEach(({ el, dx, dy, dist, isLeft }) => {
    const norm = maxDist ? dist / maxDist : 0; // Normalize distance
    const exponential = Math.pow(direction === 'in' ? 1 - norm : norm, 1); // Easing
    const delay = exponential * totalStagger;
    const rotationY = isLeft ? 100 : -100; // Directional rotation
    if (direction === 'in') {
      animateGridItemIn(el, dx, dy, rotationY, delay);
    } else {
      if (delay > latest.delay) {
        latest = { delay, el };
      }
      animateGridItemOut(el, dx, dy, rotationY, delay, false, onComplete);
    }
  });
  // Ensure onComplete runs only after the last item finishes
  if (direction === 'out' && latest.el) {
    const { el, dx, dy, isLeft } = itemData.find((d) => d.el === latest.el);
    const rotationY = isLeft ? 100 : -100;
    animateGridItemOut(el, dx, dy, rotationY, latest.delay, true, onComplete);
  }
};
/**
 * Animates all grid items in the preview into view
 *
 * @param {Element} preview - Preview DOM element containing grid items
 * @returns {void}
 */
const animatePreviewGridIn = (preview) => {
  // Set proper z-index for preview
  gsap.set(preview, { zIndex: 100 });
  
  const items = preview.querySelectorAll('.grid__item');
  // Clear any inline styles from previous animations
  gsap.set(items, { clearProps: 'all' });
  // Trigger grid item entrance animation from center of screen
  animateGridItems({
    items,
    centerX: window.innerWidth / 2,
    centerY: window.innerHeight / 2,
    direction: 'in',
  });
};
/**
 * Animates all grid items in the preview out of view
 * @param {HTMLElement} preview - The preview container
 */
const animatePreviewGridOut = (preview) => {
  const items = preview.querySelectorAll('.grid__item');
  // Trigger grid item exit animation toward edges
  const onComplete = () => {
    gsap.set(preview, { pointerEvents: 'none', autoAlpha: 0, zIndex: '' });
  };
  animateGridItems({
    items,
    centerX: window.innerWidth / 2,
    centerY: window.innerHeight / 2,
    direction: 'out',
    onComplete,
  });
};
/**
 * Retrieves relevant DOM elements and text splits from a scene title
 * @param {HTMLElement} titleEl - The `.scene__title` element
 * @returns {Object} wrapper, carousel, cards, span, chars
 */
const getSceneElementsFromTitle = (titleEl) => {
  const wrapper = titleEl.closest('.scene'); // Scene container
  const carousel = wrapper?.querySelector('.carousel'); // Carousel in the scene
  const cards = carousel?.querySelectorAll('.card'); // All card elements
  const span = titleEl.querySelector('span'); // Title span
  const chars = splitMap.get(span)?.chars || []; // SplitText chars
  return { wrapper, carousel, cards, span, chars };
};
/**
 * Retrieves scene-related elements from a preview element
 * @param {HTMLElement} previewEl - The `.preview` element
 * @returns {Object} All scene elements and corresponding titleEl
 */
const getSceneElementsFromPreview = (previewEl) => {
  const previewId = `#${previewEl.id}`;
  const titleLink = document.querySelector(
    `.scene__title a[href="${previewId}"]`
  );
  const titleEl = titleLink?.closest('.scene__title'); // Corresponding title element
  return { ...getSceneElementsFromTitle(titleEl), titleEl };
};
/**
 * Animates SplitText character elements in or out
 *
 * @param {HTMLElement[]} chars - Array of character elements to animate
 * @param {'in' | 'out'} direction - Direction of the animation ('in' for fade in, 'out' for fade out)
 * @param {Object} [opts={}] - Optional GSAP config overrides (e.g. scrollTrigger)
 */
const animateChars = (chars, direction = 'in', opts = {}) => {
  const base = {
    autoAlpha: direction === 'in' ? 1 : 0,
    duration: 0.02,
    ease: 'none',
    stagger: { each: 0.04, from: direction === 'in' ? 'start' : 'end' },
    ...opts,
  };
  gsap.fromTo(chars, { autoAlpha: direction === 'in' ? 0 : 1 }, base);
};
/**
 * Animates title and close button characters in a preview
 *
 * @param {HTMLElement} preview - The preview container
 * @param {'in' | 'out'} direction - Animation direction
 * @param {string} [selector='.preview__title span, .preview__close'] - Selector for elements to animate
 */
const animatePreviewTexts = (
  preview,
  direction = 'in',
  selector = '.preview__title span, .preview__close'
) => {
  preview.querySelectorAll(selector).forEach((el) => {
    const chars = splitMap.get(el)?.chars || [];
    animateChars(chars, direction);
  });
};
/**
 * Handles transition from carousel view to preview grid
 *
 * @param {Event} e - Click event triggered from `.scene__title`
 */
const activatePreviewFromCarousel = (e) => {
  e.preventDefault();
  if (isAnimating) return;
  isAnimating = true;
  const titleEl = e.currentTarget;
  const { wrapper, carousel, cards, chars } =
    getSceneElementsFromTitle(titleEl);
  // Calculate scroll position to center the scene
  const offsetTop = wrapper.getBoundingClientRect().top + window.scrollY;
  const targetY = offsetTop - window.innerHeight / 2 + wrapper.offsetHeight / 2;
  // Temporarily disable scroll-based animations
  ScrollTrigger.getAll().forEach((t) => t.disable(false));
  gsap
    .timeline({
      defaults: { duration: 1.5, ease: 'power2.inOut' },
      onComplete: () => {
        isAnimating = false;
        ScrollTrigger.getAll().forEach((t) => t.enable());
        carousel._timeline.scrollTrigger.scroll(targetY);
      },
    })
    .to(window, {
      onStart: () => {
        lockUserScroll();
      },
      onComplete: () => {
        unlockUserScroll();
        smoother.paused(true);
      },
      scrollTo: { y: targetY, autoKill: true },
    })
    .to(
      chars,
      {
        autoAlpha: 0,
        duration: 0.02,
        ease: 'none',
        stagger: { each: 0.04, from: 'end' },
      },
      0
    )
    .to(carousel, { rotationX: 90, rotationY: -360, z: -2000 }, 0)
    .to(
      carousel,
      {
        duration: 2.5,
        ease: 'power3.inOut',
        z: 1500,
        rotationZ: 270,
        onComplete: () => gsap.set(sceneWrapper, { autoAlpha: 0 }),
      },
      0.7
    )
    .to(cards, { rotationZ: 0 }, 0)
    .add(() => {
      const previewSelector = titleEl.querySelector('a')?.getAttribute('href');
      const preview = document.querySelector(previewSelector);
      gsap.set(preview, { pointerEvents: 'auto', autoAlpha: 1 });
      animatePreviewGridIn(preview);
      animatePreviewTexts(preview, 'in');
    }, '<+=1.9');
};
/**
 * Handles transition from preview grid back to carousel view
 *
 * @param {Event} e - Click event triggered from `.preview__close`
 */
const deactivatePreviewToCarousel = (e) => {
  if (isAnimating) return;
  isAnimating = true;
  const preview = e.currentTarget.closest('.preview');
  if (!preview) return;
  const { carousel, cards, chars } = getSceneElementsFromPreview(preview);
  animatePreviewTexts(preview, 'out');
  animatePreviewGridOut(preview);
  gsap.set(sceneWrapper, { autoAlpha: 1 });
  const progress = 0.5; // halfway
  /*
  BUG: progress should always be 0.5 but for some reason it's 0 sometimes
  const timeline = carousel._timeline;
  const scrollTrigger = timeline?.scrollTrigger;
  const progress = scrollTrigger?.progress ?? 0;
  */
  const { rotationX, rotationY, rotationZ } = getInterpolatedRotation(progress);
  gsap
    .timeline({
      delay: 0.7,
      defaults: { duration: 1.3, ease: 'expo' },
      onComplete: () => {
        smoother.paused(false);
        isAnimating = false;
      },
    })
    .fromTo(
      chars,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.02,
        ease: 'none',
        stagger: { each: 0.04, from: 'start' },
      }
    )
    .fromTo(
      carousel,
      {
        z: -550,
        rotationX,
        rotationY: -720,
        rotationZ,
        yPercent: 300,
      },
      {
        rotationY,
        yPercent: 0,
      },
      0
    )
    .fromTo(cards, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3);
};
/**
 * Adds click event listeners to scene titles and preview close buttons
 *
 * @returns {void}
 */
const initEventListeners = () => {
  // When a scene title is clicked, activate the preview
  document.querySelectorAll('.scene__title').forEach((title) => {
    title.addEventListener('click', activatePreviewFromCarousel);
  });
  
  // When a preview close button is clicked, deactivate the preview
  document.querySelectorAll('.preview__close').forEach((btn) => {
    btn.addEventListener('click', deactivatePreviewToCarousel);
  });
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          smoother.scrollTo(target, true, 'top top');
        }
      }
    });
  });
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navToggle = document.getElementById('nav-toggle');
      const mainNav = document.getElementById('main-nav');
      
      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        navToggle.classList.remove('active');
        
        const menuText = navToggle.querySelector('.menu');
        const closeText = navToggle.querySelector('.close');
        
        gsap.to(menuText, {
          y: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
        
        gsap.to(closeText, {
          y: 20,
          duration: 0.5,
          ease: "power2.inOut"
        });
        
        gsap.to(mainNav, 
          { x: 300, duration: 0.3, ease: "power2.in" }
        );
      }
    });
  });
};

// Parallax effect initialization
const initParallax = () => {
  // Get all elements with parallax backgrounds
  const parallaxElements = document.querySelectorAll('.parallax-bg, .hero-bg, .about-bg, .footer-bg');
  
  // Function to update parallax positions
  const updateParallax = () => {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    parallaxElements.forEach(element => {
      const elementTop = element.parentElement.offsetTop;
      const elementHeight = element.parentElement.offsetHeight;
      const elementBottom = elementTop + elementHeight;
      
      // Only apply parallax if element is in viewport
      if (scrollY + windowHeight > elementTop && scrollY < elementBottom) {
        // Calculate how far the element is in the viewport
        const distanceFromViewportTop = elementTop - scrollY;
        const viewportPercentage = distanceFromViewportTop / windowHeight;
        
        // Apply parallax transformation
        const speed = element.dataset.speed || 0.5;
        const yPos = -(viewportPercentage * speed * 100);
        
        // Use GSAP for smoother animation
        gsap.to(element, {
          y: yPos,
          duration: 0.5,
          ease: "power1.out"
        });
      }
    });
  };
  
  // Initial call
  updateParallax();
  
  // Update on scroll
  window.addEventListener('scroll', updateParallax);
  
  // Update on resize
  window.addEventListener('resize', updateParallax);
};


/**
 * Initializes all carousels on the page
 *
 * @returns {void}
 */
const initCarousels = () => {
  document.querySelectorAll('.carousel').forEach((carousel) => {
    setupCarouselCells(carousel); // Position carousel cells in 3D
    carousel._timeline = createScrollAnimation(carousel); // Attach scroll animation timeline
  });
};
function preventScroll(e) {
  e.preventDefault();
}
function lockUserScroll() {
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });
  window.addEventListener('keydown', preventArrowScroll, false);
}
function unlockUserScroll() {
  window.removeEventListener('wheel', preventScroll);
  window.removeEventListener('touchmove', preventScroll);
  window.removeEventListener('keydown', preventArrowScroll);
}
function preventArrowScroll(e) {
  const keys = [
    'ArrowUp',
    'ArrowDown',
    'PageUp',
    'PageDown',
    'Home',
    'End',
    ' ',
  ];
  if (keys.includes(e.key)) e.preventDefault();
}

// Text morph animation initialization
function initTextMorph() {
  const textMorphElements = document.querySelectorAll('.text-morph');
  
  if (textMorphElements.length === 0) {
    console.log("No text-morph elements found");
    return;
  }
  
  console.log("Found", textMorphElements.length, "text-morph elements");
  
  textMorphElements.forEach((element, index) => {
    console.log("Initializing text-morph element", index);
    
    const menuText = element.querySelector('.menu');
    const closeText = element.querySelector('.close');
    const circle = element.querySelector('.circle');
    
    if (!menuText || !closeText || !circle) {
      console.error("Missing required elements in text-morph", element);
      return;
    }
    
    // Set initial state
    gsap.set(menuText, { y: 0 });
    gsap.set(closeText, { y: 20 });
    gsap.set(circle, { 
        x: 0, 
        scaleX: 1, 
        borderRadius: "50%" 
    });
    
    // Click event handler
    element.addEventListener('click', function() {
      console.log("Text morph clicked");
      const isActive = element.classList.toggle('active');
      console.log("Active state:", isActive);
      
      if (isActive) {
        // Activate animation
        gsap.to(menuText, {
          y: -20,
          duration: 0.5,
          ease: "power2.inOut"
        });
        
        gsap.to(closeText, {
          y: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
        
        // Circle animation
        const tl = gsap.timeline();
        tl.to(circle, {
          x: -20,
          scaleX: 2.5,
          borderRadius: "4px",
          duration: 0.2,
          ease: "power1.out"
        }).to(circle, {
          x: 0,
          scaleX: 1,
          borderRadius: "50%",
          duration: 0.2,
          ease: "power1.in"
        });
      } else {
        // Deactivate animation
        gsap.to(menuText, {
          y: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
        
        gsap.to(closeText, {
          y: 20,
          duration: 0.5,
          ease: "power2.inOut"
        });
        
        // Circle animation
        const tl = gsap.timeline();
        tl.to(circle, {
          x: -20,
          scaleX: 2.5,
          borderRadius: "4px",
          duration: 0.2,
          ease: "power1.out"
        }).to(circle, {
          x: 0,
          scaleX: 1,
          borderRadius: "50%",
          duration: 0.2,
          ease: "power1.in"
        });
      }
      
      // Toggle navigation menu if this is the nav toggle
      if (element.id === 'nav-toggle') {
        const mainNav = document.getElementById('main-nav');
        if (mainNav) {
          mainNav.classList.toggle('active');
          console.log("Toggled navigation menu");
          
          // Add animation to the menu
          if (mainNav.classList.contains('active')) {
            gsap.fromTo(mainNav, 
              { x: 300 }, 
              { x: 0, duration: 0.3, ease: "power2.out" }
            );
          } else {
            gsap.to(mainNav, 
              { x: 300, duration: 0.3, ease: "power2.in" }
            );
          }
        }
      }
    });
  });
}

/**
 * Adds click event listeners to scene titles and preview close buttons
 *
 * @returns {void}
 */


/**
 * Initializes text splitting, carousels, and event listeners
 *
 * @returns {void}
 */
const init = () => {
  console.log("Initializing app");
  initTextMorph(); // Initialize text morph animation
  initTextsSplit(); // Prepare character-level splits for animations
  initCarousels(); // Set up carousels with transforms and scroll triggers
  initEventListeners(); // Bind all interactive handlers
  initParallax(); // Initialize parallax effects
  window.addEventListener('resize', ScrollTrigger.refresh); // Refresh triggers on resize
  console.log("App initialized");
};
// Start app once images are preloaded
preloadImages('.grid__item-image').then(() => {
  document.body.classList.remove('loading'); // Remove loading state from body
  init(); // Begin initialization
});

// Add this to your existing JavaScript file
