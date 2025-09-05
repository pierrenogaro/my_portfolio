class SkillsComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="skills" class="py-5 blue-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center mb-5">
                            <h2 class="text-white">Mes Compétences</h2>
                            <div class="title-underline-skills"></div>
                        </div>
                        
                        <div class="col-md-4 mb-4">
                            <div class="skill-card">
                                <h5>Languages</h5>
                                <ul>
                                    <li>HTML & CSS</li>
                                    <li>JavaScript</li>
                                    <li>PHP</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-4 mb-4">
                            <div class="skill-card">
                                <h5>BackEnd</h5>
                                <ul>
                                    <li>Symfony</li>
                                    <li>Django</li>
                                    <li>Express.js</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-4 mb-4">
                            <div class="skill-card">
                                <h5>FrontEnd</h5>
                                <ul>
                                    <li>React</li>
                                    <li>Vue.js</li>
                                    <li>Angular</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-4 mb-4">
                            <div class="skill-card">
                                <h5>DataBases</h5>
                                <ul>
                                    <li>pgsql</li>
                                    <li>mysql</li>
                                    <li>mongodb</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-4 mb-4">
                            <div class="skill-card">
                                <h5>Design</h5>
                                <ul>
                                    <li>Adobe Ai, Ps & Id</li>
                                    <li>Figma</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-4 mb-4">
                            <div class="skill-card">
                                <h5>Other</h5>
                                <ul>
                                    <li>Déploiement Serveur (vultr, minipc)</li>
                                    <li>Bash</li>
                                    <li>Ubuntu</li>
                                    <li>Docker</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                .blue-section {
background: linear-gradient(135deg, var(--bg-dark-1) 0%, var(--bg-dark-2) 50%, var(--bg-dark-3) 100%);                }

                .title-underline-skills {
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
                    margin: 0 auto 2rem auto;
                    border-radius: 2px;
                }

                .skill-card {
                    background: var(--transparent-white-10);
                    border-radius: 10px;
                    padding: 1.5rem;
                    height: 100%;
                    border: 1px solid var(--transparent-white-20);
                    min-height: 200px;
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    transition: all 0.3s ease;
                    position: relative;
                    z-index: 1;
                }

                .skill-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px var(--transparent-black-30);
                    background: var(--transparent-white-10);
                    border-color: var(--transparent-white-30);
                }

                .skill-card h5 {
                    color: var(--text-light-gray);
                    margin-bottom: 1rem;
                    font-size: 1.2rem;
                }

                .skill-card ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .skill-card li {
                    color: var(--text-light-green);
                    margin-bottom: 0.5rem;
                    font-size: 1rem;
                }
            </style>
        `;
    }
}

customElements.define('skills-component', SkillsComponent);
