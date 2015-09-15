//USER MODEL
//Import mongoose and bcrypt
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//create a user schema
var userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true, select: false},
  passHint: [{question: String, answer: String}]
});

//encrpyting user password methodf
userSchema.pre('save', function(next){
  var user = this;

  //hash the pw only if the password has been changed or is new
  if(!user.isModified('password')) return next();

  //generate salt
  bcrypt.genSalt(5, function(err, salt){
      if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err,hash){
      if(err) return next(err);

      //change the password to the hashed version
      user.password = hash;
      next();
    });
  });
});

//add an authenticate method to the user schema
userSchema.methods.authenticate = function(password){
  var user = this;
  console.log(this);
  return bcrypt.compareSync(password, user.password);
};

//create user model out of userSchema (constructor function)
var User = mongoose.model('User', userSchema);

//export the model for use within app
module.exports = User;
