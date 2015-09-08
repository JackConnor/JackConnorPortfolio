require('dotenv').load();

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'photos', 'emails', 'birthday', 'location']
},
function(accessToken, refreshToken, profile, done) {
  console.log('returned from authentication');
  done(null, profile);
}
))

module.exports = passport;
