var express = require('express');
var bodyParser = require('body-parser');
var catRouter = express.Router();

catRouter.get('/', function(req, res){
  res.render('junglecats')
})

module.exports = catRouter;
