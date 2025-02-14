var AuthController = /** @class */ (function () {
    function AuthController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to TypeScript!';
        this.users = [
            { name: 'Shaikh Nasir', email: 'nasir@gmail.com' },
        ];
        $scope['data'] = this;
    }
    AuthController.$inject = ['$scope'];
    return AuthController;
}());
export { AuthController };
//angular.module('myApp').controller('MyController', MyController);
