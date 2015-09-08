var http = require ('http');
var barney = require('./myModule');

var app = {
  "GET":
    {
       "/": function(){console.log("dude somebody getting root")}
     , "/favicon.ico": function(){console.log("dude somebody getting favicon")}
    }
};

var server = http.createServer(function(request, response) {
  console.log(request.method);
  console.log(request.url);
  app[request.method][request.url]();
  response.writeHead(200, {"Content-Type": "text-plain"});
  // response.write(barney.neighbor);
  // response.write(barney.dinosaur());


  response.end("dude");
});

server.listen(8000);
server.once('listening', function(){
  console.log("Running on port 3000, oh yea");
});
