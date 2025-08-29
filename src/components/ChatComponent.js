class ChatComponent extends HTMLElement {
    connectedCallback() {
        this.render();
        this.initChat();
    }

    render() {
        this.innerHTML = `
            <div class="chat-widget">
                <chat-bubble-component></chat-bubble-component>
                
                <div class="chat-toggle" id="chatToggle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="chat-badge">1</span>
                </div>
                
                <div class="chat-container" id="chatContainer">
                    <div class="chat-header">
                        <div class="chat-avatar">
                            <span style="font-size: 20px;">🤖</span>
                        </div>
                        <div class="chat-info">
                            <h4>PierrotBot</h4>
                            <span class="status">En ligne</span>
                        </div>
                        <button class="chat-close" id="chatClose">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="chat-messages" id="chatMessages">
                        <div class="message received">
                            <p>Salut ! Je suis PierrotBot, l'assistant IA de Pierre. Que veux-tu savoir sur son parcours et ses projets ?</p>
                            <span class="message-time">À l'instant</span>
                        </div>
                    </div>
                    
                    <div class="chat-input">
                        <input type="text" id="chatInput" placeholder="Tapez votre message...">
                        <button id="chatSend">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <style>
                .chat-widget {
                    position: fixed;
                    bottom: 20px;
                    left: 20px;
                    z-index: 1000;
                }

                .chat-toggle {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M8 6L3 12L8 18M16 6L21 12L16 18' stroke='%234ecdc4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='12' r='1.5' fill='%234ecdc4'/%3E%3C/svg%3E") 12 12, pointer;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
                    transition: all 0.3s ease;
                    position: relative;
                }

                .chat-toggle:hover {
                    transform: translateY(-3px);
                }

                .chat-toggle svg {
                    transition: transform 0.3s ease;
                }

                .chat-badge {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    background: #ff4757;
                    color: white;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                }

                .chat-container {
                    position: absolute;
                    bottom: 80px;
                    left: 0;
                    width: 350px;
                    height: 500px;
                    background: rgba(26, 26, 46, 0.95);
                    backdrop-filter: blur(15px);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
                    display: none;
                    flex-direction: column;
                }

                .chat-container.active {
                    display: flex;
                }

                .chat-header {
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    padding: 15px 20px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    border-radius: 20px 20px 0 0;
                }

                .chat-avatar {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .chat-info {
                    flex: 1;
                }

                .chat-info h4 {
                    color: white;
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                }

                .status {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 12px;
                }

                .chat-close {
                    background: none;
                    border: none;
                    color: white;
                    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M8 6L3 12L8 18M16 6L21 12L16 18' stroke='%234ecdc4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='12' r='1.5' fill='%234ecdc4'/%3E%3C/svg%3E") 12 12, pointer !important;
                    padding: 5px;
                    border-radius: 5px;
                    transition: background 0.3s ease;
                }

                .chat-close:hover {
                    background: rgba(255, 255, 255, 0.2);
                    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M8 6L3 12L8 18M16 6L21 12L16 18' stroke='%234ecdc4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='12' r='1.5' fill='%234ecdc4'/%3E%3C/svg%3E") 12 12, pointer;
                }

                .chat-messages {
                    flex: 1;
                    padding: 20px;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .message {
                    max-width: 80%;
                    padding: 12px 16px;
                    border-radius: 18px;
                    color: white;
                }

                .message.received {
                    background: rgba(255, 255, 255, 0.1);
                    align-self: flex-start;
                }

                .message.sent {
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    align-self: flex-end;
                }

                .message p {
                    margin: 0 0 5px 0;
                    font-size: 14px;
                }

                .message-time {
                    font-size: 11px;
                    opacity: 0.7;
                }

                .chat-input {
                    padding: 15px 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    gap: 10px;
                    align-items: center;
                }

                .chat-input input {
                    flex: 1;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 25px;
                    padding: 12px 20px;
                    color: white;
                    font-size: 14px;
                    outline: none;
                }

                .chat-input input::placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }

                .chat-input button {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    border: none;
                    border-radius: 50%;
                    color: white;
                    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M8 6L3 12L8 18M16 6L21 12L16 18' stroke='%234ecdc4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='12' r='1.5' fill='%234ecdc4'/%3E%3C/svg%3E") 12 12, pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .chat-input button:hover {
                    transform: scale(1.1);
                }

                @media (max-width: 480px) {
                    .chat-container {
                        width: 300px;
                        height: 450px;
                        bottom: 70px;
                    }
                    
                    .chat-widget {
                        bottom: 15px;
                        left: 15px;
                    }
                }
            </style>
        `;
    }

    initChat() {
        const chatToggle = this.querySelector('#chatToggle');
        const chatContainer = this.querySelector('#chatContainer');
        const chatClose = this.querySelector('#chatClose');
        const chatInput = this.querySelector('#chatInput');
        const chatSend = this.querySelector('#chatSend');
        const chatBadge = this.querySelector('.chat-badge');
        const chatBubbleComponent = this.querySelector('chat-bubble-component');

        chatToggle.addEventListener('click', () => {
            chatContainer.classList.add('active');
            chatBadge.style.display = 'none';
            if (chatBubbleComponent) {
                chatBubbleComponent.hide();
            }
        });

        chatClose.addEventListener('click', () => {
            chatContainer.classList.remove('active');
        });

        const qaList = {
            'salut': 'Bonjour ! Je suis ravi de vous rencontrer. Que puis-je faire pour vous ?',
        };

        const sendMessage = () => {
            const message = chatInput.value.trim();
            if (message) {
                this.addMessage(message, 'sent');
                chatInput.value = '';
                
                const lowerMessage = message.toLowerCase();
                let foundAnswer = false;
                
                for (const [keyword, answer] of Object.entries(qaList)) {
                    if (lowerMessage.includes(keyword)) {
                        this.addMessage(answer, 'received');
                        foundAnswer = true;
                        break;
                    }
                }
                
                if (!foundAnswer) {
                    this.addMessage("Je n'ai pas compris votre question. Pour une réponse plus précise, contactez-moi par email ou sur LinkedIn.", 'received');
                }
            }
        };

        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    addMessage(text, type) {
        const chatMessages = this.querySelector('#chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const now = new Date();
        const time = now.toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        messageDiv.innerHTML = `
            <p>${text}</p>
            <span class="message-time">${time}</span>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

customElements.define('chat-component', ChatComponent);
