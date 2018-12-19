import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

class User {
    username:string;
    password:string;
    confirmPassword:string;
}

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.html",
    styleUrls: ['./login-common.css']
})
export class LoginComponent {
    isLoggingIn = false;
    processing = false;
    user: User;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page, private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new User();
    }


    submit() {
        if (!this.user.username || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.alert('Under Construction');
    }

    register() {
        this.router.navigateByUrl('./signup');
    }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}