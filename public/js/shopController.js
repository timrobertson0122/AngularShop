clothesShop.controller('ShopController', ['$http', '$scope', 'Products', function($http, $scope, Products) {
    var self = this;

    self.products = Products;
}]);
