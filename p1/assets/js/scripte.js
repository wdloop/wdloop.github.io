$(document).ready(function() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // ==================== PRELOADER ====================
    const preloader = $('.preloader');
    if (preloader.length) {
        const chars = $('.char');
        const progressBar = $('.preloader-progress');
        
        // Animate each character
        if (chars.length) {
            chars.each(function(index) {
                gsap.to(this, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "power2.out"
                });
            });
        }
        
        // Simulate realistic loading progress
        let progress = 0;
        const targetProgress = 100;
        const incrementTime = 10; // Update every 100ms

        
        const progressInterval = setInterval(() => {
            // Calculate progress increment based on remaining time
            const remaining = targetProgress - progress;
            const increment = Math.max(1, remaining * 0.05); // Slow down as it approaches 100%
            
            progress += increment;
            
            if (progress >= targetProgress) {
                progress = targetProgress;
                clearInterval(progressInterval);
                
                // Fade out preloader after a short delay
                setTimeout(() => {
                    gsap.to(preloader, {
                        opacity: 0,
                        duration: 1,
                        ease: "power2.inOut",
                        onComplete: function() {
                            preloader.css('visibility', 'hidden');
                        }
                    });
                }, 500);
            }
            
            // Update progress bar
            if (progressBar.length) {
                gsap.to(progressBar, {
                    width: progress + "%",
                    duration: 0.1,
                    ease: "none"
                });
            }
        }, incrementTime);
    }
    
    // ==================== LOADING SCREEN ====================
    const loadingScreen = $('.loading-screen');
    if (loadingScreen.length) {
        setTimeout(() => {
            anime({
                targets: '.loading-screen',
                opacity: 0,
                duration: 1000,
                easing: 'easeInOutQuad',
                complete: function() {
                    loadingScreen.css('visibility', 'hidden');
                }
            });
        }, 2000);
    }
    
    // ==================== CUSTOM CURSOR ====================
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        if (cursor && cursorFollower) {
            // Position cursor at mouse position
            document.addEventListener('mousemove', (e) => {
                gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: "power2.out"
                });
                
                gsap.to(cursorFollower, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            // Cursor hover effect
            const hoverElements = document.querySelectorAll('a, button, .hero-btn, .bio-btn, .footer-email');
            
            if (hoverElements.length) {
                hoverElements.forEach(element => {
                    element.addEventListener('mouseenter', () => {
                        gsap.to(cursor, {
                            scale: 1.5,
                            backgroundColor: '#fbfbfb',
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                    
                    element.addEventListener('mouseleave', () => {
                        gsap.to(cursor, {
                            scale: 1,
                            backgroundColor: 'transparent',
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                });
            }
            
            // Hide cursor when mouse leaves window
            document.addEventListener('mouseleave', () => {
                gsap.to([cursor, cursorFollower], {
                    opacity: 0,
                    duration: 0.2
                });
            });
            
            // Show cursor when mouse enters window
            document.addEventListener('mouseenter', () => {
                gsap.to([cursor, cursorFollower], {
                    opacity: 1,
                    duration: 0.2
                });
            });
        }
    }
    
    // ==================== MOBILE MENU ====================
    const mobileMenuBtn = $('.mobile-menu-btn');
    const navLinks = $('.nav-links');
    
    if (mobileMenuBtn.length && navLinks.length) {
        mobileMenuBtn.on('click', function() {
            navLinks.slideToggle();
        });
    }
    
    // ==================== SMOOTH SCROLLING ====================
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            
            // Close mobile menu if open
            if ($(window).width() <= 768 && navLinks.length) {
                navLinks.slideUp();
            }
        }
    });
    
    // ==================== HERO SECTION ANIMATIONS ====================
    const heroTitle = $('.hero-title');
    const heroSubtitle = $('.hero-subtitle');
    const heroBtn = $('.hero-btn');
    const heroBottom = $('.hero-bottom');
    
    if (heroTitle.length) {
        anime({
            targets: '.hero-title',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuad',
            delay: 500
        });
    }
    
    if (heroSubtitle.length) {
        anime({
            targets: '.hero-subtitle',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuad',
            delay: 700
        });
    }
    
    if (heroBtn.length) {
        anime({
            targets: '.hero-btn',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuad',
            delay: 900
        });
    }
    
    if (heroBottom.length) {
        anime({
            targets: '.hero-bottom',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuad',
            delay: 1100
        });
    }
    
    // ==================== INTRODUCTION TEXT ANIMATION ====================
    const introTextSpans = $('.intro-text span');
    if (introTextSpans.length) {
        introTextSpans.each(function(index) {
            anime({
                targets: this,
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuad',
                delay: 300 + index * 100
            });
        });
    }
    
    // ==================== BIOGRAPHY SECTION ANIMATION ====================
    const bioSection = $('.bio');
    const bioText = $('.bio-text');
    const bioBtn = $('.bio-btn');
    
    if (bioSection.length && bioText.length && bioBtn.length) {
        const bioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.bio-text',
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutQuad'
                    });
                    
                    anime({
                        targets: '.bio-btn',
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutQuad',
                        delay: 300
                    });
                    
                    bioObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        bioObserver.observe(bioSection[0]);
    }
    
    // ==================== PORTFOLIO SECTION ANIMATION ====================
    const portfolioSection = $('.portfolio');
    const sectionTitle = $('.section-title');
    const portfolioItems = $('.portfolio-item');
    
    if (portfolioSection.length && sectionTitle.length && portfolioItems.length) {
        const portfolioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.section-title',
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutQuad'
                    });
                    
                    portfolioItems.each(function(index) {
                        anime({
                            targets: this,
                            translateY: [30, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            easing: 'easeOutQuad',
                            delay: 300 + index * 150
                        });
                    });
                    
                    portfolioObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        portfolioObserver.observe(portfolioSection[0]);
    }
    
    // ==================== MARQUEE ANIMATIONS ====================
    const marqueeContent = $('.marquee-content');
    if (marqueeContent.length) {
        const marqueeWidth = marqueeContent.width();
        marqueeContent.clone().appendTo('.marquee');
        
        anime({
            targets: '.marquee-content',
            translateX: [0, -marqueeWidth],
            duration: 20000,
            easing: 'linear',
            loop: true
        });
    }
    
    const marqueeContentInvers = $('.marquee-content_invers');
    if (marqueeContentInvers.length) {
        const marqueeInversWidth = marqueeContentInvers.width();
        marqueeContentInvers.clone().appendTo('.marquee_invers');
        
        anime({
            targets: '.marquee-content_invers',
            translateX: [-marqueeInversWidth, 0],
            duration: 20000,
            easing: 'linear',
            loop: true
        });
    }
    
    // ==================== PERSONAL PORTFOLIO SECTION ANIMATION ====================
    const personalPortfolio = $('.personal-portfolio');
    const personalText = $('.personal-text');
    const personalEye = $('.personal-eye');
    
    if (personalPortfolio.length && personalText.length && personalEye.length) {
        const personalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Text animation
                    anime({
                        targets: '.personal-text',
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutQuad'
                    });
                    
                    // Load the Lottie animation
                    const eyeAnimation = lottie.loadAnimation({
                        container: personalEye[0],
                        renderer: 'svg',
                        loop: false,
                        autoplay: false,
                        path: 'assets/js/eye-white-eyeball.json',
                        rendererSettings: {
                            progressiveLoad: true,
                            preserveAspectRatio: 'xMidYMid meet'
                        }
                    });
                    
                    // State variables
                    let isHovered = false;
                    let isPlayingOpening = false;
                    
                    // Start with the eye open (play the opening animation)
                    eyeAnimation.addEventListener('data_ready', function() {
                        eyeAnimation.playSegments([0, 30], true);
                    });
                    
                    // Add hover event listeners
                    personalEye[0].addEventListener('mouseenter', function() {
                        isHovered = true;
                        isPlayingOpening = false;
                        
                        // Play the closing animation (frames 200-232)
                        eyeAnimation.playSegments([200, 232], true);
                    });
                    
                    personalEye[0].addEventListener('mouseleave', function() {
                        isHovered = false;
                        isPlayingOpening = true;
                        
                        // Play the opening animation (frames 0-30)
                        eyeAnimation.playSegments([0, 30], true);
                    });
                    
                    // Handle animation completion
                    eyeAnimation.addEventListener('complete', function() {
                        // If we just finished opening and aren't hovered, start normal blinking
                        if (isPlayingOpening && !isHovered) {
                            isPlayingOpening = false;
                            startNormalBlinking();
                        }
                    });
                    
                    // Function to start normal blinking
                    function startNormalBlinking() {
                        // Play the blinking animation (frames 30-200)
                        eyeAnimation.playSegments([30, 200], true);
                        
                        // Set up random blinks
                        const blinkInterval = setInterval(() => {
                            if (!isHovered) {
                                eyeAnimation.playSegments([30, 50], true); // Blink segment
                            } else {
                                clearInterval(blinkInterval);
                            }
                        }, Math.random() * 3000 + 2000); // Random interval between 2-5 seconds
                    }
                    
                    // Start normal blinking after initial opening
                    eyeAnimation.addEventListener('complete', function() {
                        if (!isHovered) {
                            startNormalBlinking();
                        }
                    });
                    
                    personalObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        personalObserver.observe(personalPortfolio[0]);
    }
    
    // ==================== FOOTER SECTION ANIMATION ====================
    const footer = $('.footer');
    const footerTitle = $('.footer-title');
    const footerSubtitle = $('.footer-subtitle');
    const footerArrow = $('.footer-arrow');
    const footerEmail = $('.footer-email');
    const footerBottom = $('.footer-bottom');
    const arrow = $('.arrow');
    
    if (footer.length && footerTitle.length) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.footer-title',
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutQuad'
                    });
                    
                    if (footerSubtitle.length) {
                        anime({
                            targets: '.footer-subtitle',
                            translateY: [30, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            easing: 'easeOutQuad',
                            delay: 200
                        });
                    }
                    
                    if (footerArrow.length) {
                        anime({
                            targets: '.footer-arrow',
                            translateY: [30, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            easing: 'easeOutQuad',
                            delay: 400
                        });
                    }
                    
                    if (footerEmail.length) {
                        anime({
                            targets: '.footer-email',
                            translateY: [30, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            easing: 'easeOutQuad',
                            delay: 600
                        });
                    }
                    
                    if (footerBottom.length) {
                        anime({
                            targets: '.footer-bottom',
                            translateY: [30, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            easing: 'easeOutQuad',
                            delay: 800
                        });
                    }
                    
                    // Bouncing arrow animation
                    if (arrow.length) {
                        anime({
                            targets: '.arrow',
                            translateY: [0, -10, 0],
                            duration: 2000,
                            easing: 'easeInOutSine',
                            loop: true
                        });
                    }
                    
                    footerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        footerObserver.observe(footer[0]);
    }
    
    // ==================== CIRCULAR TEXT ANIMATION ====================
    const circleText = document.getElementById("circleText");
    const personalCircle = document.querySelector('.personal-circle');
    const personalEyeElement = document.querySelector('.personal-eye');
    
    if (circleText && personalCircle && personalEyeElement) {
        function createCircularText() {
            const text = "- PERSONAL  WORK - PERSONAL  WORK";
            
            // Clear existing content
            circleText.innerHTML = "";
            
            // Get dimensions
            const circleWidth = personalCircle.offsetWidth;
            const circleHeight = personalCircle.offsetHeight;
            const eyeWidth = personalEyeElement.offsetWidth;
            const eyeHeight = personalEyeElement.offsetHeight;
            
            // Calculate radius (distance from center of eye to edge of circle)
            const radius = Math.min(circleWidth, circleHeight) / 2;
            
            // Calculate center position (center of the eye)
            const centerX = circleWidth / 2;
            const centerY = circleHeight / 2;
            
            // Create characters
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const span = document.createElement("span");
                span.textContent = char;
                
                // Calculate angle for this character
                const angle = (i / text.length) * 2 * Math.PI;
                
                // Calculate position on the circle
                const x = centerX + Math.sin(angle) * radius;
                const y = centerY - Math.cos(angle) * radius;
                
                // Position the character
                span.style.position = "absolute";
                span.style.left = `${x}px`;
                span.style.top = `${y}px`;
                span.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
                span.style.transformOrigin = "center center";
                span.style.color = "#fbfbfb";
                span.style.fontFamily = "'Bosch', sans-serif";
                span.style.fontSize = "clamp(10px, 3vw, 17px)";
                span.style.whiteSpace = "nowrap";
                
                circleText.appendChild(span);
            }
        }
        
        // Initialize circular text when DOM is loaded
        createCircularText();
        
        // Recreate circular text on window resize to maintain proper sizing
        let resizeTimeout;
        window.addEventListener("resize", function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(createCircularText, 250);
        });
    }
    
    // ==================== GSAP PARALLAX SECTION TRANSITIONS ====================
    // Hero section parallax
    const heroBg = $('.hero-bg');
    if (heroBg.length) {
        gsap.to(".hero-bg", {
            yPercent: -40,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }
    
    // Portfolio items parallax
    const portfolioItemsForParallax = $('.portfolio-item');
    if (portfolioItemsForParallax.length) {
        gsap.utils.toArray(".portfolio-item").forEach(item => {
            gsap.to(item, {
                yPercent: -15,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
    }
    
    // Bio image parallax
    const bioImage = $('.bio-image');
    if (bioImage.length) {
        gsap.to(".bio-image", {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: ".bio",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }
    
    // Section transitions with parallax
    const sections = $('section');
    if (sections.length) {
        gsap.utils.toArray("section").forEach((section, i) => {
            // Skip hero section as it's handled separately
            if (section.classList.contains('hero')) return;
            
            // Create a timeline for each section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                    toggleActions: "play none none reverse"
                }
            });
            
            // Add parallax effect to the section
            tl.fromTo(section, 
                { yPercent: 10, opacity: 0.7 }, 
                { yPercent: 0, opacity: 1, duration: 1 }
            );
        });
    }
    
    // ==================== GALLERY SECTION ANIMATIONS ====================
    // Section Title Parallax
    const sectionTitles = $('.section-title');
    if (sectionTitles.length) {
        gsap.utils.toArray('.g_section-title').forEach(title => {
            gsap.to(title, {
                xPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: title.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
    }
    
    // Gallery Items Animation
    const galleryItems = $('.gallery-item');
    if (galleryItems.length) {
        gsap.utils.toArray('.gallery-item').forEach((item, index) => {
            // Initial state
            gsap.set(item, {
                opacity: 0,
                y: 50,
                rotation: gsap.utils.random(-3, 3)
            });
            
            // Scroll-triggered animation
            gsap.to(item, {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
            
            // Parallax effect on scroll
            gsap.to(item, {
                yPercent: gsap.utils.random(-20, -40),
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
            
            // Subtle floating animation
            gsap.to(item, {
                y: "+=10",
                duration: 4 + Math.random() * 2,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                delay: index * 0.1
            });
        });
    }
    
    // Staggered rows animation
    const galleryRows = $('.gallery-row');
    if (galleryRows.length) {
        gsap.utils.toArray('.gallery-row').forEach((row, index) => {
            gsap.fromTo(row, 
                { xPercent: index % 2 === 0 ? -5 : 5 },
                { 
                    xPercent: index % 2 === 0 ? 5 : -5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: row,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });
    }
    
    // ==================== LIGHTBOX FUNCTIONALITY ====================
    const lightbox = $('.lightbox');
    const lightboxClose = $('.lightbox-close');
    const lightboxImage = $('.lightbox-image');
    const lightboxTitle = $('.lightbox-title');
    const lightboxCategory = $('.lightbox-category');
    
    if (lightbox.length && lightboxClose.length && lightboxImage.length && 
        lightboxTitle.length && lightboxCategory.length && galleryItems.length) {
        
        galleryItems.on('click', function() {
            const imgSrc = $(this).find('img').attr('src');
            const title = $(this).find('.gallery-item-title').text();
            const category = $(this).find('.gallery-item-category').text();
            
            lightboxImage.attr('src', imgSrc);
            lightboxTitle.text(title);
            lightboxCategory.text(category);
            lightbox.addClass('active');
            
            // Animate lightbox appearance
            gsap.fromTo('.lightbox-content', 
                { scale: 0.8, opacity: 0 }, 
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
            );
        });
        
        // Close Lightbox
        lightboxClose.on('click', function() {
            lightbox.removeClass('active');
        });
        
        // Close lightbox when clicking outside the image
        lightbox.on('click', function(e) {
            if (e.target === lightbox[0]) {
                lightbox.removeClass('active');
            }
        });
    }
    
    // ==================== WINDOW RESIZE HANDLER ====================
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });
});