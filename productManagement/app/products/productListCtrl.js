(function () {
  angular.module("productManagement")
    .controller("ProductListCtrl", ProductListCtrl);

  function ProductListCtrl() {
    var vm = this;
    vm.products = [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2009",
        "description": "Leaf rake with 48-inch",
        "cost": 9.00,
        "price": 19.95,
        "category": "garden",
        "tags": [ "leaf", "tool" ],
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Leaf-Rake.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2013",
        "description": "Curved claw steel hammer",
        "cost": 1.00,
        "price": 8.99,
        "category": "toolbox",
        "tags": [ "tool" ],
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/14358/mystica-Hammer.png"      
      }
      ];
  }
} ());