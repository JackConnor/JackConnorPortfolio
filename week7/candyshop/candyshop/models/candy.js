var mongoose = require('mongoose')

var candySchema = new mongoose.Schema({
  name: String
  ,brand: String
  ,sugar: Number
  ,price: Number
  ,created_at: Date
  ,updated_at: Date
})

var Candy = mongoose.model('Candy', candySchema);

module.exports = Candy;
