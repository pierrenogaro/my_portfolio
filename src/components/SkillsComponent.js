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
background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);                }

                .title-underline-skills {
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    margin: 0 auto 2rem auto;
                    border-radius: 2px;
                }

                .skill-card {
                    background: rgba(255,255,255,0.1);
                    border-radius: 10px;
                    padding: 1.5rem;
                    height: 100%;
                    border: 1px solid rgba(255,255,255,0.2);
                    min-height: 200px;
                }

                .skill-card h5 {
                    color: #f8f9fa;
                    margin-bottom: 1rem;
                    font-size: 1.2rem;
                }

                .skill-card ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .skill-card li {
                    color: #e8f5e8;
                    margin-bottom: 0.5rem;
                    font-size: 1rem;
                }
            </style>
        `;
    }
}

customElements.define('skills-component', SkillsComponent);
