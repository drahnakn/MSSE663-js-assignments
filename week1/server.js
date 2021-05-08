"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.use('/', listener);
app.listen(8000, function () {
    console.log('Running server...');
});
function listener(req, res) {
    res.send('Hello World!');
}
