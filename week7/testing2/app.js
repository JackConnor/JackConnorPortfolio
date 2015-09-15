var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect("mongodb://localhost/catsdb");
db = mongoose.connection;

db.on('connected', function(){
  console.log('you connected successfully you handsome devil')
})

db.once('connected', function(){
  console.log('you are connected to mongo database');
})

//root controller
var routes = require('./routes/index');
app.use('/', routes);//sets root route

//users controller
var users = require('./routes/users');
app.use('/users', users);

//junglecats controller
var jungleCatsRouter = require('./routes/junglecats');
app.use('/junglecats', jungleCatsRouter);

//citycats controller
var cityCatsRouter = require('./routes/citycats');
app.use('/citycats', cityCatsRouter.router);

//adding schema to app.js
var Cat = cityCatsRouter.model;
// console.log(cityCatsRouter.model);
// console.log(cityCatsRouter.thing);

// var kitty = new Cat({name: "mrsnuggles"});

app.listen(3000, function(error) {
  if(error) return console.log(error);
  console.log('successfully connected to port 3000')
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

console.log("hell yea");

// var pablo = new Citycat({name: "pablo"});
//
// console.log(pablo);

module.exports = app;
