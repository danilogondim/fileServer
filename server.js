const net = require('net');
const PORT = 3000;
const fs = require('fs');

const server = net.createServer();

server.on("connection", (client) => {
  console.log('New client connected!');
  client.write("Welcome to the server!");
  // interpret incoming data as text
  client.setEncoding('utf8');
  client.on('data', data => {
    console.log('Client says:', data);
    // check if the download command was sent
    if (data.split(' ')[0] === "download") {
      const requestedFiles = data.split(' ').slice(1);
      console.log('Client requested the following files:', requestedFiles);
      // look for each file
      requestedFiles.forEach(file => {
        fs.readFile(`./serverFiles/${file}`, (error, data) => {
          if (error) {
            client.write(`${file} is not available for download`);
          } else {
            client.write(`content: ${data}`);
          }
        });
      });

    }

  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});