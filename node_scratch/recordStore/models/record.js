var mongoose = require('mongoose');

var recordSchema = mongoose.Schema({
  name:String,
  // band:String,
  // releaseDate: {type:Date, default: Date.now}
});

var Record = mongoose.model('Record', recordSchema);


module.exports = Record;
