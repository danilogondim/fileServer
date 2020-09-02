const net = require('net');
const PORT = 3000;

const server = net.createServer();

server.on("connection", (client) => {
  console.log('New client connected!');
  client.write("Welcome to the server!");
  // interpret incoming data as text
  client.setEncoding('utf8');
  client.on('data', data => {
    console.log('Client says:', data);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});