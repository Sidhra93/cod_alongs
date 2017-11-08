// route '/about'
// read a file named about.html
// and use it as the response

var http = require("http");
var fs = require("fs");

var app = function(request, response){
  // console.log("a request was made");
  if (request.url === "/about") {
    fs.readFile("about.html", "utf-8", function(err, data){
      response.writeHead(200, {"Content-Type": "text/html"})
      response.write(data);
      response.end();
    })
    // var buffer = fs.readFileSync("about.html");
    // response.write(buffer.toString());
  } else if (request.url === "/api") {
    response.writeHead(200, {"Content-Type": "application.json"})
    response.write('{"test": "one"}');
    // response.json('{"test": "one"}');
    response.end();
  } else {
    response.writeHead(404)
    response.write("hello world");
    response.end();
  }
}

var server = http.createServer(app);

server.listen(8888);
