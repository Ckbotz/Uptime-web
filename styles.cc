body {
    background-color: #000000;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
}

.container {
    width: 100%;
    max-width: 800px;
    padding: 2rem;
}

.title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.uptime-title {
    color: #76ff03;
    font-size: 3rem;
    margin: 0;
}

.app-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.app-item {
    background-color: #111111;
    border-radius: 8px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.app-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.app-name {
    font-size: 1.2rem;
    font-weight: bold;
    flex-grow: 1;
}

.app-status {
    font-size: 0.9rem;
}

.app-status.alive {
    color: #76ff03;
}

.app-status.down {
    color: #ff3333;
}

.response-time {
    color: #aaaaaa;
    font-size: 0.8rem;
}

.error {
    color: #ff6666;
    font-size: 0.8rem;
}

.status-circle {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: #76ff03;
    box-shadow: 0 0 10px #76ff03;
    animation: wave 1.5s ease-in-out infinite;
}

.status-circle.big {
    width: 3rem;
    height: 3rem;
    box-shadow: 0 0 20px #76ff03;
}

.status-circle.down {
    background-color: #ff3333;
    box-shadow: 0 0 10px #ff3333;
    animation: none;
}

@keyframes wave {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
}

footer {
    margin-top: 2rem;
    text-align: center;
    color: #444444;
    font-size: 0.8rem;
}
