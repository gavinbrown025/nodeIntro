const http = require('http');

//* a require is kinda the same as a JS import,,  or like a php require

const hostname = '127.0.0.1';  //*hardcode localhost
const port = 3000;  //* in browser bar - localhost:3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Sup World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});