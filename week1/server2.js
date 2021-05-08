const express = require('express');
const app = express();

app.use('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(8000, function() {
    console.log('Running server...');
});