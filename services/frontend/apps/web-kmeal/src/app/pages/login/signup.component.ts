import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";


class User {
    username:string;
    password:string;
    confirmPassword:string;
}

@Component({
    selector: "app-signup",
    moduleId: module.id,
    templateUrl: "./signup.html",
    styleUrls: ['./signup-common.scss']
})
export class SignupComponent {
    constructor(private router: Router){}

    submit(){
        this.alert('under construction');
    }

    backToLogin(){
        this.router.navigateByUrl('');
    }

    alert(message: string) {

    }
}