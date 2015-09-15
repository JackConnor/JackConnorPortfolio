var express = require('express');
var cityCatsRouter = express.Router();//call
var bodyParser = require('body-parser');

var Cat = require('/Users/Jack/documents/ga-workspace/week7/testing2/models/citycatsmodel.js')

var ralphson = new Cat({name: "ralphson"});

var sammy = new Cat({name: "sammy"});

console.log("your cats are", Cat.find({}));

console.log("new CAT by the name of", ralphson.name);


cityCatsRouter.get('/',function(request,response){
  Cat.find({}, function(err,cats){
    if(err) return console.log(err);
    console.log(cats[0].name)
  });
});

cityCatsRouter.get('/new', function(req, res){
  res.render("cityCats/new.ejs")
})

//get all
// cityCatsRouter.get('/', function(req, res) {
//   Citycat.find({}, function(err, citycats) {
//     if(err) return console.log(err);
//     res.json(citycats);
//   })
// })

module.exports = {
  router: cityCatsRouter,
  model: Cat,
  thing: 54
}
