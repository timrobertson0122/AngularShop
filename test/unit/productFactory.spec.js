describe('factory: Products', function() {

  var products;

  beforeEach(function(){
    module('ClothesShop');
  });

  beforeEach(inject(function(Products) {
    products = Products
    sampleItemShoes = {name: "Suede Shoes, Blue", price: 42.00, quantity: 4, category: "Womens Footwear"};
    sampleItemNotShoes = {name: "Cotton Shorts, Medium Red", price: 30.00, quantity: 5, category: "Womens Casual"};
  }));

  describe('shopping basket', function() {

    it('is empty upon initialisation', function() {
      expect(products.shoppingBasket).toEqual([]);
    });

    it('has a total of zero upon initialisation', function() {
      expect(products.basketTotal).toEqual(0);
    });

    it('can add a product to the shopping basket', function() {
      products.addItemToBasket(sampleItemShoes);
      expect(products.shoppingBasket).toEqual([sampleItemShoes]);
    });

    it('can add multiple items to the shopping basket', function() {
      products.addItemToBasket(sampleItemShoes);
      products.addItemToBasket(sampleItemNotShoes);
      expect(products.shoppingBasket).toEqual([sampleItemShoes, sampleItemNotShoes]);
    });

    it('can remove a product from the shopping basket', function() {
      products.addItemToBasket(sampleItemShoes);
      products.removeItemFromBasket(sampleItemShoes);
      expect(products.shoppingBasket).toEqual([]);
    });

    it('can remove a product from the shopping basket one at a time', function() {
      products.addItemToBasket(sampleItemShoes);
      products.addItemToBasket(sampleItemShoes);
      products.removeItemFromBasket(sampleItemShoes);
      expect(products.shoppingBasket).toEqual([sampleItemShoes]);
    });

    it('knows the total cost of the products in the shopping basket', function() {
      products.addItemToBasket(sampleItemShoes);
      products.addItemToBasket(sampleItemNotShoes);
      expect(products.basketTotal).toEqual(72.00);
    });
  })
})