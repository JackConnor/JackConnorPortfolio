var express = require('express');
var router = express.Router();
var passport = require('passport');
var userObject = {};

/* GET home page. */
router.get('/',  isLoggedIn, function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

//login
router.get('/login', function(req, res){
  res.render('login', {title: 'login'})
})

//Logout Action
router.get('/logout', function(req, res){
  req.logout();//method provided by passport
  res.redirect('login');
})

router.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['email', 'user_birthday', 'user_location', "user_education_history"]
}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

function isLoggedIn(req, res, next){
  console.log("logging user object from index.js");
  console.log(req.user);
  console.log(req.user_json)
  var userObject = req.user;
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
