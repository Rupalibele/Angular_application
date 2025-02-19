import { IScopeCustom } from "../interfaces/iscope.interface";

export class ProductCatalogController {
    products = [
        { name: "Laptop", price: 50000, image: "https://example.com/images/laptop.jpg", description: "High-performance laptop" },
        { name: "Phone", price: 20000, image: "https://example.com/images/phone.jpg", description: "Latest smartphone" },
        { name: "Headphones", price: 3000, image: "https://example.com/images/headphones.jpg", description: "Noise-canceling headphones" }
    ];

    constructor($scope: IScopeCustom) {
        $scope['vm'] = this;
    }
}
