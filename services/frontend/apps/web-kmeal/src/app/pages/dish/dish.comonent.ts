import { Component, ElementRef, ViewChild } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CheckoutDialogComponent } from "./checkout.component";

@Component({
    selector: "app-dish",
    moduleId: module.id,
    templateUrl: "./dish.component.html",
    styleUrls: []
})
export class DishComponent {
    dia:any;
    constructor(public dialog:MatDialog){}
    checkout(){
        this.dia = this.dialog.open(CheckoutDialogComponent, {
            width:'300px',
            data:{name:'Shaun'}
        })
    }
}