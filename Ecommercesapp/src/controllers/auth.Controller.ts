import { IScopeCustom } from "../interfaces/iscope.interface";


export class MyFirstController{
    name!:string;
    user ={
         "email":"rupali123@gmail.com",
        "password":"test@5390"
    };
    users=[{"email":"test234@gamil.com",
            "password":"123"
        },
        {
            "email":"test13@gamil.com",
            "password":"1234"
        }
    ]


    onValidate(){
        if(this.user.email ==="rupali123@gmail.com" && this.user.password ==="test@123"){
            console.log("Welcome To Store");
            alert("Welcome To Store");
        }else{
            console.log("Invalid");
            alert("Invalid");
        }
    }
    constructor($scope:IScopeCustom){
        $scope['vm']=this;
    }
    
   
}