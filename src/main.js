import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './components/NavComponent.js'
import './components/HomeComponent.js'
import './components/AboutComponent.js'
import './components/SkillsComponent.js'

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-section h1', {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: 'power2.out'
    });

    gsap.fromTo('#about .col-lg-6',
        {
            opacity: 0,
            x: -100
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#about',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    gsap.fromTo('.about-border',
        {
            opacity: 0,
            scale: 0.8,
            rotation: -5
        },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.about-border',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    gsap.fromTo('.skill-card',
        {
            opacity: 0,
            scale: 0.8,
            y: 100
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 70%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    gsap.fromTo('h2',
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: 'h2',
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});