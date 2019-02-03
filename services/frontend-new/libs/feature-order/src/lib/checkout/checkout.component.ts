import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DishOrderComponent } from "libs/ui/src/lib/dish-order/dish-order.component";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: "kmeal-nx-checkout",
  templateUrl: "./checkout.component.html",
  styles:[`
  .card-radio-group {
    display: inline-flex;
    flex-direction: row;
  }`]
})
export class CheckoutComponent implements OnInit {
    @Input() data:any;
    subTotal:number ;
    tax:number;
    fee:number;
    total:number;
    paymentOption:number;
    theForm:FormGroup;
    sub:any;

    constructor(public dialog: MatDialog,
        private fb:FormBuilder){
            this.initForm();
        }

    ngOnInit(){
   
    }

    private initForm(){
        this.theForm = this.fb.group({
            'paymentMethod':[null,[
                Validators.required,
            ]],
            'cardType':[null,[
                Validators.required,
            ]],
            'cardNumber':[null,[
                Validators.required,
                Validators.minLength(19)
            ]],
            'firstName':[null,[
                Validators.required,
            ]],
            'lastName':[null,[
                Validators.required,
            ]],
            'expDate':[null,[
                Validators.required,
            ]],
            'cvv':[null,[
                Validators.required,
                Validators.minLength(3),
            ]],
            'country':[null,[
                Validators.required,
            ]],
            'zipcode':[null,[
                Validators.required,
                Validators.minLength(5),
            ]],
            'saved':[false,[
                Validators.required,
            ]]
        })
        
        this.sub = this.theForm.valueChanges.subscribe((data)=>{
            console.log(data);
        });
    }

    changeOrder(){
        let data = {
            name:'Chicken noodle',
            id:'hxusa2432nk',
            specifications:[
                {
                    type:'number',
                    inputs:'',
                    name:'Quantity',
                    value:null,
                },{
                    type:'select',
                    inputs:['Mild','Medium','Extra Spicy'],
                    value:null,
                    name:'Spicy Level'
                },{
                    type:'multiple',
                    inputs:['extra shrimp','extra chicken breast','salad'],
                    name:'AddOn',
                    value:null,
                },{
                    type:'string',
                    inputs:'',
                    name:'Other Instructions',
                    value:null
                }
            ]
        }

        const dialogRef = this.dialog.open(DishOrderComponent, {
            width: '650px',
            data: data
          });
      
        dialogRef.afterClosed().subscribe(result => {
            console.log('closed', result);
        });
    }

    submitOrders(data){
        console.log('submit ', data);
    }
}