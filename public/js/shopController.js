clothesShop.controller('ShopController', [function() {
  var self = this;

  self.cart = [];


  self.addProduct = function(item) {
    self.cart.push(item);
  };

  self.productList = {
    "items": [
      { name: "Suede Shoes, Blue", 
        price: 42.00, 
        quantity: 4, 
        category: "Womens Footwear",
        images: [
          "images/blue-suede-shoes-2.jpg",
          "images/blue-suede-shoes-3.jpg",
          "images/blue-suede-shoes-4.jpg"
          ]
      },
      { name: "Almond Toe Court Shoes, Patent Black", 
        price: 99.00,
        quantity: 5, 
        category: "Womens Footwear", 
        images: [
          "images/almond-toe-court-shoes.jpeg"
          ]
      },
      { name: "Leather Driver Saddle Loafers, Tan", 
        price: 34.00,
        quantity: 12, 
        category: "Mens Footwear", 
        images: [
          "images/leather-driver-saddle-loafers.jpg"
          ]
      },
      { name: "Flip Flops, Red", 
        price: 19.00, 
        quantity: 6, 
        category: "Mens Footwear",
        images: [
          "images/flip-flops.jpg"
          ]
      },
      { name: "Flip Flops, Blue", 
        price: 19.00, 
        quantity: 0, 
        category: "Mens Footwear",
        images: [
          "images/flip-flops-blue.jpg"
          ]
      },
      { name: "Gold Button Cardigan, Black", 
        price: 167.00,
        quantity: 6, 
        category: "Womens Casual", 
        images: [
          "images/gold-button-cardigan.jpg"
          ]
      },
      { name: "Cotton Shorts, Medium Red", 
        price: 30.00,
        quantity: 5, 
        category: "Womens Casual", 
        images: [
          "images/cotton-shorts-red.jpeg"
          ]
      },
      { name: "Fine Stripe Short Sleeve Shirt, Grey", 
        price: 49.99,
        quantity: 9, 
        category: "Mens Casual", 
        images: [
          "images/short-sleeve-shirt-grey.jpeg"
          ]
      },
      { name: "Fine Stripe Short Sleeve Shirt, Green",
        price: 39.99, 
        quantity: 3, 
        category: "Mens Casual", 
        images: [
          "images/short-sleeve-shirt-green.jpg"
          ]
      },
      { name: "Bird Print Dress, Black", 
        price: 270.00,
        quantity: 10, 
        category: "Womens Formal", 
        images: [
          "images/bird-print-dress-black.jpeg"
          ]
      },
      { name: "Mid Twist Cut-Out Dress, Pink", 
        price: 540.00,
        quantity: 5, 
        category: "Womens Formal", 
        images: [
          "images/cut-out-dress-pink.jpeg"
          ]
      },
      { name: "Sharkskin Waistcoat, Charcoal", 
        price: 75.00,
        quantity: 6, 
        category: "Mens Formal", 
        images: [
          "images/waistcoat-grey.jpg"
          ]
      },
      { name: "Lightweight Patch Pocket Blazer, Deer", 
        price: 175.50, 
        quantity: 1, 
        category: "Mens Formal", 
        images: [
          "images/blazer-deer.jpeg"
          ]
      }
    ]
  };
}]);