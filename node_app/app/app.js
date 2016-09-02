// Load the express module.
var express = require('express');
app = express.createServer();

// Respond to requests for / with 'Hello World'.
app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(80);
console.log('Express server listening on port 80.');
