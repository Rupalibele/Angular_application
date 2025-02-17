import * as angular from 'angular';

export class AuthController {
  static $inject = ['$scope'];
  message: string;
  users: Array<any>;


  constructor(private $scope: IDataScope) {
    this.message = 'Welcome to TypeScript!';
    this.users=[
      { name: 'rupali bele', email: 'rupali@gmail.com' },
    ];
    
    $scope['data'] = this;
  }
}


//angular.module('myApp').controller('MyController', MyController);
