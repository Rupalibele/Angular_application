var ProductCatalogController = /** @class */ (function () {
    function ProductCatalogController($scope) {
        this.products = [
            { name: "Laptop", price: 50000, image: "https://example.com/images/laptop.jpg", description: "High-performance laptop" },
            { name: "Phone", price: 20000, image: "https://example.com/images/phone.jpg", description: "Latest smartphone" },
            { name: "Headphones", price: 3000, image: "https://example.com/images/headphones.jpg", description: "Noise-canceling headphones" }
        ];
        $scope['vm'] = this;
    }
    return ProductCatalogController;
}());

