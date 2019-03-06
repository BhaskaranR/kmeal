import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DishOrderComponent, DishData } from "@kmeal-nx/ui";
import { CartService } from "../../../../../libs/ui/src/lib/cart.service";


@Component({
  selector: "kmeal-nx-checkout",
  templateUrl: "./checkout.component.html",
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
    isEmpty:boolean = false;

    qtyOptions: Array<number> = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    constructor(public dialog: MatDialog,
        public cartService: CartService,
        private fb:FormBuilder){}

    async ngOnInit(){
        this.orders = await this.cartService.getOrders() || null;

        if (!this.orders || this.orders.length == 0) {
            this.isReady = true;
            this.isEmpty = true;
            return;
        }

        this.initForm();
        this.isReady = true;
        console.log(this.orders, this.cartService);
    }

    ngOnDestroy(){
        if (!!this.sub) {
            this.sub.unsubscribe();
        }

        if (!!this.orderSub){
            this.orderSub.unsubscribe();
        }
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

    changeOrder(order, idx){
        const isDynamic = order.dish.listingsByitemId[0].list_type == 'd' ? true : false;
        const price = parseFloat(order.dish.listingsByitemId[0].list_price.toFixed(2));


        let dishData : DishData = {
            sides:order.dish.listingsByitemId[0].listingItemSidessBylistingId, 
            name:order.dish.item_name,
            isDynamic:isDynamic,
            price:price,
            dish:order.dish,
            isToModify:true,
            order:order,
            index:idx,
          }
          
        const dialogRef = this.dialog.open(DishOrderComponent, {
            width: '650px',
            data: dishData
          });
      
        dialogRef.afterClosed().subscribe(result =>{
            if (result == 'close' || result == void 0) return;
            this.updateOrders(result);
        });
    }

    submitOrders(data){
        console.log('submit ', data);
    }

    private updateOrders(data){
        this.orders[data.index] = data;
        this.cartService.updateOrders(this.orders)
    }

    removeOrder(order, idx){
        this.orders.splice(idx, 1);
        this.cartService.updateOrders(this.orders);
    }
}