(function() {
  'use strict';

  angular.module('homeCtrl', [])
    .controller('homeController', homeController)

    function homeController($rootScope, $location){
      var vm = this;

      vm.message = "Home Controller!";

    }

}());
