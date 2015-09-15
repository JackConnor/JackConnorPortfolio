var location = navigator.geolocation.getCurrentPosition(function(data){
  console.log(data);
  return data;
})

(function(){

angular.module('myApp', ['ngRoute'])

  .controller('bradyController', bradyController)



var bradyDatabase = [
  {name: "Mike Brady", img: "img/mike.jpeg"}
  ,{name:"Carol Brady", img: "img/carol.jpeg"}
];

console.log(bradyDatabase);


bradyController.$inject = ["$window", "$routeParams"];
function bradyController($window, $routeParams){
  var self = this;
  self.bradyBunch = bradyDatabase;
  console.log(self.bradyBunch);
  console.log('brady controller up and runnning');

  self.newBrady = {name: "", img: "img/"};

  self.currentBrady = {};//info being passed to profile page

  self.addBrady = function(){
    console.log(self.newBrady);
    bradyDatabase.push(self.newBrady);
    console.log(bradyDatabase);
    self.newBrady = {name: "", img: "img/"};
    $window.location.href = "/#/";
  }

  self.getProfile = function(){
    console.log('hey');
    console.log($routeParams);
    self.currentBrady = bradyDatabase[$routeParams.id];
    console.log(self.currentBrady);
  }

}



})()
