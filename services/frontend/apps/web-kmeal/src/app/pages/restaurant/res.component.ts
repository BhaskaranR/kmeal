import { Component, OnInit} from "@angular/core";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-restaurant",
    moduleId: module.id,
    templateUrl: "./res.component.html",
    styleUrls: ['./res.component.scss'],
})
export class ResComponent implements OnInit{
    breakpoint:number;
    dia:any;
    constructor(public dialog:MatDialog){}
    public dishes:Array<any> = [
        {
            id:'321hdjsha',
            name:'Chicken Biryani',
            description:"Sautted Chicken with Fried rice, with special Indian Spcies",
            lables:['Indian','Spicy','Chicken','Rice'],
            restaurant:'Indian Diner',
            currentPrice:13.88,
            orignalprice:16.00,
            ordersCount:12,
            maxOrders:30,
            rating:5,
            expireTime:"02:00:00"
        },{
            id:'4372djakhx',
            name:'Chicken Curry',
            description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
            lables:['Indian','Spicy','Chicken','Rice','curry'],
            restaurant:'Indian Diner',
            currentPrice:13.88,
            orignalprice:16.00,
            ordersCount:12,
            maxOrders:30,
            rating:5,
            expireTime:"02:00:00"
        },{
            id:'4372djakhx',
            name:'Chicken Curry',
            description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
            lables:['Indian','Spicy','Chicken','Rice','curry'],
            restaurant:'Indian Diner',
            currentPrice:13.88,
            orignalprice:16.00,
            ordersCount:12,
            maxOrders:30,
            rating:5,
            expireTime:"02:00:00"
        },{
            id:'4372djakhx',
            name:'Chicken Curry',
            description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
            lables:['Indian','Spicy','Chicken','Rice','curry'],
            restaurant:'Indian Diner',
            currentPrice:13.88,
            orignalprice:16.00,
            ordersCount:12,
            maxOrders:30,
            rating:5,
            expireTime:"02:00:00"
        },{
            id:'4372djakhx',
            name:'Chicken Curry',
            description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
            lables:['Indian','Spicy','Chicken','Rice','curry'],
            restaurant:'Indian Diner',
            currentPrice:13.88,
            orignalprice:16.00,
            ordersCount:12,
            maxOrders:30,
            rating:5,
            expireTime:"02:00:00"
        },{
            id:'4372djakhx',
            name:'Chicken Curry',
            description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
            lables:['Indian','Spicy','Chicken','Rice','curry'],
            restaurant:'Indian Diner',
            currentPrice:13.88,
            orignalprice:16.00,
            ordersCount:12,
            maxOrders:30,
            rating:5,
            expireTime:"02:00:00"
        },{
            id:'4372djakhx',
            name:'Chicken Curry',
            description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
            lables:['Indian','Spicy','Chicken','Rice','curry'],
            restaurant:'Indian Diner',
            currentPrice:13.88,
            orignalprice:16.00,
            ordersCount:12,
            maxOrders:30,
            rating:5,
            expireTime:"02:00:00"
        },{
            id:'4372djakhx',
            name:'Chicken Curry',
            description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
            lables:['Indian','Spicy','Chicken','Rice','curry'],
            restaurant:'Indian Diner',
            currentPrice:13.88,
            orignalprice:16.00,
            ordersCount:12,
            maxOrders:30,
            rating:5,
            expireTime:"02:00:00"
        }
    ];

    ngOnInit(){
        this.breakpoint = this.generateBreakpoint(window.innerWidth);
    }

    onResize(event) {
        this.breakpoint = this.generateBreakpoint(event.target.innerWidth);
      }
  
    private generateBreakpoint(width){
        return (width <= 959 ) ? 1: (width <= 1279) ? 2: 3;
    }


    placeOrder(dish){

    }
}