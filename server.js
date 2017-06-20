let http = require('http'),
  server = new http.Server();

server.listen(3030, '127.0.0.1');

let counter = 0;

server.on('request', (req, res) => {
  res.end('Hello!' + ++counter);
});