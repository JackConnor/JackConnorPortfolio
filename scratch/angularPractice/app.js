
(function() {

  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [{
      name: 'Dodecahedron',
      price: 2.95,
      description: "fine gem, slightly used.",
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Golden Idol',
      price: 89.50,
      description: "definitely not cursed, stop asking",
      canPurchase: true,
      soldOut: false,
    }];

})();


// function storeController() {
//   alery("hello");
// }
