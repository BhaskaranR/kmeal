import { Component, OnInit, ViewChild } from "@angular/core";


@Component({
  selector: "kmeal-nx-checkout",
  templateUrl: "./checkout.component.html",
})
export class CheckoutComponent implements OnInit {
    constructor(){}

    ngOnInit(){
        console.log('checkout')
    }
}