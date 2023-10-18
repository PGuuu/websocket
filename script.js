const ws = new WebSocket('ws://114.137.115.38:8080');

function sendMessage() {
  ws.send('Hello, server');
}

ws.onmessage = (event) => {
  console.log(`Received: ${event.data}`);
};
