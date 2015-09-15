var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/authorsdb');
var db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error: "))

db.once('connected', function(){
  console.log("connection made")
} )

app = express();

app.use(bodyParser.json())

app.listen(3000, function(err){
  if(err){
    return console.log("connection fucked up because: "+err)
  }
  console.log('good connection')
})

var AuthorSchema = mongoose.Schema({
  name:String
  ,birthday:{type:Date, default: Date.now}
  ,books: [{title: String}]
});

var Author = mongoose.model("Author", AuthorSchema);

var author1 = new Author({name: "jacko", books:{title:"catch-22"}})

console.log(author1);


app.get("/", function(request, response){
  response.send("testing testing")
})

app.get('/authors', function(request, response) {
  Author.find({}, function(err, authors) {
    if(err) return console.log(err);
    response.json(authors)
  })
})

app.post('/authors', function(request, response){
  Author.create(request.body, function(err, newAuthor) {
    if(err) return console.log(err);
    response.json(newAuthor);
  })
})

app.get('/authors/:id', function(request, response) {
  Author.findOne({ _id: request.params.id}, function(err, author){
    if(err) {
      console.log(err);
      return
    } else {
      console.log(author);
      response.json(author);
    }
  })
})

app.delete('/authors.:id', function(request, response){
  Author.findOneAndRemove({_id: request.params.id},  function(err, author) {
    if(err) {
      console.log(err)
      response.json("message": err.message)
    } else {
      console.log(author);
      respons.json("message": "deleted author" +request.params.id)
    }
  })
})
