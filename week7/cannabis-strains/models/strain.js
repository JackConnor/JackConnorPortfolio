var mongoose = require('mongoose')

//create a schema
var strainSchema = new mongoose.Schema({
  name: String
  ,sType: { type: String, required: true}
  ,thcContent: { type: Number, unique: true}
  ,created_at: Date
  ,updated_at: Date
  ,stores: {
    sName: String
    ,website: String
    ,address: String
  }
})

strainSchema.methods.pass = function(){
  return "Pass that "+this.name
}

var Strain = mongoose.model('Strain', strainSchema)

module.exports = Strain
