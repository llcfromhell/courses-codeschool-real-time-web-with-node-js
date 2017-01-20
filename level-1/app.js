var http = require('http');

http.createServer(function(request, response) {
  
  response.writeHead(200, {
    'Content-Type' : 'text/html'
  });

  let data = "Hello, this is Lorens";
  response.end(data);

  response.end();
  
}).listen(8080);
