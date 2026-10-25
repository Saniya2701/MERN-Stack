var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});

    res.write("<html>");
    res.write("<head><title>Node.js Server</title></head>");
    res.write("<body>");
    res.write("<h1>Node.js Web Server</h1>");
    res.write("<p>Welcome to my web page.</p>");
    res.write("</body>");
    res.write("</html>");

    res.end();
}).listen(3000);

console.log("Web server started on port 3000");