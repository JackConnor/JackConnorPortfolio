var mongoose = require('mongoose');
var users = require('./models/user');
mongoose.connect('mongodb://localhost/beers');
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'Database connection error:'));
conn.once('open', function callback () { console.log("Hey handsome. Database connected.") });
var User = conn.model("User", users.userSchema);
