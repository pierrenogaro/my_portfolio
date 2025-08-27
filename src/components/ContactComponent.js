class ContactComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="contact" class="py-5 contact-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h2 class="display-5 text-white fw-bold" style="font-size: 2.5rem;">Contactez-moi</h2>
                            <div class="title-underline-contact"></div>
                            <p class="text-white mb-5">
                                Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter ! <br>
                                Je serais ravi d'échanger avec vous sur vos idées et de voir comment je peux vous aider.
                            </p>
                        </div>
                    </div>
                    
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="contact-form-container">
                                <form id="contactForm" class="contact-form">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="name" class="form-label">Nom complet *</label>
                                                <input type="text" class="form-control" id="name" name="name" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="email" class="form-label">Email *</label>
                                                <input type="email" class="form-control" id="email" name="email" required>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="subject" class="form-label">Sujet *</label>
                                                <select class="form-control" id="subject" name="subject" required>
                                                    <option value="">Choisissez un sujet</option>
                                                    <option value="projet">Projet web</option>
                                                    <option value="freelance">Mission freelance</option>
                                                    <option value="collaboration">Collaboration</option>
                                                    <option value="question">Question générale</option>
                                                    <option value="autre">Autre</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="budget" class="form-label">Budget (optionnel)</label>
                                                <select class="form-control" id="budget" name="budget">
                                                    <option value="">Sélectionnez un budget</option>
                                                    <option value="petit">Petit budget (< 1000€)</option>
                                                    <option value="moyen">Budget moyen (1000€ - 5000€)</option>
                                                    <option value="important">Budget important (> 5000€)</option>
                                                    <option value="discussion">À discuter</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group mb-4">
                                        <label for="message" class="form-label">Message *</label>
                                        <textarea class="form-control" id="message" name="message" rows="5" placeholder="Décrivez votre projet ou votre demande..." required></textarea>
                                    </div>
                                    
                                    <div class="text-center">
                                        <div class="form-notice">
                                            <div class="notice-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                            <h4>Fonctionnalité en développement</h4>
                                            <p>Le formulaire de contact est actuellement en cours de programmation. En attendant, vous pouvez me contacter directement :</p>
                                            <div class="contact-alternatives">
                                                <a href="mailto:pierre.nogaro@gmail.com" class="contact-alternative">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    pierre.nogaro@gmail.com
                                                </a>
                                                <a href="https://www.linkedin.com/in/pierre-nogaro/" target="_blank" class="contact-alternative">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                    </svg>
                                                    LinkedIn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            <div class="contact-cards mt-5">
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="contact-card">
                                            <div class="contact-icon">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </div>
                                            <h3>LinkedIn</h3>
                                            <p>Connectez-vous avec moi professionnellement</p>
                                            <a href="https://www.linkedin.com/in/pierre-nogaro/" target="_blank" class="contact-btn">
                                                Voir mon profil
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 mb-4">
                                        <div class="contact-card">
                                            <div class="contact-icon">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </div>
                                            <h3>GitHub</h3>
                                            <p>Découvrez mes projets et contributions</p>
                                            <a href="https://github.com/pierrenogaro" target="_blank" class="contact-btn">
                                                Voir mes projets
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </section>

            <style>
                .contact-section {
                    background: rgba(53,110,177,0.65);
                    color: #333;
                    position: relative;
                    z-index: 20;
                }

                .title-underline-contact {
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    margin: 0 auto 2rem auto;
                    border-radius: 2px;
                }

                .contact-cards {
                    margin-top: 3rem;
                }

                .contact-card {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    padding: 2.5rem 2rem;
                    text-align: center;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                    height: 100%;
                }

                .contact-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                    background: rgba(255, 255, 255, 0.15);
                }

                .contact-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem auto;
                    color: white;
                }

                .contact-card h3 {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .contact-card p {
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }

                .contact-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    color: white;
                    text-decoration: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 25px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }

                .contact-btn:hover {
                    background: linear-gradient(45deg, #ff5252, #26a69a);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    color: white;
                    text-decoration: none;
                }

                .contact-info {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 15px;
                    padding: 2rem;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                /* Styles du formulaire */
                .contact-form-container {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    padding: 2.5rem;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    margin-bottom: 3rem;
                }

                .form-label {
                    color: white;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                }

                .form-control {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 10px;
                    color: white;
                    padding: 0.75rem 1rem;
                    transition: all 0.3s ease;
                }

                .form-control:focus {
                    background: rgba(255, 255, 255, 0.15);
                    border-color: #4ecdc4;
                    box-shadow: 0 0 0 0.2rem rgba(78, 205, 196, 0.25);
                    color: white;
                }

                .form-control::placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }

                .form-control option {
                    background: #1a1a2e;
                    color: white;
                }

                .form-notice {
                    background: rgba(255, 193, 7, 0.1);
                    border: 1px solid rgba(255, 193, 7, 0.3);
                    border-radius: 15px;
                    padding: 2rem;
                    margin-top: 1rem;
                }

                .notice-icon {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(45deg, #ffc107, #ff9800);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem auto;
                    color: white;
                }

                .form-notice h4 {
                    color: #ffc107;
                    font-size: 1.3rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .form-notice p {
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }

                .contact-alternatives {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                }

                .contact-alternative {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    color: white;
                    text-decoration: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 25px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    min-width: 200px;
                    justify-content: center;
                }

                .contact-alternative:hover {
                    background: linear-gradient(45deg, #ff5252, #26a69a);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    color: white;
                    text-decoration: none;
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                @media (max-width: 768px) {
                    .contact-card {
                        padding: 2rem 1.5rem;
                    }
                    
                    .contact-icon {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .contact-icon svg {
                        width: 24px;
                        height: 24px;
                    }

                    .contact-form-container {
                        padding: 2rem 1.5rem;
                    }
                }
            </style>
        `;
    }
}

customElements.define('contact-component', ContactComponent);
