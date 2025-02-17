import * as angular from 'angular';


export class ProductController {
  static $inject = ['$scope'];
  message: string;
  catalogs: Array<any>;


  constructor(private $scope: IDataScope) {
    this.message = 'Welcome to TypeScript!';
    this.catalogs= [
        {
            name: "lipstick",
            description: "A powerful laptop with Intel i7 processor, 16GB RAM, and 512GB SSD.",
            price: 799,
            image: "data:image/jpeg;base64,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"
        },
        {
            name: "",
            description: "HP Pavilion with Intel i5 processor, 8GB RAM, and 256GB SSD.",
            price: 649,
            image: "data:image/jpeg;base64,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"
        },
        {
            name: "MacBook Air",
            description: "Lightweight Apple laptop with M1 chip, 8GB RAM, and 256GB SSD.",
            price: 999,
            image: "data:image/jpeg;base64,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"
        },
        {
            name: "Lenovo ThinkPad X1",
            description: "Business laptop with Intel i7, 16GB RAM, 512GB SSD, and excellent build quality.",
            price: 1499,
            image: "data:image/jpeg;base64,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"
        }
    ];
    
    $scope['data'] = this;
  }
}


