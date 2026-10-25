
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Home Page");
});

app.get('/hi', function(req, res) {
    res.send("Hi!");
});

app.get('/welcome', function(req, res) {
    res.send("Welcome to Express.js");
});

app.listen(3000);
