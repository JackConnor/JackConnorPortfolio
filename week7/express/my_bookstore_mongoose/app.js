var express = require('express'); //get the express library
var bodyParser = require('body-parser');
//console.log(bodyParser)

var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json())

//deifning a schema to be used with book model
var bookSchema = mongoose.Schema({
  name: String
});

var Book = mongoose.model('Book', bookSchema);

var app = express(); //create app

//setting up connection to mongo from mongoose
mongoose.connect('mongodb://localhost/bookstore')

var db = mongoose.connection;
//attaching error event listener
db.on('error', console.error.bind(console, 'connection error:'));
//attaching event listener to run one time when the connection opens
db.once('open', function(something){
  console.log('boom! we are connected to mongo');
})

Book.create({name: "Le petit prince"}, function(err, savedBook){
  if(err){
    console.log(err);
    return;
    //exit out of function
  }
  else {
    console.log('succesfully saved '+savedBook.name)
  }
})

var books = [
  {id:1, name:'bible'}
, {id:2, name:'koran'}
, {id:3, name: 'torah'}
, {id:4, name:"principia matematica"}
]

app.get('/', function(request, response){
  response.sendFile( __dirname + "/index_jquery.html");
});

//we're creating a login middleware
app.use(function(request, response, next){
  console.log("request received via %s at %s", request.method, request.url);
  next();
});

app.use(bodyParser.json())

app.get('/books', function(req, res, next) {
  Book.find({}, function(err, books){
    if(err) return console.log(err);
    res.json(books);
  });
});

app.post('/books', function(req, res) {
  var name = req.body.name;
  Book.create({name: name}, function(err, book){
    if(err) return console.log(err);
    console.log("user created: "+book.name);
    res.json(book);

  })
});

// app.post('/books', function(request, response) {
//   console.log(request.body);
//   console.log("hell yea node");
//   console.log(books)
//   books.push(request.body);
//   response.send("We don't have that book");
// });

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
