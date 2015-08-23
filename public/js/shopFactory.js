clothesShop.factory('Products', ['Flash', function(Flash){
  
  var service = {};
  var shoppingBasket = [];
  var vouchers = [];

  service.basketTotal = 0;
  service.shoppingBasket = shoppingBasket;
  service.shoppingBasketVisible = false;
  service.fivePoundDiscount = false;
  service.tenPoundDiscount = false;
  service.fifteenPoundDiscount = false;

  service.productList = {
  "Womens Footwear": [{name: "Suede Shoes, Blue", price: 42.00, quantity: 4, category: "Womens Footwear", image: "images/blue-suede-shoes-2.jpg"},
                      {name: "Almond Toe Court Shoes, Patent Black", price: 99.00, quantity: 5, category: "Womens Footwear", image: "images/almond-toe-court-shoes.jpeg"}],
  "Mens Footwear":   [{name: "Leather Driver Saddle Loafers, Tan", price: 34.00, quantity: 12, category: "Mens Footwear", image: "images/leather-driver-saddle-loafers.jpg"},
                      {name: "Flip Flops, Red", price: 19.00, quantity: 6, category: "Mens Footwear", image: "images/flip-flops.jpg"},
                      {name: "Flip Flops, Blue", price: 19.00, quantity: 0, category: "Mens Footwear", image: "images/flip-flops-blue.jpg"}],
  "Womens Casual":   [{name: "Gold Button Cardigan, Black", price: 167.00, quantity: 6, category: "Womens Casual", image: "images/gold-button-cardigan.jpg"},
                      {name: "Cotton Shorts, Medium Red", price: 30.00, quantity: 5, category: "Womens Casual", image: "images/cotton-shorts-red.jpeg"}],
  "Mens Casual":     [{name: "Fine Stripe Short Sleeve Shirt, Grey", price: 49.99, quantity: 9, category: "Mens Casual", image: "images/short-sleeve-shirt-grey.jpeg"},
                      {name: "Fine Stripe Short Sleeve Shirt, Green", price: 39.99, quantity: 3, category: "Mens Casual", image: "images/short-sleeve-shirt-green.jpg"}],
  "Womens Formal":   [{name: "Bird Print Dress, Black", price: 270.00, quantity: 10, category: "Womens Formal", image: "images/bird-print-dress-black.jpeg"},
                      {name: "Mid Twist Cut-Out Dress, Pink", price: 540.00, quantity: 5, category: "Womens Formal", image: "images/cut-out-dress-pink.jpeg"}],
  "Mens Formal":     [{name: "Sharkskin Waistcoat, Charcoal", price: 75.00, quantity: 6, category: "Mens Formal", image: "images/waistcoat-grey.jpg"},
                      {name: "Lightweight Patch Pocket Blazer, Deer", price: 175.50, quantity: 1, category: "Mens Formal", image: "images/blazer-deer.jpeg"}]
  };

  service.getBasketTotal = function() {
    var result = 0
    for (var i = shoppingBasket.length - 1; i >= 0; i--) {
      result += shoppingBasket[i].price;
    };
    result = parseFloat(result.toPrecision(12));
    service.basketTotal = result;
    return result;
  };

  service.subTotal = function() {
    return service.shoppingBasket.map(function(item) {
      return parseFloat(item.price);
    }).reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    },0);
  };

  service.addItemToBasket = function(item) {
    if(item.quantity >= 1) {
      shoppingBasket.push(item);
      item.quantity --;
      service.shoppingBasketVisible = true;
    } else {
      Flash.create('danger', 'Sorry, that item is out of stock');
    };
      service.getBasketTotal();  
  };

  service.removeItemFromBasket = function(item) {
    shoppingBasket.pop(item);
    service.getBasketTotal();
  };

  service.emptyBasket = function() {
    shoppingBasket.length = 0;
    service.getBasketTotal();
  };

  service.applyVoucher = function(voucher) {
    if(shoppingBasket.length >= 1) {

    }
  }

  return service;
}]);



  