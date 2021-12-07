var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Andrzej Iwaniuk");
    console.log("Server listen on 8000 port");
  })
  .listen(8000);
