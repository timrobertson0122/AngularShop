describe('Clothes Shopping Site', function() {

  beforeEach(function() {
    browser.get('http://localhost:4567');
    var shoppingCart = element.all(by.className('cart'));
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Angular Shop');
  });

  it('has a list of products with their price etc', function() {
    expect(element.all(by.css(".list-group-item")).first().getText()).toContain("Suede Shoes");
  });

  it('initialises with an empty shopping cart', function() {
    expect(shoppingCart).getText().toEqual("Shopping Cart");
  });

});