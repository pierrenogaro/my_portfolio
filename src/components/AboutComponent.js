class AboutComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="about" class="py-5">
                <div class="container">
                <div class="row justify-content-center align-items-center min-vh-100">
                        <div class="col-lg-8 text-center text-white">
                            <h1 class="display-2 fw-bold mb-4 animate-fade-in">Pierre Nogaro</h1>
                            <p class="lead mb-4 animate-fade-in-delay">Développeur Web & Designer</p>
                            <a href="#about" class="btn btn-primary btn-lg animate-fade-in-delay-2">En savoir plus</a>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <img src="./assets/pierre-photo.jpg" alt="Pierre Nogaro" 
                                 class="img-fluid rounded shadow hover-zoom">
                        </div>
                        <div class="col-lg-6 text-white">
                            <h2 class="mb-4 display-5">À propos de moi</h2>
                            <p class="lead mb-4">
                                Passionné par le développement web et le design, 
                                je crée des expériences digitales modernes et intuitives.
                            </p>
                            <p class="mb-4">
                                Spécialisé en JavaScript, React, et technologies web modernes,
                                j'accompagne mes clients dans la réalisation de leurs projets digitaux.
                            </p>
                            <div class="row">
                                <div class="col-6">
                                    <h5>🚀 Technologies</h5>
                                    <ul class="list-unstyled">
                                        <li>• JavaScript / TypeScript</li>
                                        <li>• React / Vue.js</li>
                                        <li>• Node.js</li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <h5>🎨 Design</h5>
                                    <ul class="list-unstyled">
                                        <li>• UI/UX Design</li>
                                        <li>• Figma / Adobe</li>
                                        <li>• Responsive Design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('about-component', AboutComponent);
