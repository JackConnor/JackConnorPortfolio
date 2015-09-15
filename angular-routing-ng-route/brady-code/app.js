(function(){

angular.module('myApp', ['ngRoute'])

  .controller('bradyController', bradyController)



var bradyDatabase = [
  {name: "Mike Brady", img: "img/mike.jpeg"}
  ,{name:"Carol Brady", img: "img/carol.jpeg"}
];

console.log(bradyDatabase);

function bradyController(){
  var self = this;
  self.bradyBunch = bradyDatabase;
  console.log('brady controller up and runnning');
}



})()
