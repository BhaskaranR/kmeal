import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DishOrderComponent } from "@kmeal-nx/ui";
import { CartService } from "../../../../../libs/ui/src/lib/cart.service";

interface OrderSide {
    name:string
}

@Component({
  selector: "kmeal-nx-checkout",
  templateUrl: "./checkout.component.html",
  styles:[`
  .card-radio-group {
    display: inline-flex;
    flex-direction: row;
  }`]
})
export class CheckoutComponent implements OnInit, OnDestroy {
    @Input() data:any;
    subTotal:number ;
    tax:number;
    fee:number;
    total:number;
    paymentOption:number;
    paymentForm:FormGroup;
    orderForm:FormGroup;
    sub:any;
    orderSub:any;
    orders:any[] | any;
    isReady:boolean = false;

    constructor(public dialog: MatDialog,
        public cartService: CartService,
        private fb:FormBuilder){}

    async ngOnInit(){
        this.orders = await this.cartService.getOrders();
        this.initForm();
        this.isReady = true;
        console.log(this.orders, this.cartService);
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
        this.orderSub.unsubscribe();
    }

    private initForm(){
        
        this.paymentForm = this.fb.group({
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
        
        this.sub = this.paymentForm.valueChanges.subscribe((data)=>{
            console.log(data);
        });

        this.orderForm = this.fb.group({
            'test':'',
        });

        this.orderSub = this.orderForm.valueChanges.subscribe(data => {
            console.log(data);
        })
    }

    changeOrder(){
        const dialogRef = this.dialog.open(DishOrderComponent, {
            width: '650px',
            data: this.orders
          });
      
        dialogRef.afterClosed().subscribe(result => {
            console.log('closed', result);
        });
    }

    submitOrders(data){
        console.log('submit ', data);
    }
}