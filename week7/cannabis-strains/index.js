//standard requires
var express = require('express')
var path = require('path')
var logger = require('morgan')
var bodyParser = require('body-parser')
var app = express()

//middleware stuff
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//mongo stuff
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cannabis-strains')

//create Strain
var Strain = require('./models/strain')
var girlScoutCookies = new Strain({
  name: "Girl Scout Cookies"
  ,sType: "Hybrid"
  ,thcContent: 89
})

girlScoutCookies.pass()
console.log(girlScoutCookies)

//save strain to the db
girlScoutCookies.save(function(err){
  if(err) console.log(err)
  if(girlScoutCookies) console.log("Strain Created!")
})

//find a single strain from the db
Strain.findOne({
  thcContent: 88}, function(err, strain){
    if(err) console.log(err)
    console.log("found it")
    console.log(strain)
  })

//update a strain
Strain.findOneAndUpdate({ thcContent: 88}, {name:"Maui Wowie"}, function(err, strain){
  if(err) console.log(err)
  console.log(strain)
})

//delete one
Strain.findOneAndRemove({thcContent:89}, function(err){
  if(err) console.log(err);
  console.log("strain deleted");
})
//view by collection
Strain.findById("55c29f1ab1a6e67cc17b0b55", function(err, strain){
  if(err) console.log(err)
  console.log("found it by the id");
  console.log(strain);
})

//view all strains
Strain.find({}, function(err, strains){
  if(err)console.log(err);
  console.log('all strains')
  console.log(strains);
})
