var Record = require('../models/record.js');


function index(req, res) {
  console.log("starting records index");
  Record.find({}, function(err, records) {
      if(err) res.json({message: "couldn't find that record"});
      console.log('showing all records');
      res.json(records);
      // res.render('records/index.ejs');
    })
  }

function create(req, res, next) {
  // console.log(req);
  // console.log(params);
  // console.log(req.body)
  // var name = req.body.name;
  // var band = req.body.band;
  console.log('about to create new record');
  Record.create({name:req.body.name}, function(err, newRecord) {
    if(err) return console.log(err);
    console.log(newRecord);
    res.json(newRecord);
  })
  res.redirect('/');
}



module.exports = {
  index: index,
  create: create
}
