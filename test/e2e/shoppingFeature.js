describe('Clothes Shopping Site', function() {
    beforeEach(function() {
        browser.get('http://localhost:4567');
    });

    it('has a title', function() {
        expect(browser.getTitle()).toEqual('Angular Shop');
    });

    it('has a list of products with their price etc', function() {
        expect(element(by.cssContainingText('.shop-item', 'Almond Toe Court Shoes, Patent Black')).getText()).toContain("Court Shoes");
    });

    it('initialises with a hidden shopping basket', function() {
        expect(element(by.css('.shopping-basket')).isDisplayed()).toBe(false);
    });

    it('the shopping basket displays a total of £0.00 before any items are added', function() {
        expect(element(by.css('.basket-header-total')).getText()).toContain('£0.00');
    });

    it('can add a product to the shopping basket, and show the basket total', function() {
        element(by.cssContainingText('.shop-item', 'Almond Toe Court Shoes, Patent Black')).click();
        expect(element(by.css('.basket-header-total')).getText()).toContain('£99.00');
        expect(element(by.css('.shopping-basket')).getText()).toContain('Court Shoes');
    });

    it('can remove a product from the shopping basket, and reset the total to zero', function() {
        element.all(by.id("addToBasketButton")).first().click();
        element(by.css(".remove")).click();
        expect(element(by.css('.shopping-basket')).isDisplayed()).toBe(false);
        expect(element(by.css('.basket-header-total')).getText()).toContain('£0.00');
    });

    xit('cannot add an out of stock item to the basket', function() {
        element(by.cssContainingText('.shop-item', 'Flip Flops, Blue')).click();
        expect(element(by.css('errors')).getText()).toContain('Sorry, Sorry, that item is out of stock.');
    })

    describe('using vouchers', function() {
        it('can apply a £5 discount voucher once an item has been added to the basket', function() {
            element(by.cssContainingText('.shop-item', 'Almond Toe Court Shoes, Patent Black')).click();
            element(by.id('five-pound-voucher')).click();
            expect(element(by.css('.basket-total')).getText()).toContain('£94.00');
        });

        it('can only apply one £5 discount voucher once an item has been added to the basket', function() {
            element(by.cssContainingText('.shop-item', 'Almond Toe Court Shoes, Patent Black')).click();
            element(by.id('five-pound-voucher')).click();
            element(by.id('five-pound-voucher')).click();
            expect(element(by.css('.basket-total')).getText()).toContain('£94.00');
        });

        it('can apply a £10 discount voucher when the basket subtotal is greater than £50', function() {
            element(by.cssContainingText('.shop-item', 'Almond Toe Court Shoes, Patent Black')).click();
            element(by.id('ten-pound-voucher')).click();
            expect(element(by.css('.basket-total')).getText()).toContain('£89.00');
        });

        it('can apply a £15 discount voucher when the basket contains at least 1 item of footwear and total is at least £75', function() {
            element(by.cssContainingText('.shop-item', 'Almond Toe Court Shoes, Patent Black')).click();
            element(by.id('fifteen-pound-voucher')).click();
            expect(element(by.css('.basket-total')).getText()).toContain('£84.00');
        });

    });

});
