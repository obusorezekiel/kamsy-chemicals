// ============================================
// Amanda Group Style - Main JavaScript
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

    if (portfolioCarousel && portfolioCards.length > 0) {
        const gap = 30;
        let currentPosition = 0;

        function getScrollAmount() {
            if (portfolioCards[0]) {
                return portfolioCards[0].offsetWidth + gap;
            }
            return 410; // fallback
        }

        // Next button
        if (portfolioNextBtn) {
            portfolioNextBtn.addEventListener('click', function() {
                const scrollAmount = getScrollAmount();
                currentPosition += scrollAmount;
                const maxScroll = portfolioCarousel.scrollWidth - portfolioCarousel.clientWidth;
                if (currentPosition > maxScroll) {
                    currentPosition = maxScroll;
                }
                portfolioCarousel.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
            });
        }

        // Previous button
        if (portfolioPrevBtn) {
            portfolioPrevBtn.addEventListener('click', function() {
                const scrollAmount = getScrollAmount();
                currentPosition -= scrollAmount;
                if (currentPosition < 0) {
                    currentPosition = 0;
                }
                portfolioCarousel.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
            });
        }

        // Update position on scroll
        portfolioCarousel.addEventListener('scroll', function() {
            currentPosition = portfolioCarousel.scrollLeft;
        });
    }

    // Insights Carousel Auto-Slide Functionality
    const insightsCarousel = document.getElementById('insightsCarousel');
    const insightCards = document.querySelectorAll('.insight-card');
    
    if (insightsCarousel && insightCards.length > 0) {
        let currentInsightIndex = 0;
        const gap = 30;
        let insightsInterval;
        let isPaused = false;
        
        function getCardWidth() {
            if (insightCards[0]) {
                return insightCards[0].offsetWidth;
            }
            return 350; // fallback
        }

        function slideInsights() {
            if (isPaused) return;
            
            currentInsightIndex++;
            const maxIndex = insightCards.length - 1;
            const cardWidth = getCardWidth();
            const scrollAmount = cardWidth + gap;
            
            // If we've reached the end, reset to beginning
            if (currentInsightIndex > maxIndex) {
                currentInsightIndex = 0;
                insightsCarousel.style.transition = 'none';
                insightsCarousel.style.transform = 'translateX(0)';
                // Force reflow
                void insightsCarousel.offsetWidth;
                insightsCarousel.style.transition = 'transform 0.6s ease';
            }
            
            const translateX = -currentInsightIndex * scrollAmount;
            insightsCarousel.style.transform = `translateX(${translateX}px)`;
        }

        // Start auto-sliding every 3.5 seconds
        function startInsightsCarousel() {
            insightsInterval = setInterval(slideInsights, 3500);
        }

        function stopInsightsCarousel() {
            clearInterval(insightsInterval);
        }

        // Pause on hover
        const insightsSection = document.querySelector('.insights-section');
        if (insightsSection) {
            insightsSection.addEventListener('mouseenter', function() {
                isPaused = true;
            });
            insightsSection.addEventListener('mouseleave', function() {
                isPaused = false;
            });
        }

        // Initialize carousel
        startInsightsCarousel();
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
    const animatedSections = document.querySelectorAll('.about-section, .portfolio-section, .management-section, .insights-section, .about-story-section, .brands-section, .contact-section-new, .map-section-new, .services-section, .service-process');
    
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
