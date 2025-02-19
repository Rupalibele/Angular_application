authmodule.controller("LoginController", function($scope){
    $scope.user = {
        "email":"Rupali@gmail.com",
        "password":"Rupali@123"
    };
    $scope.users = [
        {
            "email":"alex@gmail.com",
            "password":"alex1005"
        },
        {
            "email":"joy@gmail.com",
            "password":"joy123"
        },
        {
            "email":"ross@gmail.com",
            "password":"ross123"
        },
        {
            "email":"rachale@gmail.com",
            "password":"rachal123"
        },
        {
            "email":"monica@gmail.com",
            "password":"monica123"
        },
        {
            "email":"Phoebe@gmail.com",
            "password":"Phoebe123"
        }
    ]
    $scope.onValidate = function(){
        if($scope.user.email === "Rupali@gmail.com" && $scope.user.password === "Rupali@123"){
            console.log("Welcome");
        }else{
            console.log("Invalid");
        }
    }
})