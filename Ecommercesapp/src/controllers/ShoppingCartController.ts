import { IScopeCustom } from "../interfaces/iscope.interface";

export class ShoppingCartController {
    cart: any[] = [];

    addToCart(product: any) {
        this.cart.push(product);
        alert(`${product.name} added to cart`);
    }

    removeFromCart(product: any) {
        this.cart = this.cart.filter(item => item !== product);
    }

    getTotal(): number {
        return this.cart.reduce((total, product) => total + product.price, 0);
    }

    constructor($scope: IScopeCustom) {
        $scope['vm'] = this;
    }
}
