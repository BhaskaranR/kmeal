import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ScatterUIService } from '@kmeal-nx/scatter';



@Component({
    selector: 'kmeal-nx-profile-client-credit-card',
    moduleId: module.id,
    templateUrl: './profile-credit-card.component.html'
})
export class ProfileCreditCardComponent implements OnInit{
    myFg:FormGroup;
    constructor(
        public fb:FormBuilder,
        public scatterUIService:ScatterUIService){}

    ngOnInit(){
        this.myFg = this.fb.group({
            token:['KMEAL',[Validators.required]],
            sendTo:['',[Validators.required]],
            amount:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            memo:['', [Validators.required]],
        });
    }

    onSubmit(){

    }

}