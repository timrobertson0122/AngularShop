describe('factory: Products', function() {

    var products;

    beforeEach(function() {
        module('ClothesShop');
    });

    beforeEach(inject(function(Products) {
        products = Products
        sampleItemShoes = {
            name: "Suede Shoes, Blue",
            price: 42.00,
            quantity: 4,
            category: "Womens Footwear"
        };
        sampleItemNotShoes = {
            name: "Cotton Shorts, Medium Red",
            price: 30.00,
            quantity: 5,
            category: "Womens Casual"
        };
    }));

    describe('shopping basket', function() {

        it('is empty upon initialisation', function() {
            expect(products.shoppingBasket).toEqual([]);
        });

        it('is hidden upon initialisation', function() {
            expect(products.shoppingBasketVisible).toEqual(false);
        });

        it('has a total of zero upon initialisation', function() {
            expect(products.basketTotal).toEqual(0);
        });

        it('can add a product to the shopping basket', function() {
            products.addItemToBasket(sampleItemShoes);
            expect(products.shoppingBasket).toEqual([sampleItemShoes]);
        });

        it('sets the shopping basket to visible when it contains at least one item', function() {
            products.addItemToBasket(sampleItemShoes);
            expect(products.shoppingBasketVisible).toEqual(true);
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

        it('can empty the shopping basket of all products', function() {
            products.addItemToBasket(sampleItemShoes);
            products.addItemToBasket(sampleItemShoes);
            products.emptyBasket();
            expect(products.shoppingBasket).toEqual([]);
        });

        it('sets the shopping basket to hidden when all items are removed', function() {
            products.addItemToBasket(sampleItemShoes);
            products.emptyBasket();
            expect(products.shoppingBasketVisible).toEqual(false);
        });

        it('knows the total cost of the products in the shopping basket', function() {
            products.addItemToBasket(sampleItemShoes);
            products.addItemToBasket(sampleItemNotShoes);
            expect(products.basketTotal).toEqual(72.00);
        });

        it('adding a product to the shopping basket reduces that products quantity by one', function() {
            expect(sampleItemShoes.quantity).toEqual(4);
            products.addItemToBasket(sampleItemShoes);
            expect(sampleItemShoes.quantity).toEqual(3);
        });

        it('wont add a product to the shopping basket when its available quantity is less than one', function() {
            for (var i = 5; i >= 0; i--) {
                products.addItemToBasket(sampleItemShoes);
            };
            expect(products.shoppingBasket.length).toEqual(4);
        });
    });

    describe('vouchers', function() {

        it('can apply a £5 voucher to any order', function() {
            products.addItemToBasket(sampleItemShoes);
            expect(products.basketTotal).toEqual(42);
            expect(products.fivePoundDiscount).toEqual(true);
            products.applyFivePoundDiscount();
            expect(products.basketTotal).toEqual(37);
        });

        it('will only apply a £10 voucher to orders totalling at least £50', function() {
            products.addItemToBasket(sampleItemShoes);
            products.applyTenPoundDiscount();
            expect(products.basketTotal).toEqual(42);
            products.addItemToBasket(sampleItemShoes);
            expect(products.tenPoundDiscount).toEqual(true);
            products.applyTenPoundDiscount();
            expect(products.basketTotal).toEqual(74);
        });

        it('will only apply a £15 voucher if the order contains shoes and is greater than £75 in value', function() {
            products.addItemToBasket(sampleItemNotShoes);
            products.applyFifteenPoundDiscount();
            expect(products.basketTotal).toEqual(30);
            products.addItemToBasket(sampleItemNotShoes);
            products.addItemToBasket(sampleItemNotShoes);
            products.applyFifteenPoundDiscount();
            expect(products.basketTotal).toEqual(90);
            products.addItemToBasket(sampleItemShoes);
            expect(products.fifteenPoundDiscount).toEqual(true);
            products.applyFifteenPoundDiscount();
            expect(products.basketTotal).toEqual(117);
        });

        it('will only apply the £5 voucher once', function() {
            products.addItemToBasket(sampleItemNotShoes);
            products.applyFivePoundDiscount();
            products.applyFivePoundDiscount();
            expect(products.basketTotal).toEqual(25);
        });

        it('will only apply the £10 voucher once', function() {
            products.addItemToBasket(sampleItemShoes);
            products.addItemToBasket(sampleItemShoes);
            products.applyTenPoundDiscount();
            products.applyTenPoundDiscount();
            expect(products.basketTotal).toEqual(74);
        });

        it('will only apply the £15 voucher once', function() {
            products.addItemToBasket(sampleItemShoes);
            products.addItemToBasket(sampleItemShoes);
            products.addItemToBasket(sampleItemNotShoes);
            products.applyFifteenPoundDiscount();
            products.applyFifteenPoundDiscount();
            expect(products.basketTotal).toEqual(99);
        });

        it('removes the £5 voucher when the shopping basket is empty', function() {
            products.addItemToBasket(sampleItemNotShoes);
            products.applyFivePoundDiscount();
            products.removeItemFromBasket(sampleItemNotShoes);
            expect(products.basketTotal).toEqual(0);
        });

        it('removes the £10 voucher when it is no longer valid', function() {
            products.addItemToBasket(sampleItemShoes);
            products.addItemToBasket(sampleItemShoes);
            products.applyTenPoundDiscount();
            expect(products.basketTotal).toEqual(74);
            products.removeItemFromBasket(sampleItemShoes);
            expect(products.basketTotal).toEqual(42);
        });

        it('removes the £15 voucher when it is no longer valid', function() {
            products.addItemToBasket(sampleItemNotShoes);
            products.addItemToBasket(sampleItemNotShoes);
            products.addItemToBasket(sampleItemShoes);
            products.applyFifteenPoundDiscount();
            expect(products.basketTotal).toEqual(87);
            products.removeItemFromBasket(sampleItemShoes);
            expect(products.basketTotal).toEqual(60);
        })
    });
});
