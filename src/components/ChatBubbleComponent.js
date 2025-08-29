class ChatBubbleComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="chat-bubble" id="chatBubble">
                <div class="wave-hand">👋</div>
                <div class="bubble-text">
                    <span class="bubble-title">Hey !</span>
                    <span class="bubble-message">Vous avez un message !</span>
                </div>
                <div class="bubble-arrow"></div>
            </div>

            <style>
                .chat-bubble {
                    position: absolute;
                    bottom: 80px;
                    left: 0;
                    background: white;
                    border-radius: 20px;
                    padding: 20px 25px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    animation: bubbleBounce 2s ease-in-out infinite;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    width: 300px;
                    z-index: 1001;
                }

                .wave-hand {
                    font-size: 28px;
                }

                .bubble-text {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .bubble-title {
                    color: #333;
                    font-weight: bold;
                    font-size: 16px;
                }

                .bubble-message {
                    color: #666;
                    font-size: 14px;
                }

                .bubble-arrow {
                    position: absolute;
                    bottom: -10px;
                    left: 30px;
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 10px solid white;
                    filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
                }

                @keyframes bubbleBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }

                .chat-bubble.hidden {
                    display: none;
                }
            </style>
        `;
    }

    hide() {
        const bubble = this.querySelector('#chatBubble');
        if (bubble) {
            bubble.classList.add('hidden');
        }
    }
}

customElements.define('chat-bubble-component', ChatBubbleComponent);
