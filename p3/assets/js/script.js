// Custom easing functions
CustomEase.create("easeOutFast", "M0,0 C0.25,0.1 0.25,1 1,1"); // Opening ease
CustomEase.create("easeInFast", "M0,0 C0.5,0 0.75,0.2 1,1"); // Closing ease

// DOM Elements
const menuBtn = document.getElementById("menu-btn");
const dropdown = document.getElementById("dropdown");
const dropdownContent = document.querySelector(".dropdown__content");
const allContent = document.getElementById("all-content");
const navigation = document.getElementById("navigation");
const navLogo = document.querySelector(".navigation__logo");
const navRight = document.querySelector(".navigation__right");
const menuButtons = document.querySelectorAll(".dropdown__button");

// State
let isOpen = false;

// Animation settings
const animationSettings = {
    force3D: true,
    openEase: "easeOutFast",
    closeEase: "easeInFast",
    fastDuration: 0.2,
    mediumDuration: 0.25,
    slowDuration: 0.3
};

// Menu functionality
menuBtn.addEventListener("click", () => {
    isOpen ? closeMenu() : openMenu();
    isOpen = !isOpen;
});

function openMenu() {
    dropdown.classList.add("open");
    allContent.classList.add("menu-open");
    
    // Reset menu buttons
    gsap.set(menuButtons, {
        opacity: 0,
        y: 20,
        filter: "blur(10px)"
    });
    
    const openTimeline = gsap.timeline();
    
    openTimeline
        .to([navLogo, navRight], {
            x: i => i === 0 ? 20 : -20,
            duration: animationSettings.fastDuration,
            ease: animationSettings.openEase,
            ...getAnimationProps()
        }, "<")
        .to(dropdown, {
            marginTop: "20px",
            duration: animationSettings.fastDuration,
            ease: animationSettings.openEase
        }, "<")
        .fromTo(dropdown, {
            opacity: 0,
            scaleY: 0,
            maxHeight: 0
        }, {
            opacity: 1,
            scaleY: 1,
            maxHeight: "50vh",
            duration: 0.25,
            ease: animationSettings.openEase,
            ...getAnimationProps()
        }, "-=0.15")
        .to(menuBtn, {
            rotation: 45,
            duration: animationSettings.fastDuration,
            ease: animationSettings.openEase,
            ...getAnimationProps()
        }, "<")
        .to(menuButtons, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.03,
            duration: animationSettings.fastDuration,
            ease: animationSettings.openEase,
            ...getAnimationProps()
        }, "-=0.1");
}

function closeMenu() {
    const reversedButtons = Array.from(menuButtons).reverse();
    
    const closeTimeline = gsap.timeline({
        onComplete: () => {
            dropdown.classList.remove("open");
            allContent.classList.remove("menu-open");
        }
    });
    
    closeTimeline
        .to(reversedButtons, {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            stagger: 0.02,
            duration: 0.15,
            ease: animationSettings.closeEase,
            ...getAnimationProps()
        }, "+=0.05")
        .to(menuBtn, {
            rotation: 0,
            duration: animationSettings.fastDuration,
            ease: animationSettings.closeEase,
            ...getAnimationProps()
        }, "<")
        .to(dropdown, {
            opacity: 0,
            scaleY: 0,
            maxHeight: 0,
            duration: animationSettings.slowDuration,
            ease: animationSettings.closeEase,
            ...getAnimationProps()
        }, "+=0.05")
        .to(dropdown, {
            marginTop: "0",
            duration: animationSettings.slowDuration,
            ease: animationSettings.closeEase
        }, "<")
        .to([navLogo, navRight], {
            x: 0,
            duration: animationSettings.mediumDuration,
            ease: animationSettings.closeEase,
            ...getAnimationProps()
        }, "<");
}

// Helper function to get common animation properties
function getAnimationProps() {
    return {
        force3D: animationSettings.force3D
    };
}

// ScrollSmoother initialization
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const smoother = ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#main-content",
    smooth: 1,
    normalizeScroll: true,
    ignoreMobileResize: true,
    effects: true,
    preventDefault: true
});

gsap.set(".heading", {
    yPercent: -150,
    opacity: 1
});

// SplitText animation
if (typeof SplitText !== "undefined") {
    let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
    let chars = mySplitText.chars;
    chars.forEach((char, i) => {
        smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
    });
}

// ==================== MARQUEE ANIMATIONS ====================
function createMarqueeAnimation(selector, direction) {
    const content = $(selector);
    if (!content.length) return;
    
    const width = content.width();
    content.clone().appendTo(selector.replace('-content', ''));
    
    anime({
        targets: selector,
        translateX: direction === 'normal' ? [0, -width] : [-width, 0],
        duration: 20000,
        easing: 'linear',
        loop: true
    });
}

// Initialize marquees
createMarqueeAnimation('.marquee-content', 'normal');
createMarqueeAnimation('.marquee-content_invers', 'inverse');

// ==================== RIPPLE EFFECT ====================
document.addEventListener('DOMContentLoaded', function() {
    const imageItems = document.querySelectorAll('.ripple-container');
    
    imageItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});