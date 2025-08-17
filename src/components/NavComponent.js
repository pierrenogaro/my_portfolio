class NavComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg transparent-nav fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#hero">
                        Pierre Nogaro
                    </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#about">À propos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects">Projets</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <style>
                .transparent-nav {
                    background: none;
                }

                .navbar-brand {
                    color: white;
                    font-weight: 700;
                    font-size: 1.4rem;
                }

                .navbar-brand:hover {
                    color: #4a90e2;
                }

                .nav-link {
                    color: white;
                    margin: 0 0.5rem;
                    font-weight: 500;
                }

                .nav-link:hover {
                    color: #4a90e2;
                }

                .navbar-toggler {
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .navbar-toggler-icon {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
                }
            </style>
        `;
    }
}

customElements.define('nav-component', NavComponent);
