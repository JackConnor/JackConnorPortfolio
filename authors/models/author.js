var mongoose = require('mongoose');

var AuthorSchema = mongoose.Schema({
  name:String,
  birthday:{type:Date,default:Date.now},
  books:[{title:String}]
});
var Author = mongoose.model("Author",AuthorSchema);

module.exports = Author;
