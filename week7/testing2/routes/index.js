var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index.ejs')
});



module.exports = router;
