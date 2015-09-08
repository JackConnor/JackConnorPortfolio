var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//our user schema
var userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true, select: false},
  passHint: [{question:String, answer: String}]
})

userSchema.pre('save', function(next){
  var user = this;

  //hash the pw only if the password has been changed or is new
  if(!user.isModified('password')) return next();

  bcrypt.genSalt(5, function(err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.authenticate = function(password){
  var user = this;
  return bcrypt.compareSync(password, user.password);
}

//create user model out of userSchema (constructor function)
var User = mongoose.model('User', userSchema);

module.exports = User;
