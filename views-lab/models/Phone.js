var mongoose = require('mongoose');

var PhoneSchema = mongoose.Schema({
	name: String,
	color: String
});

module.exports = mongoose.model('Phone', PhoneSchema);
