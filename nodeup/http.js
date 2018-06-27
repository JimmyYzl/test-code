var http = require('http');

http.createServer(((req, res) => {
  res.writeHead(200, {'Content-Type': "text/json;charset=UTF-8", "Access-Control-Allow-Origin": "*"});
  res.end("djkajl");
})).listen(2000, '127.0.0.1');