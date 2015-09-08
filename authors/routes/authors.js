var express = require('express');
var authorsRouter = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
    //methodOverride = require('method-override'); //used to manipulate POST

//var candiesController = require('../controllers/candies');

// http://127.0.0.1:3000/candies

var Author = require('../models/author');

//show all authorsRouter routeand function
authorsRouter.get('/',function(request,response){
  Author.find({}, function(err,authors){
    if(err) return console.log(err);
    response.json(authors);
  });
});

//Post an author
authorsRouter.post('/', function (request,response) {
  Author.create(request.body, function (err, newAuthor) {
    if(err) return console.log(err);
    response.json(newAuthor);
  })
})

authorsRouter.get('/:id', function(request, response){
  Author.findOne({_id: request.params.id}, function(err,author){
    if(err) {
      console.log(err);
      return
    } else {
      console.log(author);
      response.json(author);
    }
  })
})


authorsRouter.delete('/:id', function(request, response){
  Author.findOneAndRemove({_id: request.params.id}, function(err, author){
    if(err) {
      console.log(err);
      return
    } else {
      console.log(author);
      response.json({'message': 'deleted author'+ request.params.id})
    }
  })
})

authorsRouter.patch('/:id', function(request, response) {
  Author.findOneAndUpdate({_id: request.params.id}, request.body, function(err, author) {
    if(err) {
      console.log("your error is: "+err);
      response.json({"message": err.message})
      return
    } else {
      console.log(author);
      response.json({"message": request.params.id});
    }
  })
})

module.exports = authorsRouter;
