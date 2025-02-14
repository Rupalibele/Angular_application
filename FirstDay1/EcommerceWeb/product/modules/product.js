var app = angular.module("transflower", []);

app.controller("ProductController", function($scope) {
    // Initialize product model
    $scope.product = {
        productId: "",
        productName: "",
        productPrice: "",
        productDescription: ""
    };

    // Sample products
    $scope.products = [
        { productId: "1", productName: "Book", productPrice: "50", productDescription: "It is a good Book" },
        { productId: "2", productName: "Pen", productPrice: "10", productDescription: "It is a blue Pen" },
        { productId: "3", productName: "Pencil", productPrice: "5", productDescription: "It is a good pencil" },
        { productId: "4", productName: "Eraser", productPrice: "5", productDescription: "It is a well designed pencil" },
        { productId: "5", productName: "Phone", productPrice: "50000", productDescription: "It is a well designed Phone" }
    ];

    // Function to add a new product
    $scope.addProduct = function() {
        if ($scope.product.productId && $scope.product.productName && $scope.product.productPrice && $scope.product.productDescription) {
            // Add product to the array
            $scope.products.push({
                productId: $scope.product.productId,
                productName: $scope.product.productName,
                productPrice: $scope.product.productPrice,
                productDescription: $scope.product.productDescription
            });

            // Show success message
            alert("Product Added Successfully");

            // Clear form inputs after adding
            $scope.product = {
                productId: "",
                productName: "",
                productPrice: "",
                productDescription: ""
            };
        } else {
            alert("Please fill all fields before adding a product!");
        }
    };
});
