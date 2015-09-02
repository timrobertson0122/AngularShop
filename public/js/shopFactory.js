clothesShop.factory('Products', ['Flash', function(Flash) {

    var service = {};
    var shoppingBasket = [];

    service.basketTotal = 0;
    service.shoppingBasket = shoppingBasket;
    service.fivePoundDiscount = false;
    service.tenPoundDiscount = false;
    service.fifteenPoundDiscount = false;

    service.productList = {
        "Womens Footwear": [{
            name: "Suede Shoes, Blue",
            price: 42.00,
            quantity: 4,
            category: "Womens Footwear",
            image: "images/blue-suede-shoes.jpg"
        }, {
            name: "Almond Toe Court Shoes, Patent Black",
            price: 99.00,
            quantity: 5,
            category: "Womens Footwear",
            image: "images/almond-toe-court-shoes.jpeg"
        }],
        "Womens Casual": [{
            name: "Gold Button Cardigan, Black",
            price: 167.00,
            quantity: 6,
            category: "Womens Casual",
            image: "images/gold-button-cardigan.jpg"
        }, {
            name: "Cotton Shorts, Medium Red",
            price: 30.00,
            quantity: 5,
            category: "Womens Casual",
            image: "images/cotton-shorts-red.jpeg"
        }],
        "Womens Formal": [{
            name: "Bird Print Dress, Black",
            price: 270.00,
            quantity: 10,
            category: "Womens Formal",
            image: "images/bird-print-dress-black.jpeg"
        }, {
            name: "Mid Twist Cut-Out Dress, Pink",
            price: 540.00,
            quantity: 5,
            category: "Womens Formal",
            image: "images/cut-out-dress-pink.jpeg"
        }],
        "Mens Footwear": [{
            name: "Leather Driver Saddle Loafers, Tan",
            price: 34.00,
            quantity: 12,
            category: "Mens Footwear",
            image: "images/leather-driver-saddle-loafers.jpg"
        }, {
            name: "Flip Flops, Red",
            price: 19.00,
            quantity: 6,
            category: "Mens Footwear",
            image: "images/flip-flops.jpg"
        }, {
            name: "Flip Flops, Blue",
            price: 19.00,
            quantity: 0,
            category: "Mens Footwear",
            image: "images/flip-flops-blue.jpg"
        }],
        "Mens Casual": [{
            name: "Fine Stripe Short Sleeve Shirt, Grey",
            price: 49.99,
            quantity: 9,
            category: "Mens Casual",
            image: "images/short-sleeve-shirt-grey.jpeg"
        }, {
            name: "Fine Stripe Short Sleeve Shirt, Green",
            price: 39.99,
            quantity: 3,
            category: "Mens Casual",
            image: "images/short-sleeve-shirt-green.jpg"
        }],
        "Mens Formal": [{
            name: "Sharkskin Waistcoat, Charcoal",
            price: 75.00,
            quantity: 6,
            category: "Mens Formal",
            image: "images/waistcoat-grey.jpg"
        }, {
            name: "Lightweight Patch Pocket Blazer, Deer",
            price: 175.50,
            quantity: 1,
            category: "Mens Formal",
            image: "images/blazer-deer.jpeg"
        }]
    };

    service.availableDiscounts = function() {
        service.fivePoundDiscount = true;
        service.tenPoundDiscount = true;
        service.fifteenPoundDiscount = true;
    };

    service.getBasketTotal = function() {
        var result = 0;
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
        }, 0);
    };

    service.discountTotal = function() {
        var result = service.subTotal() - service.basketTotal;
        return result;
    };

    service.itemAvailable = function(item) {
        return (parseInt(item.quantity) > 0);
    };

    service.addItemToBasket = function(item) {
        if (!service.itemAvailable(item)) {
            Flash.create('danger', 'Sorry, that item is out of stock.');
        } else {
            shoppingBasket.push(item);
            service.shoppingBasketVisible();
            service.availableDiscounts();
            item.quantity--;
        };
        service.getBasketTotal();
    };

    service.removeItemFromBasket = function(item) {
        shoppingBasket.pop(item);
        item.quantity++;
        service.shoppingBasketVisible();
        service.getBasketTotal();
    };

    service.emptyBasket = function() {
        for (var i = shoppingBasket.length -1; i >= 0; i--) {
            shoppingBasket[i].quantity++;
        }
        shoppingBasket.length = 0;
        shoppingBasket = [];
        service.shoppingBasketVisible();
        service.getBasketTotal();
    };

    service.shoppingBasketVisible = function() {
        if (service.shoppingBasket.length > 0) {
            return true;
        }
    };

    service.ShoesInBasket = function() {
        for (var i = shoppingBasket.length - 1; i >= 0; i--) {
            if (shoppingBasket[i].category.indexOf("Footwear") >= 0) {
                return true;
            }
        }
    };

    service.applyFivePoundDiscount = function() {
        if (service.fivePoundDiscount) {
            service.basketTotal -= 5.00;
            service.fivePoundDiscount = false;
        }
    };

    service.applyTenPoundDiscount = function() {
        if (service.basketTotal < 50.00) {
            Flash.create('danger', 'Sorry, you must spend over £50.');
        } else if (service.tenPoundDiscount) {
            service.basketTotal -= 10.00;
            service.tenPoundDiscount = false;
        }
    };

    service.applyFifteenPoundDiscount = function() {
        if (service.basketTotal < 75.00 || !service.ShoesInBasket()) {
            Flash.create('danger', 'Sorry, discount only available for orders over £75 and including at least one item of footwear');
        } else if (service.fifteenPoundDiscount) {
            service.basketTotal -= 15.00;
            service.fifteenPoundDiscount = false;
        }
    };

    return service;

}]);
