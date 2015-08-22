clothesShop.controller('ShopController', ['$scope', 'Products', function($scope, Products) {
  var self = this;
  Products.getProducts().then(function(data){
    $scope.productList = Products.getProducts();
  });
}]);