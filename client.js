const net = require('net');
const PORT = 3000;

const conn = net.createConnection(PORT);

// interpret incoming data as text
conn.setEncoding('utf8');
conn.on('data', (data) => {
  console.log('Server says:', data);
});

// This listener waits for keyboard input
// and on enter it sends to the server
const stdin = process.stdin;
stdin.on('data', input => {
  conn.write(input);
});

conn.on("connect", () => {
  console.log("Successfully connected to the server");
  conn.write("Hello there!");
});