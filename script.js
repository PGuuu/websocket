const ws = new WebSocket('wss://172.20.10.9:8080');

function sendMessage() {
  ws.send('Hello, server');
}

ws.onmessage = (event) => {
  console.log(`Received: ${event.data}`);
};
