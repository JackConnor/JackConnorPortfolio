
//begin importing packages//

var express     = require('express');//imports express module
var mongoose    = require('mongoose');//for mongo schema
var bodyParser  = require('body-parser');//lets us grab from params.body
var path        = require('path');//this is used with Morgan
var morgan      = require('morgan');//used to seed console requests
var bcrypt      = require('bcrypt');//encrypting your passwords

/////end importing packages

//APP Setup and Configuration
//===========================
var app = express();//creates an instance of express

//use morgan to show requests
app.use(morgan('dev'));//shows us request info when a request is made

//setup body-parser
app.use(bodyParser.json())//let's us use info from params.body
app.use(bodyParser.urlencoded({extended: false}))
//end body-parser setup

//establish database connection
mongoose.connect('mongodb://localhost:27017/bcrypt');
var User = require('./models/user');
/////========================

//Routes Configuration
//===========

///begin importing our packages

// var x = new User({"name": "bud", email:"bud@bud.com", password: "bud"});
// //
// console.log(x);

app.get('/', function(request, response){
  console.log('made it');
  response.json({"name":"testing"})
});


/////API Routes
////========================
apiRouter = express.Router();
app.use(apiRouter);

//start /api routes
apiRouter.route("/")

  .get(function(request, response){
    console.log("yea ya");
    response.json({name:"JP"})
  })
  ////End /api Routes ==============


  //// Begin /users Routes==========
  // apiRouter.route('/users')
  //   .get(function(request, response){
  //     console.log('made it here');
  //     User.find({}, {}, function(err, dbUsers){
  //       console.log("the list of users is: "+dbUsers);
  //       if(err) return response.status(401).send({message: err.errmsg});
  //       response.json(dbUsers);
  //     })
  //   })
  //// Begin /users Routes==========
  app.get('/users',function(request, response){
    console.log('made it here');
    User.find({}, function(err, dbUsers){
      console.log("the list of users is: "+dbUsers);
      if(err) return response.status(401).send({message: err.errmsg});
      response.json(dbUsers);
    })
  })

  app.post('/users',function(request, response){
    var newUser =  new User(request.body.user);
    newUser.save(function(err, savedUser){
      if(err) return console.log(err);
      console.log("saved! "+savedUser)
    });
  })



  app.post('/signin', function(request, response){
    var userParams = request.body.user;
    User.findOne({email: userParams.email}).select('name email password').exec(function(err, user){
      if(user.authenticate(userParams.password))
      {
        console.log('not sorry');
        response.json({message: "Authenticated"})
      } else {
        console.log("so sorry")
        response.json({message: "invalid"})
      }
    })
  })
  //End /users Routes ==============


//Register Routes
//===================
app.use('/api', apiRouter)
//===================

//End Routes Configuration
///======================


//Server Port
//=============================
app.listen(5555);
