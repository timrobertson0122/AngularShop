describe('ShopController', function() {
  beforeEach(module('ClothesShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ShopController');
  }));

  it('displays a list of products', function() {
    expect(ctrl.products).toEqual(items);
  });

  it('initialises with an empty shopping cart', function() {
    expect(ctrl.cart).toEqual([]);
  })

});