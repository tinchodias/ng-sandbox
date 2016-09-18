var app = angular.module("storeApp", ["ngRoute"]);

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

app.controller('ListController', ['$http', function($http) {
  var store = this;
  store.products = [];

  $http.get('data/products.json').success(function(data) {
    store.products = data;
  });
}]);

app.controller('DetailController', ['$http', '$routeParams', function($http, $routeParams) {
  var detail = this;
  detail.product = {};

  $http.get('data/products.json').success(function(data) {
    detail.product = data.find(function(product) {
      return product.id == $routeParams.productId;
    });
  });
}]);



