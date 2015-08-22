clothesShop.factory('Products', ['Flash', '$http', function(Flash, $http){
  
  var products = $http.get('/products/products.json').success(function(response) {
    return response;
  });
  var service = {};
  service.getProducts = function() {
    return products;
  };
  var shoppingBasket = [];
  var vouchers = [];

  service.basketTotal = 0;
  service.shoppingBasket = shoppingBasket;
  service.shoppingBasketVisible = false;
  service.fivePoundDiscount = false;
  service.tenPoundDiscount = false;
  service.fifteenPoundDiscount = false;
  service.errorMessage = false;

  service.addItemToBasket = function(item) {
      self.shoppingBasket.push(item);
      self.shoppingBasketVisible = true;
      setBasketTotal();
  };

  service.removeItemFromBasket = function(item) {
    self.shoppingBasket.pop(item);
  };

  service.getBasketTotal = function() {
    var result = 0
    for (var i = shoppingBasket.length -1; i >= 0; i--) {
      result += shoppingBasket[i].price;
    };
    result = parseFloat(result.toPrecision(12));
    service.cartPrice = result;
    return result;
  };

});



  