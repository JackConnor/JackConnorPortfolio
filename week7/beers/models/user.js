var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, unique: true},
  password: String,
  Created_at: {type: Date, default: Date.now},
  addresses: [{street: String, city: String}],//embedded
  friends: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}] //referenced

})

var User = mongoose.model('User', userSchema)

module.exports = User;
