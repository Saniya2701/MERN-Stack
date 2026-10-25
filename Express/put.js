
var express = require('express');
var app = express();

app.use(express.json());

app.put('/student', function(req, res) {
    res.send("Student record updated: " + req.body.name);
});

app.listen(3000);
