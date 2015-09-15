var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response) {
  console.log("route worked");
  response.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message is: '+msg)
    io.emit('message: '+msg);
  })
  // socket.broadcast.emit('hi');
  socket.on('disconnect', function(){
    console.log('user disconnected')
  });
});

http.listen(3000, function() {
  console.log('listinening on *:3000');
});

http.listen(4000, function() {
  console.log('listinening on *:3001');
});
