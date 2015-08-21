clothesShop.controller('ShopController', ['$http', 'Products', function($http, Products) {
  
  var self = this;

  self.products = {'items' : []};

  var setProducts = function (data) {
    self.products.items = data;
  };

  Products.getProducts().success(setProducts);

  self.cart = [];


  self.addItemToBasket = function(item) {
    self.cart.push(item);
  };

  self.removeItemFromBasket = function(item) {
    self.cart.splice(self.cart.indexOf(item), 1);
  };


}]);