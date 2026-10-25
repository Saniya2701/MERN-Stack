
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log(res.headersSent);

    res.send("Hello World!");

    console.log(res.headersSent);
});

app.listen(3000);
