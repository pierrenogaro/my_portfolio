class HomeComponent extends HTMLElement {
    connectedCallback() {
        this.render();
        this.initParticles();
    }

    render() {
        this.innerHTML = `
            <section id="home" class="py-5 particles-section">
                <div id="particles-js" class="particles-container"></div>
                
                <div class="container content-container">
                    <div class="row justify-content-center align-items-center hero-section">
                        <div class="col-lg-8 text-center text-white">
                            <h1 class="display-2 fw-bold mb-4">Vous recherchez un développeur web ?</h1>
                            <div class="title-underline"></div>
                            <p class="lead">Étudiant en 3ᵉ année d'alternance et passionné par le web & le design, je serais ravi de mettre mes compétences et mon énergie au service de votre projet.</p>
                            <a href="#about" class="scroll-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                .particles-section {
                    position: relative;
                    overflow: hidden;
                    padding: 4rem 0;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    background: linear-gradient(135deg, var(--bg-dark-1) 0%, var(--bg-dark-2) 50%, var(--bg-dark-3) 100%);
                }

                .particles-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    pointer-events: none;
                }

                .content-container {
                    position: relative;
                    z-index: 10;
                    pointer-events: auto;
                }

                .hero-section {
                    min-height: 60vh;
                    position: relative;
                    z-index: 10;
                }

                .btn-theme {
                    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
                    border: none;
                    color: white;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .btn-theme:hover {
                    background: linear-gradient(45deg, var(--color-primary-dark), var(--color-secondary-dark));
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px var(--transparent-black-20);
                }

                .title-underline {
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
                    margin: 0 auto 2rem auto;
                    border-radius: 2px;
                }

                .scroll-arrow {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
                    border-radius: 50%;
                    color: white;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    margin-top: 2rem;
                }

                .scroll-arrow:hover {
                    background: linear-gradient(45deg, var(--color-primary-dark), var(--color-secondary-dark));
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px var(--transparent-black-30);
                    color: white;
                }





                @media (max-width: 768px) {
                    .particles-section {
                        min-height: 80vh;
                    }
                }
            </style>
        `;
    }

    async initParticles() {
        try {
            await tsParticles.load("particles-js", {
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#fff8f0"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#fff8f0",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: false,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        } catch (error) {
            console.error("Erreur lors du chargement des particules:", error);
        }
    }
}

customElements.define('home-component', HomeComponent);
