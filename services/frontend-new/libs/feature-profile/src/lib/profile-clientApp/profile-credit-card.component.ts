import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CreditCardValidator } from 'ngx-credit-cards';
import { GetCreditCardsGQL,InsertCreditCardsGQL } from "../generated/graphql";
import { ScatterUIService } from '@kmeal-nx/scatter';
import { pluck, switchMap } from "rxjs/operators";


@Component({
    selector: 'kmeal-nx-profile-client-credit-card',
    moduleId: module.id,
    templateUrl: './profile-credit-card.component.html'
})
export class ProfileCreditCardComponent implements OnInit{
    myFg:FormGroup;
    username:string;
    cards:any;
    constructor(
        public fb:FormBuilder,
        public getCardGQL:GetCreditCardsGQL,
        public insertCardGQL:InsertCreditCardsGQL,
        public scatterUIService:ScatterUIService){}

    ngOnInit(){
        this.myFg = this.fb.group({
            cardType:['',[Validators.required]],
            cardNumber:['',[CreditCardValidator.validateCardNumber]],
            cardCvv:['', [CreditCardValidator.validateCardCvc]],
            cardExpDate:['', [CreditCardValidator.validateCardExpiry]],
            name:['', Validators.compose([Validators.required, Validators.minLength(2)])],
            zipcode:['',[Validators.required]],
            addr1:['',[Validators.required]],
            addr2:'',
            city:['',[Validators.required]],
            state:['',[Validators.required]],
        });

        console.log(this.scatterUIService.user);
        this.username = this.scatterUIService.user? this.scatterUIService.user.accountName : null;
        if (!this.username) return;
        this.getCardGQL.watch(this.getQuery(this.username))
            .valueChanges
            .pipe(pluck('data','kmeal_credit_card_info'))
            .subscribe(data =>{
                console.log('ccs : ', data);
                this.cards = data;
            })
    }

    onSubmit(){
        let variables = {
            objects:[{
                address_line_1: '',
                address_line_2: '212',
                card_cvv: 213,
                card_holder: 'shaun',
                card_num: 321321321321321,
                card_type: 'visa',
                city: 'Jamaica',
                country: 'USA',
                exp_date: '09-09-2019',
                postal_code: 11234,
                username: 'kmealadmin15'
            }]
        }

        this.insertCardGQL.mutate(variables)
        .subscribe(data => {
            console.log('added ', data);
        })
    }

    private getQuery(username) {
        return {
            where:{
                username:{
                    _eq:username
                }
            }
        }
    }
}