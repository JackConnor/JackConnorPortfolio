
angular.module('myApp')

  .config(appRoutes);

appRoutes.$inject = ['$routeProvider'];
function appRoutes($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: "templates/_home.html"
      ,controller: "bradyController"
      ,controllerAs: "bradyCtrl"
    })
    .when('/brady/:id', {
      templateUrl: 'templates/_profile.html'
      ,controller: 'bradyController'
      ,controllerAs: 'bradyCtrl'
    })
    .when('/new', {
      templateUrl: 'templates/_new.html'
      ,controller: 'bradyController'
      ,controllerAs: 'bradyCtrl'
    })
    .otherwise('/');
}
