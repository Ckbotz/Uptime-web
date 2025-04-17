body {
    background-color: #000000;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.title-container {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
}

.uptime-title {
    color: #76ff03;
    font-size: 3rem;
    margin: 0;
}

.app-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.app-item {
    background-color: #111;
    border-radius: 8px;
    padding: 15px;
}

.app-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.app-name {
    font-weight: bold;
    flex-grow: 1;
}

.app-status.alive {
    color: #76ff03;
}

.app-status.down {
    color: #ff3333;
}

.status-circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #76ff03;
    box-shadow: 0 0 10px #76ff03;
    animation: wave 1.5s infinite;
}

.status-circle.big {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 15px #76ff03;
}

.status-circle.down {
    background-color: #ff3333;
    box-shadow: 0 0 10px #ff3333;
    animation: none;
}

.response-time {
    color: #aaa;
    font-size: 0.8rem;
    margin-top: 5px;
}

.error {
    color: #ff6666;
    font-size: 0.8rem;
    margin-top: 5px;
}

footer {
    margin-top: 30px;
    text-align: center;
    color: #444;
}

@keyframes wave {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
}
