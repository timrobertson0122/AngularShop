clothesShop.factory('Products', function($http){
  return {
    getProducts: function() {
      return $http.get('products/products.json');
    }
  };
});