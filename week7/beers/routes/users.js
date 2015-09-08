var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users){
    if(err) return console.log(err);
    res.render('index', {title: users[0].name, email: users[0].name});
  });
});

router.post('/', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  User.create({name: name, email: email}, function(err, user){
    if(err) return console.log(err);
    console.log("user created: "+user.name)
  })
  next('/')
});
//   User.create({name: req.params.name, email: req.params.email}, function(err, user){
//     if(err) return console.log(err);
//     console.log("new user created "+user.name);
//     res.json(user)
//   });
// });

router.get('/:name', function(req, res, next) {
  User.find({name: req.params.name}, function(err, user){
    if(err) return console.log(err);
    console.log("getting user: "+user.name);
    res.json(user[0].name)
  });
});



module.exports = router;
