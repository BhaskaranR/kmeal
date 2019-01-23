import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DishOrderComponent } from "libs/ui/src/lib/dish-order/dish-order.component";


@Component({
  selector: "kmeal-nx-checkout",
  templateUrl: "./checkout.component.html",
})
export class CheckoutComponent implements OnInit {
    @Input() data:any;
    subTotal:number ;
    tax:number;
    fee:number;
    total:number
    constructor(public dialog: MatDialog,){}

    ngOnInit(){
        console.log('checkout')
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
}