const net = require('net');
const PORT = 3000;


const conn = net.createConnection(PORT);


// interpret incoming data as text
conn.setEncoding('utf8');
conn.on('data', (data) => {
  console.log('Server says:', data);
});

conn.on("connect", () => {
  console.log("Successfully connected to the server");
  conn.write("Hello there!");
});