var mongoose = require('mongoose');

var SkateboardSchema = mongoose.Schema({
	name: String,
	color: String
});

module.exports = mongoose.model('Skateboard', SkateboardSchema);
