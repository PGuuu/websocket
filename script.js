const ws = new WebSocket('wss://172.20.10.9:443');

function sendMessage() {
  ws.send('Hello, server');
}

ws.onmessage = (event) => {
  console.log(`Received: ${event.data}`);
};
