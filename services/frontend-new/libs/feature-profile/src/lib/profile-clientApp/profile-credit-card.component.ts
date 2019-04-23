import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'kmeal-nx-profile-client-credit-card',
    moduleId: module.id,
    templateUrl: './profile-credit-card.component.html'
})
export class ProfileCreditCardComponent implements OnInit{
    view:number = 1;
    isEmpty:boolean = true;
    myFg:FormGroup;
    constructor(public fb:FormBuilder){}
    ngOnInit(){
        this.myFg = this.fb.group({
            cardType:null,
            cardNumber:null,
            cardCCV:null,
            cardExpDate:null,
            name:null,
        });
    }
}