var http = require ('http');
var barney = require('./myModule');

var server = http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text-plain"});
  response.write("hello world");
  response.write("goodbye world");
  console.log(request);


  response.end();
});

server.listen(3000);
server.once('listening', function(){
  console.log("Running on port 3000, oh yea");
});
