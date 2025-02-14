import * as angular from 'angular';
import 'angular-route';
import { MyFirstController } from "../src/controllers/auth.Controller";
import { ProductCatalogController } from "../src/controllers/productCatalog.controller";
import { ShoppingCartController } from "../src/controllers/ShoppingCartController";
angular.module('myApp', ['ngRoute'])
    .controller('MyFirstController', MyFirstController)
    .controller('ProductCatalogController', ProductCatalogController)
    .controller('ShoppingCartController', ShoppingCartController)
    .config(function ($routeProvider) {
    $routeProvider
        .when('/product-catalog', {
        templateUrl: 'views/productCatalog.html',
        controller: 'ProductCatalogController',
        controllerAs: 'vm'
    })
        .when('/shopping-cart', {
        templateUrl: 'views/shoppingCart.html',
        controller: 'ShoppingCartController',
        controllerAs: 'vm'
    })
        .otherwise({
        redirectTo: '/product-catalog'
    });
});
