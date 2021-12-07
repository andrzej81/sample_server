var http = require("http");
var dt = require("./module");

const port = 8000;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end("Hello Andrzej Iwaniuk");

    console.log("Server listen on 8000 port");
  })
  .listen(port);
