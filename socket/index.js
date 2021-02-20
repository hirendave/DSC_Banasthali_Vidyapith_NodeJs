const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data.toString());
  });
  socket.write('Server : Acknowledge<br>');
  socket.end('Closing Connection');
}).on('error', (err) => {
  console.error(err);
});

// Open server on port 8080
server.listen(8080, () => {
  console.log('Server is running on ', server.address().port);
});
