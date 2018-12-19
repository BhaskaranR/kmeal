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
    selector: "profile",
    moduleId: module.id,
    templateUrl: "./profile.html",
    styleUrls: ['./profile-common.scss']
})
export class ProfileComponent {
    constructor(){}
}