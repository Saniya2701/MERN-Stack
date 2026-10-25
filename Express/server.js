
var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', {
        name: 'Saniya'
    });
});

app.listen(5000, function() {
    console.log('Server running at http://localhost:5000');
});
