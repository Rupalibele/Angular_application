var ShoppingCartController = /** @class */ (function () {
    function ShoppingCartController($scope) {
        this.cart = [];
        $scope['vm'] = this;
    }
    ShoppingCartController.prototype.addToCart = function (product) {
        this.cart.push(product);
        alert("".concat(product.name, " added to cart"));
    };
    ShoppingCartController.prototype.removeFromCart = function (product) {
        this.cart = this.cart.filter(function (item) { return item !== product; });
    };
    ShoppingCartController.prototype.getTotal = function () {
        return this.cart.reduce(function (total, product) { return total + product.price; }, 0);
    };
    return ShoppingCartController;
}());

