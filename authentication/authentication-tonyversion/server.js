//BASE SETUP
//=======================
//call our packages
var express    = require('express'); //importing the express methods
var path       = require('path'); //this is used with morgan
var morgan     = require('morgan'); //used to see requests in the console
var bodyParser = require('body-parser');//allows us to import from params.bodyParser
var mongoose   = require('mongoose');// creating a schema in mongo
var bcrypt     = require('bcrypt'); // encrpyting your passwords
var jwt        = require('jsonwebtoken');
//=========================
//

//APP CONFIGURATION
//=========================
var app = express();
var apiRouter = express.Router();
//use morgan to show requests
app.use(morgan('dev'));
//use body-parser so we can grab info from params.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var secret = "hellyea";

//database connection
mongoose.connect('mongodb://localhost:27017/bcrypt');
var User = require('./models/user');
//=============================

//ROUTES CONFIGURATION
//============================
app.get('/', function(req, res){
  res.send('Welcome to the home page!');
});
app.post('/signin',function(req, res){
  var userParams=req.body.user;
  User.findOne({email:userParams.email}).select("name email password").exec(function (err, user) {
    if(err) return console.log(err);
    if(!user){
      res.json({success:false, message:"there is no user matched"});
    } else {
      var validPassword=user.authenticate(userParams.password);
      if(!validPassword){
        res.json({success:false, message:"password is wrong"});
      } else {
        var token = jwt.sign({
          name: user.name
          ,email: user.email
          ,admin: user.admin
        }, secret, {
          expiresInMinutes: 5 //expires in 5 minutes
        });
        res.json(token);
        res.json({success:true, message:"success!!!!!!"});
      }
    }
  })
});
//========================


apiRouter.use(function(req, res){
  var token = req.body.token || req.param('token') || req.headers['x-access-token']
  if(token) {
    jwt.verify(token, secret, function(err, decoded){
      if(err) return res.status(403).send({success: false, message: "access denied!"+ err.message});
      req.payload = decoded;
      next();
    })
    } else {
      console.log(token);
      return res.status(403).send({message: "no token"});
    }
  })

  apiRouter.use(function(){
    console.log("you just used the api router")
  })
///token middleware

//API ROUTES
//====================
apiRouter.route('/')
    .get(function(req, res){
      res.json({message: 'Welcome to my API!'});
    });
apiRouter.route('/users')
    .post(function(req, res){
      //create a new instance of the user model
      console.log(req.body.user);
      var user = new User(req.body.user);
      user.save(function(err){
        if(err) return console.log("there was an errpor: "+err);
        res.json({message: 'user created'});
      })

    })
    .get(function(req, res){
      User.find({},function(error, users){
    if (error){
      console.log(error);
      return
    }else {
      res.json(users);
    }
      })
    });

apiRouter.route('/users/:id')
  .get(function(req, res){
    User.findOne({_id: req.params.id}, function(err, user) {
      if(err) res.json({message: "wrong id"});
      res.json(user);
    })
  })
  // update
  .patch(function(req, res){
    User.findOneAndUpdate({_id: req.params.id}, req.body.user, function(err, user) {
      if (err){
        console.log(err);
        res.json({message: "bad update"});
        return
      }else {
        res.json({message: "user updated"});
        console.log("User updated");
      }
    })
  })
//delete
  .delete(function(request, response){
    User.findOneAndRemove({_id: request.params.id}, function(err, user){
      if (err) {
        response.json({message: "user not deleted"});
      }else{
        response.json({message: "user deleted"});
      }
    });
  });


//========================

//REGISTER ROUTES
//=================
app.use('/api',apiRouter);
//========================

//SERVER PORT
//===========================
app.listen(3000);
