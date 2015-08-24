describe('Clothes Shopping Site', function() {
  beforeEach(function() {
    browser.get('http://localhost:4567');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Angular Shop');
  });

  it('has a list of products with their price etc', function() {
    expect(element.all(by.css(".Items")).first().getText()).toContain("Suede Shoes");
  });

  it('initialises with a hidden shopping basket', function() {
    expect(element(by.id('shopping-basket')).isDisplayed()).toBe(false);
  });

  it('the shopping basket displays a total of £0.00 before any items are added', function() {
    expect(element(by.id('basket-header-total')).getText()).toContain('£0.00');
  });

  it('can add a product to the shopping basket, and show the basket total', function() {
    element.all(by.css(".addToBasketButton")).first().click();
    expect(element(by.id('basket-header-total')).getText()).toContain('£42.00');
    expect(element(by.id('shopping-basket')).getText()).toContain('Suede Shoes');
  });

  it('can remove a product from the shopping basket, and reset the total to zero', function() {
    element.all(by.css(".addToBasketButton")).first().click();
    element(by.cssContainingText(".remove-basket-item", 'remove')).click();
    expect(element(by.id('shopping-basket')).isDisplayed()).toBe(false);
    expect(element(by.id('basket-header-total')).getText()).toContain('£0.00');
  });

  xit('cannot add an out of stock item to the basket', function() {
    element(by.cssContainingText('.shop-item', 'Flip Flops, Blue')).click();
    expect(element(by.id('errors')).getText()).toContain('Sorry, Sorry, that item is out of stock.');
  })

  describe('using vouchers', function() {
    it('can apply a £5 discount voucher once an item has been added to the basket', function() {
      element.all(by.css(".addToBasketButton")).first().click();
      element(by.id('five-pound-voucher')).click();
      expect(element(by.id('basket-total')).getText()).toContain('£37.00');
    });

    it('can only apply one £5 discount voucher once an item has been added to the basket', function() {
      element.all(by.css(".addToBasketButton")).first().click();
      element(by.id('five-pound-voucher')).click();
      element(by.id('five-pound-voucher')).click();
      expect(element(by.id('basket-total')).getText()).toContain('£37.00');
    });

    it('can apply a £10 discount voucher when the basket subtotal is greater than £50', function () {
      element(by.cssContainingText('.shop-item', 'Almond Toe Court Shoes, Patent Black')).click();
      element(by.id('ten-pound-voucher')).click();
      expect(element(by.id('basket-total')).getText()).toContain('£89.00');
    });

    it('can apply a £15 discount voucher when the basket contains at least 1 item of footwear and total is at least £75', function() {
      element(by.cssContainingText('.shop-item', 'Almond Toe Court Shoes, Patent Black')).click();
      element(by.cssContainingText('.shop-item', 'Gold Button Cardigan, Black')).click();
      element(by.id('fifteen-pound-voucher')).click();
      expect(element(by.id('basket-total')).getText()).toContain('£251.00');
    });

    xit('displays an error message if £10 discount voucher is selected on a basket total below £50', function() {
      element.all(by.css(".addToBasketButton")).first().click();
      element(by.id('ten-pound-voucher')).click();
      expect(element(by.id('errors')).getText()).toContain('Sorry, you must spend over £50.');
    });

  });

});