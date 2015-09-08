(function() {
  'use strict';

  angular.module('mainCtrl', [])
    .controller('mainController', mainController)

    mainController.$inject = ['$rootScope', '$location']
    function mainController($rootScope, $location){
      var vm = this;

      vm.message = "Main Controller!";

    }

}());
