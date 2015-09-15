//Papa John says this is the best way! Code fresh!
(function(){
  //Declare your angular app
  angular.module('myApp',[])
  //create a factory to handle a single model; create before controller

  .factory("$myFactory", myFactory)
  //create your controller to use in your view
  .controller('pokeController', pokeController)
  // dependency injections

  myFactory.$inject = ["$http"];
  // inject your factory into your controller

// create your factory and controller functions to get hoisted
function myFactory($http){
  var allPokemonUrl = "http://pokeapi.co/api/v1/pokedex/1";
  var detailPokemonUrl = "http://pokeapi.co/";
  var pokeFactory = {};
  pokeFactory.getAllPokemon = function(){
    return $http.get(allPokemonUrl);
  };
  pokeFactory.getPokemon = function(pokemon){
    return $http.get(detailPokemonUrl + pokemon.resource_uri)
  }
  return pokeFactory;
};

pokeController.$inject = ['$myFactory'];
// remember the order of your arguments matter
function pokeController($myFactory){
  var vm = this;

  vm.api = $myFactory //keep track of our factory;

  vm.pokeList = [];
  vm.onePokemon = null;

  vm.api.getAllPokemon()
    .success(function(data){
      vm.pokeList = data.pokemon;
      console.log(vm.pokeList);
  })

  console.log("myController------------------");







  // $http({
  //   method: 'get'
  //   ,url: "http://pokeapi.co/api/v1/pokemon"
  // })
  // initialize your controller variables

  // use the factory function to return the data from the api

  // create a function that returns data for the selected pokemon
  vm.showPokemon = function(pokemon){
    // vm.currentPoke = pokemon;
    // console.log(vm.currentPoke);
    // console.log('testing');
    //begin factory method
    vm.api.getPokemon(pokemon)
      .success(function(data){
        vm.onePokemon = data;
      })
    //below is old method
    // $http.get("http://pokeapi.co/"+pokemon.resource_uri)
    //   .success(function(data){
    //     console.log("data is: "+data);
    //     console.log(data);
    //     vm.weight = data.weight;
    //     vm.name = data.name;
    //     vm.speed = data.speed;
    //     console.log("http://pokeapi.co"+data.sprites[0].resource_uri);
    //
    //     $http.get("http://pokeapi.co"+data.sprites[0].resource_uri)
    //       .success(function(data){
    //         console.log(data.image);
    //         console.log("http://pokeapi.co"+data.image);
    //         vm.image = "http://pokeapi.co"+data.image;
    //       })
    //   })

  };
};
})();
