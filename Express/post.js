
var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send(`
        <form method="POST" action="/student">
            Name: <input type="text" name="name">
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/student', function(req, res) {
    res.send("Student Name: " + req.body.name);
});

app.listen(3000);
