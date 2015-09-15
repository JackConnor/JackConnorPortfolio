var express = require("express");

var app = express();


app.get('/',function(request, response) {
  response.send('my regards to broadway, tra la la');
});

app.get('/down',function(request, response) {
  response.send('move it all around');
});

app.get('/poem', function(request, response) {
  response.sendFile(__dirname + '/poem.html');
});

app.post('/',function(request, response) {
  response.send('we received deine post request');
});


app.listen(3000);
