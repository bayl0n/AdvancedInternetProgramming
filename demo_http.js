var http = require('http');
var url = require('url');

// Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Hello World!'); // Write a response to the client
    res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = "<p>" + q.year + " " + q.month + "</p>";
    res.end(txt); // End the response
}).listen(8080); // The server object listens on port 8080