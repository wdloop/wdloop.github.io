gsap.registerPlugin(ScrollTrigger);

// repeat first three items by cloning them and appending them to the .grid
const repeatItems = (parentEl, total = 0) => {
    const items = [...parentEl.children];
    for (let i = 0; i <= total-1; ++i) {
        var cln = items[i].cloneNode(true);
        parentEl.appendChild(cln);
    }
};

const lenis = new Lenis({
    smooth: true,
    infinite: true
});

lenis.on('scroll',()=>{
  ScrollTrigger.update()
})

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

// In your index.js, update the ScrollTrigger animations to work with the carousel
imagesLoaded( document.querySelectorAll('.grid__item'), { background: true }, () => {
    document.body.classList.remove('loading');
    repeatItems(document.querySelector('.grid'), 1);
    const items = [...document.querySelectorAll('.grid__item')];
    
    // first item
    const firstItem = items[0];
    gsap.set(firstItem, {transformOrigin: '50% 100%'})
    gsap.to(firstItem, {
        ease: 'none',
        startAt: {scaleY: 1},
        scaleY: 0,
        scrollTrigger: {
            trigger: firstItem,
            start: 'center center',
            end: 'bottom top',
            scrub: true,
            fastScrollEnd: true,
            onLeave: () => {
                gsap.set(firstItem, {scaleY: 1,})
            },
        }
    });
    
    // last item  
    const lastItem = items[2];
    gsap.set(lastItem, {transformOrigin: '50% 0%', scaleY: 0})
    gsap.to(lastItem, {
        ease: 'none',
        startAt: {scaleY: 0},
        scaleY: 1,
        scrollTrigger: {
            trigger: lastItem,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            fastScrollEnd: true,
            onLeaveBack: () => {
                gsap.set(lastItem, {scaleY: 1})
            }
        }
    });
    
    // in between - the carousel item
    let ft;
    let st;
    const middleItem = items[1];
        
    ft = gsap.timeline()
    .to(middleItem, {
        ease: 'none',
        onStart: () => {
            if (st) st.kill()
        },
        startAt: {scale: 0},
        scale: 1,
        scrollTrigger: {
            trigger: middleItem,
            start: 'top bottom',
            end: 'center center',
            scrub: true,
            onEnter: () => gsap.set(middleItem, {transformOrigin: '50% 0%'}),
            onEnterBack: () => gsap.set(middleItem, {transformOrigin: '50% 0%'}),
            onLeave: () => gsap.set(middleItem, {transformOrigin: '50% 100%'}),
            onLeaveBack: () => gsap.set(middleItem, {transformOrigin: '50% 100%'}),
        },
    });
    st = gsap.timeline()
    .to(middleItem, {
        ease: 'none',
        onStart: () => {
            if (ft) ft.kill()
        },
        startAt: {scale: 1},
        scale: 0,
        scrollTrigger: {
            trigger: middleItem,
            start: 'center center',
            end: 'bottom top',
            scrub: true,
            onEnter: () => gsap.set(middleItem, {transformOrigin: '50% 100%'}),
            onEnterBack: () => gsap.set(middleItem, {transformOrigin: '50% 100%'}),
            onLeave: () => gsap.set(middleItem, {transformOrigin: '50% 0%'}),
            onLeaveBack: () => gsap.set(middleItem, {transformOrigin: '50% 0%'}),
        },
    });
    
    requestAnimationFrame(raf);
    
    const refresh = () => {
        ScrollTrigger.clearScrollMemory();
        window.history.scrollRestoration = 'manual';
        ScrollTrigger.refresh(true);
    }
    refresh();
    window.addEventListener('resize', refresh);
});

// Add this after your existing JavaScript code

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    // Create indicators
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    const indicators = document.querySelectorAll('.indicator');
    
    // Update carousel position
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play carousel (optional)
    let autoplayInterval = setInterval(nextSlide, 5000);
    
    // Pause autoplay when hovering over carousel
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    // Resume autoplay when mouse leaves
    carousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }
});