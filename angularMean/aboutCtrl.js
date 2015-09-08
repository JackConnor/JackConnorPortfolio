(function() {
  'use strict';

  angular.module('aboutCtrl', [])
    .controller('aboutController', aboutController)

    aboutController.$inject = ['$rootScope', '$location']
    function aboutController($rootScope, $location){
      var vm = this;

      vm.message = "About Controller!";

    }

}());
