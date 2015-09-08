(function() {
  'use strict';

  angular.module('myRoutes', ['ngRoute'])
    .config(myConfig)

    myConfig.$inject = ['$routeProvider', '$locationProvider']
    function myConfig($routeProvider, $locationProvider){
      $routeProvider
        //route for the Home Page
        .when('/home', {
          templateUrl: "templates/_home.html"
          ,controller: "homeController"
          ,controllerAs: 'home'
        })

        .when('/about', {
          templateUrl: "templates/_about.html"
          ,controller: "aboutController"
          ,controllerAs: 'about'
        })

        $locationProvider.html5Mode(true);
    }
})();
