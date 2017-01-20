var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("../README.md", function (error, contents) {
        response.write(contents);
        response.end();
    });

}).listen(8080);