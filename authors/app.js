var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/authorsdb'); //naming the database
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: ")) //will give error if no connect
db.once('connected',function(callback){console.log('connected to mongo')})

var app = express()

app.set('view engine', 'ejs');

//parse incoming json
app.use(bodyParser.json());
//bring in author routes
var authorsRouter = require('./routes/authors');
//using middle set my url for authors
app.use('/authors', authorsRouter);

app.listen(3000, function(error){
  if (error) return console.log(error);
   console.log('success on connection');
})


// // model test
// var author1=new Author({name:"imtaek", birthday:new Date("2010-10-10"),books:[{title:"home Alone"}]});
// console.log(author1);

app.get('/',function(request,response){
  response.render('authors/index');
})
