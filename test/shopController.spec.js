describe('ShopController', function() {
  beforeEach(module('ClothesShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ShopController');
    sampleItem = {name: "Suede Shoes, Blue", 
                  price: 42.00, 
                  quantity: 4, 
                  category: "Womens Footwear"}
  }));

  it('displays a list of products', function() {
    expect(ctrl.productList).toEqual(items);
  });

  it('initialises with an empty shopping cart', function() {
    expect(ctrl.cart).toEqual([]);
  });

  it('can add a product to the shopping cart', function() {
    ctrl.addProduct(sampleItem);
    expect(ctrl.cart).toEqual([sampleItem]);
  });

});