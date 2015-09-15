var express = require('express');
var router = express.Router();
    // bodyParser = require('body-parser'), //parses information from POST
    // methodOverride = require('method-override'); //used to manipulate POST

var skateboardsController = require('../controllers/skateboardsController');

//GET ALL
router.get('/skateboards', skateboardsController.getIndex);
//GET NEW FORM
router.get('/skateboards/new', skateboardsController.new);
 //CREATE AFTER FORM SUBMISSION
router.post('/skateboards', skateboardsController.create);
//GET ONE
router.get('/skateboards/:id', skateboardsController.getOne);
//GET EDIT FORM
router.get('/skateboards/:id/edit', skateboardsController.edit);
//UPDATE AFTER FORM SUBMISSION
router.put('/skateboards/:id/', skateboardsController.update);
//DELETE ONE
router.delete('/skateboards/:id', skateboardsController.destroy);

module.exports = router;
