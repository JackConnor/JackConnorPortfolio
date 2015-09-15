var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var cityCatSchema = new mongoose.Schema({
  name: String
  ,breed: String
  ,alley: String
})

var Cat = mongoose.model("Cat", cityCatSchema);


module.exports = Cat;
