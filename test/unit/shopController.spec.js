describe('ShopController', function() {
  beforeEach(module('ClothesShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ShopController');
    sampleItem =  {name: "Suede Shoes, Blue", 
                  price: 42.00, 
                  quantity: 4, 
                  category: "Womens Footwear"};
    sampleItem2 = {name: "Almond Toe Court Shoes, Patent Black", 
                  price: 99.00,
                  quantity: 5, 
                  category: "Womens Footwear", 
                  images: [ "images/almond-toe-court-shoes.jpeg" ]
                  }
  }));

  it('contains a list of products', function() {
    expect(ctrl.products).not.toContain('');
  });

  it('initialises with an empty shopping cart', function() {
    expect(ctrl.shoppingBasket).toEqual([]);
    expect(ctrl.basketTotal).toEqual(0);
  });

  it('can add a product to the shopping cart', function() {
    ctrl.addItemToBasket(sampleItem);
    expect(ctrl.shoppingBasket).toEqual([sampleItem]);
  });

  it('can remove a product from the shopping cart', function() {
    ctrl.addItemToBasket(sampleItem);
    ctrl.removeItemFromBasket(sampleItem);
    expect(ctrl.shoppingBasket).toEqual([]);
  });

  it('can display the total cost of the shopping basket items', function() {
    ctrl.addItemToBasket(sampleItem);
    expect(ctrl.basketTotal).toEqual(42.00);
  });

});