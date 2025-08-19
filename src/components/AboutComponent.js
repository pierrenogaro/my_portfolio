class AboutComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="about" class="py-5 white-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h2 class="display-5 text-white fw-bold" style="font-size: 2.5rem;">Les présentations</h2>
                            <div class="title-underline-about"></div>
                            <p class="text-white">
                                Hello ! Moi, c'est Pierre, j'ai 21 ans et je suis étudiant en Bachelor Développement Web à l'ESD. <br>
                                Actuellement en alternance dans une entreprise qui révolutionne la location de photomatons connectés, je travaille en tant que développeur web, où je crée des solutions digitales innovantes et sur mesure. <br>
                                Mon parcours m'a permis de découvrir ma passion pour le web : après des expériences en communication visuelle au lycée et plusieurs stages enrichissants, j'ai choisi d'allier créativité et programmation pour donner vie à des projets qui mêlent esthétique et technique. <br>
                                Curieux d'en savoir plus ? Je vous invite à explorer mon portfolio et découvrir mes réalisations !
                            </p>
                            <div class="mt-5">
                                <a href="#skills" class="btn-continue">
                                    Continuer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                .white-section {
                    background: rgba(53,110,177,0.65);
                    color: #333;
                    position: relative;
                    z-index: 20;
                }

                .about-border {
                    border: 3px solid #4ecdc4;
                    border-radius: 20px;
                    position: relative;
                    z-index: 25;
                }

                .title-underline-about {
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    margin: 0 auto 2rem auto;
                    border-radius: 2px;
                }

                .text-white br {
                    display: block;
                    content: "";
                    margin-top: 1.5rem;
                }

                .btn-continue {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    color: white;
                    text-decoration: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                }

                .btn-continue:hover {
                    background: linear-gradient(45deg, #ff5252, #26a69a);
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
                    color: white;
                }


            </style>
        `;
    }
}

customElements.define('about-component', AboutComponent);
