var express = require('express');
var recordsRouter = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var recordsController = require('../controllers/recordscontroller.js')

recordsRouter.route('/')

  .get(recordsController.index)
  
  .post(recordsController.create)


module.exports = recordsRouter;
