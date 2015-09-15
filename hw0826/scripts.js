console.log('testing');

//begin angular
(function(){
  var self = this;
  console.log('testing inside our angular');

  angular.module("glennApp",[])

    .controller('nameController', nameController)

    .controller('nameIdController', nameIdController)



    function nameController($http){
      var self = this;

      console.log('testing inside the controller');
      $http.get("http://glenndama.herokuapp.com/api/people")
        .success(function(data){
          console.log('testing iside our http success call');
          console.log(data);
          self.nameArray = data;
        })
    }

    function nameIdController($http){
      var self = this;

      console.log("testing in nameIdController");
      $http.get("http://glenndama.herokuapp.com/api/people")
        .success(function(datum){
          console.log("your data is: "+datum);
          self.datum = datum;
        })
    }
})();
