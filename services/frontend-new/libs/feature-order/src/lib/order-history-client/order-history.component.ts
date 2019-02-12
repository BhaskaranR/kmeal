import { Component, OnInit } from "@angular/core";


@Component({
  selector: "kmeal-nx-order-history-client",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.scss"]
})
export class OrderHistoryClientComponent implements OnInit {

    orders :any[] = [{
      restaurant_name:'Indian Dinner',
      orders:['Chicken Curry'],
      statuses:[{
        time:'19:00:00 09/09/2019',
        status:'Order Confirmed'
      },{
        time:'19:05:00 09/09/2019',
        status:'Preparing'
      },{
        time:'20:00:00 09/09/2019',
        status:'Ready for Pickup'
      }]
    },
    {
      restaurant_name:'Pisillo Italian Panini',
      orders:['Beef Panini'],
      statuses:[{
        time:'19:00:00 09/09/2019',
        status:'Order Confirmed'
      },{
        time:'19:05:00 09/09/2019',
        status:'Preparing'
      },{
        time:'20:00:00 09/09/2019',
        status:'Ready for Pickup'
      }]
    }]
    constructor() {}

    ngOnInit(){}

}