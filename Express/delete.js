
var express = require('express');
var app = express();

app.delete('/student', function(req, res) {
    res.send("Student record deleted");
});

app.listen(3000);
