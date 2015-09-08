var express = require('express');
var router = express.Router();
    // bodyParser = require('body-parser'), //parses information from POST
    // methodOverride = require('method-override'); //used to manipulate POST

var phonesController = require('../controllers/phonesController');

//GET ALL
router.get('/phones', phonesController.getIndex);
//GET NEW FORM
router.get('/phones/new', phonesController.new);
 //CREATE AFTER FORM SUBMISSION
router.post('/phones', phonesController.create);
//GET ONE
router.get('/phones/:id', phonesController.getOne);
//GET EDIT FORM
router.get('/phones/:id/edit', phonesController.edit);
//UPDATE AFTER FORM SUBMISSION
router.put('/phones/:id/', phonesController.update);
//DELETE ONE
router.delete('/phones/:id', phonesController.destroy);

module.exports = router;
