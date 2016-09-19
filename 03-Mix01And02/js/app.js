var app = angular.module("storeApp", ["ngRoute"]);

app.service("productsService", ['$http', function ($http) {

  this.allProducts = function () {
    return $http.get('data/products.json', { cache: true });
  };

}]);


app.config(function($routeProvider) {
  $routeProvider
  .when("/products", {
      templateUrl : "partials/products.html"
  })
  .when("/products/:productId", {
      templateUrl : "partials/product.html"
  })
  .otherwise({
      redirectTo: '/products'
  });
});

app.controller('ListController', ['productsService', function(productsService) {
  var store = this;
  store.products = [];

  productsService.allProducts().success(function(products) {
    store.products = products;
  }); 

}]);

app.controller('DetailController', ['productsService', '$routeParams', function(productsService, $routeParams) {
  var detail = this;
  detail.product = {};

  productsService.allProducts().success(function(products) {
    detail.product = products.find(function(product) {
      return product.id == $routeParams.productId;
    });
  });

}]);



