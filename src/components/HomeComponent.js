class HomeComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="home" class="py-5 blue-section">
                <div class="container">
                    <div class="floating-emoji">🌊</div>
                    <div class="floating-emoji">⛵</div>
                    <div class="floating-emoji">🏖️</div>
                    <div class="floating-emoji">🌅</div>

                    <div class="row justify-content-center align-items-center hero-section">
                        <div class="col-lg-8 text-center text-white">
                            <h1 class="display-2 fw-bold mb-4">Pierre Nogaro</h1>
                            <p class="lead mb-4">Développeur Web & Designer</p>
                            <p class="mb-4">🌊 Donnez vie à vos projets web avec un développeur passionné de Lyon 🌊</p>
                            <a href="#about" class="btn btn-mediterranean btn-lg">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                .blue-section {
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%);
                    position: relative;
                    overflow: hidden;
                    padding: 4rem 0 !important;
                }

                .hero-section {
                    min-height: 60vh;
                }

                .floating-emoji {
                    position: absolute;
                    font-size: 1.5rem;
                    animation: float 6s ease-in-out infinite;
                    opacity: 0.6;
                }

                .floating-emoji:nth-child(1) { top: 20%; left: 15%; }
                .floating-emoji:nth-child(2) { top: 30%; right: 20%; animation-delay: 1s; }
                .floating-emoji:nth-child(3) { top: 60%; left: 25%; animation-delay: 2s; }
                .floating-emoji:nth-child(4) { top: 70%; right: 15%; animation-delay: 3s; }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-20px) rotate(5deg); }
                    50% { transform: translateY(-10px) rotate(-5deg); }
                    75% { transform: translateY(-15px) rotate(3deg); }
                }

                .btn-mediterranean {
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    border: none;
                    color: white;
                    font-weight: 600;
                }

                .btn-mediterranean:hover {
                    background: linear-gradient(45deg, #ff5252, #26a69a);
                    transform: translateY(-2px);
                }
            </style>
        `;
    }
}

customElements.define('home-component', HomeComponent);
