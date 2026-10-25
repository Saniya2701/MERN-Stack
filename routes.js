var http = require("http");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});

    if (req.url == "/") {
        res.write("<h1>Home Page</h1>");
    } else if (req.url == "/about") {
        res.write("<h1>About Page</h1>");
    } else if (req.url == "/contact") {
        res.write("<h1>Contact Page</h1>");
    } else {
        res.write("<h1>404 Page Not Found</h1>");
    }

    res.end();
});

server.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});