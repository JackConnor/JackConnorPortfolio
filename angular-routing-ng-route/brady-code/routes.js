
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
}
