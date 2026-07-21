/**
 * MAREK WIETECHA - QUALITY INSPECTOR & METROLOGY SPECIALIST
 * Enterprise Core Script & Interactive Logic
 *
 * Features:
 * - Dynamic Certificate Filtering & Search
 * - Animated Numeric Counters (IntersectionObserver)
 * - Timeline Card Expansion & Accessibility Focus Management
 * - Interactive Mobile Navigation & Smooth Scroll
 * - Multi-language State Persistence
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* ==========================================================================
       1. INITIALIZATION & CORE APP STATE
       ========================================================================== */
    const App = {
        init() {
            this.initNavigation();
            this.initCounters();
            this.initCertificateFilters();
            this.initTimeline();
            this.initScrollEffects();
            this.initAccessibility();
        },

        /* ==========================================================================
           2. NAVIGATION & MOBILE MENU
           ========================================================================== */
        initNavigation() {
            const navbar = document.querySelector('.nav');
            const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
            const navLinks = document.querySelectorAll('.links a');

            // Scroll Header State
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar?.classList.add('scrolled');
                } else {
                    navbar?.classList.remove('scrolled');
                }
            }, { passive: true });

            // Mobile Menu Toggle
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', () => {
                    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
                    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
                    document.body.classList.toggle('menu-open');
                });
            }

            // Close Mobile Menu on Link Click & Active Link Highlight
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    document.body.classList.remove('menu-open');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    }

                    // Smooth Scroll handling
                    const targetId = link.getAttribute('href');
                    if (targetId && targetId.startsWith('#')) {
                        e.preventDefault();
                        const targetSection = document.querySelector(targetId);
                        if (targetSection) {
                            const navHeight = navbar?.offsetHeight || 72;
                            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
                            
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
        },

        /* ==========================================================================
           3. ANIMATED COUNTERS (STATS SECTION)
           ========================================================================== */
        initCounters() {
            const statNumbers = document.querySelectorAll('.stat-number');
            if (!statNumbers.length) return;

            const animateCounter = (counter) => {
                const target = parseInt(counter.getAttribute('data-target') || '0', 10);
                const duration = 2000; // ms
                const stepTime = 20; // ms
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.ceil(current) + '+';
                    }
                }, stepTime);
            };

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            statNumbers.forEach(stat => observer.observe(stat));
        },

        /* ==========================================================================
           4. CERTIFICATES FILTERING & SEARCH SYSTEM
           ========================================================================== */
        initCertificateFilters() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const searchInput = document.getElementById('cert-search');
            const certCards = document.querySelectorAll('.cert-card');

            if (!certCards.length) return;

            const filterCertificates = () => {
                const activeCategory = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
                const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

                certCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category') || '';
                    const cardTitle = card.querySelector('h3')?.textContent.toLowerCase() || '';
                    const cardIssuer = card.querySelector('.cert-issuer')?.textContent.toLowerCase() || '';

                    const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
                    const matchesSearch = cardTitle.includes(searchQuery) || cardIssuer.includes(searchQuery);

                    if (matchesCategory && matchesSearch) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(10px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 200);
                    }
                });
            };

            // Category Button Click
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    filterCertificates();
                });
            });

            // Search Input Event
            if (searchInput) {
                searchInput.addEventListener('input', filterCertificates);
            }
        },

        /* ==========================================================================
           5. INTERACTIVE TIMELINE (EXPANDABLE CARDS)
           ========================================================================== */
        initTimeline() {
            const timelineToggles = document.querySelectorAll('.timeline-expand-btn');

            timelineToggles.forEach(btn => {
                btn.addEventListener('click', () => {
                    const card = btn.closest('.timeline-card');
                    const details = card?.querySelector('.timeline-details');
                    
                    if (details) {
                        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
                        btn.setAttribute('aria-expanded', !isExpanded);
                        details.classList.toggle('active');

                        if (!isExpanded) {
                            btn.textContent = btn.getAttribute('data-text-less') || 'Hide Details';
                        } else {
                            btn.textContent = btn.getAttribute('data-text-more') || 'Show Details';
                        }
                    }
                });
            });
        },

        /* ==========================================================================
           6. SCROLL REVEAL & INTERACTION EFFECTS
           ========================================================================== */
        initScrollEffects() {
            const revealElements = document.querySelectorAll('.glass, .card, .stat-card, .timeline-item');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, { threshold: 0.1 });

            revealElements.forEach(el => {
                el.classList.add('reveal-init');
                observer.observe(el);
            });
        },

        /* ==========================================================================
           7. ACCESSIBILITY ENHANCEMENTS
           ========================================================================== */
        initAccessibility() {
            // Keyboard navigation enhancement for custom interactive elements
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    document.body.classList.remove('menu-open');
                    const mobileBtn = document.querySelector('.mobile-menu-toggle');
                    if (mobileBtn) {
                        mobileBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        }
    };

    // Execute application logic
    App.init();
});
