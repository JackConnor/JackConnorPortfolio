function Dog(name, age, breed) {
  this.puppies = [];
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.bark = function(){
    console.log("my name is "+name+" and I like to bark");
  }
  this.humanYears = function(){
    console.log('my age is '+((this.age)/7))
  }
  this.createPuppy = function(){
    var pupp = new Dog(name+"ito", 1, breed);
    this.puppies.push(pupp);
    console.log('the puppies are: '+this.puppies[0].name);
  }
}

console.log('functioninhgh')
