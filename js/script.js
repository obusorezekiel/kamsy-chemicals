// ============================================
// Kamsy Chemicals & Allied Products Ltd - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Hero Carousel Functionality
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const heroPrevBtn = document.getElementById('heroPrevBtn');
    const heroNextBtn = document.getElementById('heroNextBtn');
    let currentSlide = 0;
    let carouselInterval;

    function showSlide(index) {
        // Remove active class from all slides
        carouselSlides.forEach(slide => slide.classList.remove('active'));

        // Add active class to current slide
        if (carouselSlides[index]) {
            carouselSlides[index].classList.add('active');
        }

        // Handle text transitions
        const heroTextSlides = document.querySelectorAll('.hero-text-slide');
        heroTextSlides.forEach((textSlide, i) => {
            if (i === index) {
                textSlide.classList.add('active');
            } else {
                textSlide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(currentSlide);
    }

    // Auto-play carousel
    function startCarousel() {
        carouselInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    // Initialize carousel
    if (carouselSlides.length > 0) {
        showSlide(0);
        startCarousel();

        // Hero Next button
        if (heroNextBtn) {
            heroNextBtn.addEventListener('click', function() {
                stopCarousel();
                nextSlide();
                startCarousel();
            });
        }

        // Hero Previous button
        if (heroPrevBtn) {
            heroPrevBtn.addEventListener('click', function() {
                stopCarousel();
                prevSlide();
                startCarousel();
            });
        }

        // Pause on hover
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopCarousel);
            heroSection.addEventListener('mouseleave', startCarousel);
        }
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Top Bar Hide on Scroll - Only show when at header
    const topBar = document.querySelector('.top-bar');
    const headerHeight = 145; // Top bar (45px) + Header (100px)
    let ticking = false;

    if (topBar) {
        function updateTopBar() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Show top bar only when at the top (within header area)
            // Hide once scrolled past the header
            if (scrollTop <= headerHeight) {
                topBar.classList.remove('top-bar-hidden');
                document.body.classList.remove('top-bar-hidden');
            } else {
                topBar.classList.add('top-bar-hidden');
                document.body.classList.add('top-bar-hidden');
            }
            
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateTopBar);
                ticking = true;
            }
        }, { passive: true });
        
        // Initial check
        updateTopBar();
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // Portfolio Carousel Functionality
    const portfolioCarousel = document.getElementById('portfolioCarousel');
    const portfolioPrevBtn = document.getElementById('portfolioPrevBtn');
    const portfolioNextBtn = document.getElementById('portfolioNextBtn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    let portfolioInterval;

    if (portfolioCarousel && portfolioCards.length > 0) {
        const gap = 30;
        let currentPosition = 0;
        let isAutoScrolling = true;

        function getScrollAmount() {
            if (portfolioCards[0]) {
                return portfolioCards[0].offsetWidth + gap;
            }
            return 410; // fallback
        }

        function scrollToNext() {
            const scrollAmount = getScrollAmount();
            const maxScroll = portfolioCarousel.scrollWidth - portfolioCarousel.clientWidth;
            
            currentPosition += scrollAmount;
            
            // Check if we've reached or passed the end
            if (currentPosition >= maxScroll - 10) { // Small buffer for smooth transition
                // Smoothly reset to beginning
                currentPosition = 0;
                portfolioCarousel.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                portfolioCarousel.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
            }
        }

        function startPortfolioCarousel() {
            if (isAutoScrolling) {
                portfolioInterval = setInterval(scrollToNext, 2500); // Auto-slide every 2.5 seconds
            }
        }

        function stopPortfolioCarousel() {
            clearInterval(portfolioInterval);
        }

        // Next button
        if (portfolioNextBtn) {
            portfolioNextBtn.addEventListener('click', function() {
                stopPortfolioCarousel();
                const scrollAmount = getScrollAmount();
                const maxScroll = portfolioCarousel.scrollWidth - portfolioCarousel.clientWidth;
                
                currentPosition += scrollAmount;
                if (currentPosition >= maxScroll - 10) {
                    currentPosition = 0; // Loop back to start
                }
                
                portfolioCarousel.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
                // Restart auto-scroll after 3 seconds
                setTimeout(startPortfolioCarousel, 3000);
            });
        }

        // Previous button
        if (portfolioPrevBtn) {
            portfolioPrevBtn.addEventListener('click', function() {
                stopPortfolioCarousel();
                const scrollAmount = getScrollAmount();
                const maxScroll = portfolioCarousel.scrollWidth - portfolioCarousel.clientWidth;
                
                currentPosition -= scrollAmount;
                if (currentPosition < 0) {
                    currentPosition = maxScroll; // Loop to end
                }
                
                portfolioCarousel.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
                // Restart auto-scroll after 3 seconds
                setTimeout(startPortfolioCarousel, 3000);
            });
        }

        // Pause on hover
        const portfolioSection = document.querySelector('.portfolio-section');
        if (portfolioSection) {
            portfolioSection.addEventListener('mouseenter', function() {
                stopPortfolioCarousel();
            });
            portfolioSection.addEventListener('mouseleave', function() {
                startPortfolioCarousel();
            });
        }

        // Update position on scroll
        portfolioCarousel.addEventListener('scroll', function() {
            currentPosition = portfolioCarousel.scrollLeft;
        });

        // Start auto-scrolling
        startPortfolioCarousel();
    }

    // Products Showcase Carousel Auto-Slide Functionality
    const productsShowcaseCarousel = document.getElementById('productsShowcaseCarousel');
    const productShowcaseCards = document.querySelectorAll('.product-showcase-card');
    let productsShowcaseInterval;

    if (productsShowcaseCarousel && productShowcaseCards.length > 0) {
        const gap = 30;
        let currentPosition = 0;
        let isAutoScrolling = true;

        function getScrollAmount() {
            if (productShowcaseCards[0]) {
                return productShowcaseCards[0].offsetWidth + gap;
            }
            return 380; // fallback (350px card + 30px gap)
        }

        function scrollToNext() {
            const scrollAmount = getScrollAmount();
            const maxScroll = productsShowcaseCarousel.scrollWidth - productsShowcaseCarousel.clientWidth;
            
            currentPosition += scrollAmount;
            
            // Check if we've reached or passed the end
            if (currentPosition >= maxScroll - 10) { // Small buffer for smooth transition
                // Smoothly reset to beginning
                currentPosition = 0;
                productsShowcaseCarousel.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                productsShowcaseCarousel.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
            }
        }

        function startProductsShowcaseCarousel() {
            if (isAutoScrolling) {
                productsShowcaseInterval = setInterval(scrollToNext, 2500); // Auto-slide every 2.5 seconds
            }
        }

        function stopProductsShowcaseCarousel() {
            clearInterval(productsShowcaseInterval);
        }

        // Pause on hover
        const productsShowcaseSection = document.querySelector('.products-showcase-section');
        if (productsShowcaseSection) {
            productsShowcaseSection.addEventListener('mouseenter', function() {
                stopProductsShowcaseCarousel();
            });
            productsShowcaseSection.addEventListener('mouseleave', function() {
                startProductsShowcaseCarousel();
            });
        }

        // Update position on scroll
        productsShowcaseCarousel.addEventListener('scroll', function() {
            currentPosition = productsShowcaseCarousel.scrollLeft;
        });

        // Start auto-scrolling
        startProductsShowcaseCarousel();
    }

    // Footer Top Carousel
    const footerTopSlides = document.querySelectorAll('.footer-top-slide');
    
    if (footerTopSlides.length > 0) {
        let currentFooterSlide = 0;
        let footerCarouselInterval;
        let isPausedFooter = false;

        function showFooterTopSlide(index) {
            footerTopSlides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextFooterTopSlide() {
            if (!isPausedFooter) {
                currentFooterSlide = (currentFooterSlide + 1) % footerTopSlides.length;
                showFooterTopSlide(currentFooterSlide);
            }
        }

        // Start auto-sliding every 5 seconds (slow)
        function startFooterTopCarousel() {
            if (footerCarouselInterval) {
                clearInterval(footerCarouselInterval);
            }
            footerCarouselInterval = setInterval(nextFooterTopSlide, 5000);
        }

        // Initialize - ensure first slide is active
        setTimeout(function() {
            showFooterTopSlide(0);
            startFooterTopCarousel();
        }, 100);

        // Pause on hover
        const footerTop = document.querySelector('.footer-top');
        if (footerTop) {
            footerTop.addEventListener('mouseenter', function() {
                isPausedFooter = true;
                if (footerCarouselInterval) {
                    clearInterval(footerCarouselInterval);
                }
            });
            footerTop.addEventListener('mouseleave', function() {
                isPausedFooter = false;
                startFooterTopCarousel();
            });
        }
    }

    // Products Page Navigation
    const productNavItems = document.querySelectorAll('.product-nav-item');
    const productContentPanels = document.querySelectorAll('.product-content-panel');

    if (productNavItems.length > 0 && productContentPanels.length > 0) {
        productNavItems.forEach(item => {
            item.addEventListener('click', function() {
                const productId = this.getAttribute('data-product');
                
                // Remove active class from all nav items
                productNavItems.forEach(navItem => navItem.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');

                // Hide all content panels
                productContentPanels.forEach(panel => panel.classList.remove('active'));

                // Show selected content panel
                const selectedPanel = document.getElementById(productId);
                if (selectedPanel) {
                    selectedPanel.classList.add('active');
                    // Scroll to top of content area
                    const productsContent = document.querySelector('.products-content');
                    if (productsContent) {
                        productsContent.scrollTop = 0;
                    }
                }
            });
        });
    }

    // Section Scroll Animations
    const animatedSections = document.querySelectorAll('.about-section, .portfolio-section, .management-section, .insights-section, .about-story-section, .brands-section, .contact-section-new, .map-section-new, .services-section, .service-process, .leadership-section, .mission-values-section, .business-services-section, .team-section, .partners-section, .clientele-section, .hse-section, .bop-section');
    
    if (animatedSections.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedSections.forEach(section => {
            section.classList.add('animate-section');
            observer.observe(section);
        });
    }

    // Animate cards and items within sections
    const animatedCards = document.querySelectorAll('.portfolio-card, .insight-card, .profile-card, .brand-card, .service-card, .gallery-item');
    
    if (animatedCards.length > 0) {
        const cardObserverOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -30px 0px'
        };

        const cardObserver = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-fade-in');
                    }, index * 100); // Stagger animation
                    cardObserver.unobserve(entry.target);
                }
            });
        }, cardObserverOptions);

        animatedCards.forEach(card => {
            card.classList.add('animate-section');
            cardObserver.observe(card);
        });
    }
});
