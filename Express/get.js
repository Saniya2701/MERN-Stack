
var express = require('express');
var app = express();

app.get('/student', function(req, res) {
    var name = req.query.name;
    res.send("Student Name: " + (name || "Not provided"));
});

app.listen(3000);
