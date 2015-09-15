(function(){
  angular
    .module('myApp', [])
    .controller('mainController', ['$scope', '$log',
      function(a, b){
        console.log(a);
        b.info(a);
      }
        // a.name = "jack";
    ])

    // function mainController(){
    //   // console.log('sup');
    // }
})();
