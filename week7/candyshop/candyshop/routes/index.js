var express = require('express');
var router = express.Router();

var Candy = require('../models/candy.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
