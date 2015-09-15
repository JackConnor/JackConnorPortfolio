// //
// // console.log('js loaded aOk')
// //
// // String.prototype.first = function(){return this[0]}
// //
// // console.log("the first letter of hello is", "hello".first())
// //
// // String.prototype.last = function(){return this[this.length-1]}
// //
// // Array.prototype.last = function(){return this[this.length-1]}
// //
// // console.log("hello".last())
// //
// // console.log([2,3,4,5].last())
// //
// // var myDiv = document.querySelectorAll('div')
// // var myDive = document.querySelector('#test')
// //
// //
// // console.log(myDiv)
// // console.log(myDive)
// //
// // NodeList.prototype.last = function(){return this[this.length-1]}
// //
// // console.log(myDiv.last())
// //
// // NodeList.prototype.forEach = Array.prototype.forEach;
// //
// // var jack = {
// //   name: "jack"
// //   , sayName: function(){
// //     console.log(this.name);
// //   }
// // }
// //
// // function Dog(name, breed){
// //   this.name = name;
// //   this.breed = breed;
// //   this.sayName = function(){
// //     console.log(this.name)
// //   }
// //   this.sayReverseName = function(){
// //     console.log(this.name.split('').reverse().join(''));
// //   }
// //   this.anyQs = function(){
// //     for (var i = 0; i < this.name.length; i++) {
// //       if(this.name[i] = "q") {
// //         console.log("Q!")
// //       } else{
// //         console.log('not a q')
// //       }
// //     }
// //   }
// // }
// //
// //
// // function Person(firstName, LastName, age) {
// //   this.firstName = firstName;
// //   this.LastName = LastName;
// //   this.Age = age;
// //   this.sayName = function(){
// //     console.log("this person's name is", this.firstName + " "+ this.LastName);
// //   }
// //   this.sayAge = function(){
// //     console.log(age - 5);
// //   }
// // }
// //
// // var maxie = new Dog('maxie', 'Maltese')
// // var woody = new Dog('qqqqowwwooqqodyqqq', 'Maltese')
// //
// //
// // function Cat(name, breed) {
// //   return{
// //     name: name
// //     ,breed: breed
// //   }
// // }
// //
// // var meows = new Cat('meows', "siamese")
//
//
// function Mammal(name){
//   this.name = name;
//   this.offspring = [];
// }
//
// Mammal.prototype.haveABaby = function(){
//   var newBaby = new Mammal("baby "+this.name);
//   this.offspring.push(newBaby);
//   console.log(newBaby.name+" is a new baby "+this.name);
//   return newBaby;
// }
//
// Mammal.prototype.toString = function(){
//   return "Mammal: "+this.name
// }
//
// Cat.prototype = new Mammal();
//
// Cat.prototype.constructor = Cat;
// function Cat(name){
//   this.name = name;
// }
// Cat.prototype.toString = function(){
//   return "this cat is "+this.name;
// }
//
// console.log('end')
//
// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function insert(str) {
  numArr = str.split('');
  console.log(numArr);
  for (var i = 0; i < numArr.length; i++) {
    if(parseInt(numArr[i])%2==1 && parseInt(numArr[i+1])%2==1){
      console.log("found one");
    }
  }
}

insert("1234237434")
