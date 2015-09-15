var express = require('express'); //get the express library
var bodyParser = require('body-parser');
//console.log(bodyParser)


var app = express(); //create app



var books = [
  {id:1, name:'bible'}
, {id:2, name:'koran'}
, {id:3, name: 'torah'}
, {id:4, name:"principia matematica"}
]

//we're creating a login middleware
app.use(function(request, response, next){
  console.log("request received via %s at %s", request.method, request.url);
  next();
});

app.use(bodyParser.json())

app.get('/books', function(request, response) {
  console.log(request.params)
  console.log('get request for books')
  response.send(books);
});

app.post('/books', function(request, response) {
  console.log(request.body);
  console.log("hell yea node");
  console.log(books)
  books.push(request.body);
  response.send("We don't have that book");
});

app.patch('/books/:id', function(request, response) {
  var bookToEdit;
  books.forEach(function(el){
    if (el.id == request.params.id) {
      console.log('we found the book' + el.name);
      bookToEdit = books.indexOf(el);
      bookToEdit.name = request.name;
      console.log("edited book "+bookToEdit.name)
    }
  });
  response.json(books);
});

app.delete('/books/:id', function(request, response) {
  var bookToDelete;
  books.forEach(function(el){
    debugger
    if (el.id == request.params.id) {
      console.log('we found the book' + el.name);
      bookToDelete = books.indexOf(el);
      books.splice(bookToDelete, 1)
    }
  });
  response.json(books);
});

app.listen(3000, function() {
  console.log("Server has just started on 3000");
});
