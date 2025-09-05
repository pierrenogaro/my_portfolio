class NavComponent extends HTMLElement {
    connectedCallback() {
        this.render();
        this.initThemeToggle();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg transparent-nav fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#home">
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
                                <a class="nav-link" href="#skills">Compétences</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <button class="theme-toggle-btn" id="themeToggle" title="Changer de thème">
                                    <svg class="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
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
                    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    font-weight: 700;
                    font-size: 1.4rem;
                }


                .nav-link {
                    color: var(--text-white);
                    margin: 0 0.5rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    position: relative;
                }

                .nav-link:hover {
                    color: var(--color-primary);
                    transform: translateY(-2px);
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }

                .nav-link:hover::after {
                    width: 80%;
                }

                .navbar-toggler {
                    border: 1px solid var(--transparent-white-30);
                }

                .navbar-toggler-icon {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
                }

                .theme-toggle-btn {
                    background: none;
                    border: none;
                    color: var(--text-white);
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    margin-left: 0.5rem;
                }

                .theme-toggle-btn:hover {
                    transform: scale(1.1);
                }

                .theme-icon {
                    transition: transform 0.3s ease;
                }

                .theme-toggle-btn:hover .theme-icon {
                    transform: rotate(180deg);
                }

                .theme-transition {
                    transition: all 0.5s ease;
                }
            </style>
        `;
    }

    initThemeToggle() {
        const themeToggle = this.querySelector('#themeToggle');
        const themeIcon = this.querySelector('.theme-icon');
        const currentTheme = localStorage.getItem('theme') || 'default';

        document.documentElement.setAttribute('data-theme', currentTheme);
        
        this.updateThemeIcon(themeIcon, currentTheme);
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'fire' ? 'default' : 'fire';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            this.updateThemeIcon(themeIcon, newTheme);
            
            document.body.classList.add('theme-transition');
            setTimeout(() => {
                document.body.classList.remove('theme-transition');
            }, 500);
        });
    }
    
    updateThemeIcon(icon, theme) {
        if (theme === 'fire') {
            icon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            `;
        } else {
            icon.innerHTML = `
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            `;
        }
    }
}

customElements.define('nav-component', NavComponent);
