var http = require("http");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Welcome to Node.js Web Server</h1>");
    res.write("<p>This is a simple web server.</p>");
    res.end();
});

server.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});