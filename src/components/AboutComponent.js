class AboutComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="about" class="py-5 white-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <img src="/assets/pierre.jpeg" alt="Pierre Nogaro" 
                                 class="img-fluid rounded shadow about-border">
                        </div>
                        <div class="col-lg-6">
                            <h2 class="mb-4 display-5 text-dark">À propos de moi</h2>
                            <p class="lead mb-4 text-dark">
                                Passionné par le développement web et le design, 
                                je crée des expériences digitales modernes et intuitives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                .white-section {
                    background: rgba(140,194,255,0.65);
                    color: #333;
                }

                .about-border {
                    border: 3px solid #4ecdc4;
                }
            </style>
        `;
    }
}

customElements.define('about-component', AboutComponent);
