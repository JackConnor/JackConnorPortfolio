
(function() {

  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: "fine gem, slightly used.",
    canPurchase: true,
    soldOut: false,
  }

})();


// function storeController() {
//   alery("hello");
// }
