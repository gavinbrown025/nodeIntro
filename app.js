
const express = require('express'); //* a require is kinda the same as a JS import,,  or like a php require
const path = require('path');

const server = express();

//* set our views directory so express knows what to use
server.set("views", path.join(__dirname, 'views'));

//* set staic assets directory so express knows where to look
//* for css files, JS files, Images etc - anything static
server.use(express.static(path.join(__dirname,"public")));

server.get("/", (req, res) => {
    console.log("hit the home route");
    res.sendFile('views/index.html');
});

server.get("/contact", (req, res) => {
    console.log("hit the contact route");
    res.sendFile('views/contact.html');
});


server.listen(port, () => {
    console.log(`Server running now at ${port}/`);  //! To run on Heroku
});