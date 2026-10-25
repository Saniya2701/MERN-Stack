
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log(req.hostname);
    console.log(req.query.name);

    res.send("Hello " + (req.query.name || "Student"));
});

app.listen(3000);
