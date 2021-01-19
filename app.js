
//! To run on Heroku

const http = require('http');

//* a require is kinda the same as a JS import,,  or like a php require

// *const hostname = '127.0.0.1';  //*hardcode localhost

//! To run on Heroku
const port = process.env.PORT || 3000;  //* in browser bar - localhost:3000   

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Sup World');
});

server.listen(port, () => {
    console.log(`Server running now at ${port}/`);  //! To run on Heroku
});