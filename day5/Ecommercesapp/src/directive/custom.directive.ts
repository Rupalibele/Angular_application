// The directive definition

export function myDirective(): ng.IDirective {
    return {
      restrict: 'E', // Restrict the directive to element type only
      template: `<div>
                  <p>{{ ctrl.message }}</p>
                  <button ng-click="ctrl.changeMessage()">Change Message</button>
                 </div>`,
      controller: MyFirstController,
      controllerAs: 'ctrl',
      bindToController: true // Bind the controller to the directive's scope
    };
    }
  
  class MyFirstController {
    static $inject = ['$scope'];
    message: string;
  
    constructor(private $scope: ng.IScope) {
      this.message = 'Hello, World!';
    }
  
    changeMessage() {
      this.message = 'You have clicked the button!';
    }
  }
  