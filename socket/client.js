const net = require('net');
// Connect to a server @ port 9898
const client = net.createConnection({ port: 8080 }, () => {
  console.log('Connected to socket server');
  client.write("Hello from client");
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('CLIENT: I disconnected from the server.');
});
