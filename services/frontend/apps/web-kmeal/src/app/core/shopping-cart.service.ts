import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

interface Item {
    name:string,
    id:string,
    restaurantId:string,
    orderTime:string,
    pickupTime:string,
    price:number,
    addtionals:Additional[] | null,
}

interface Additional {
    name:string,
    value:string
}

@Injectable()
export class CartService {

    orders:Item[] = [
        {
            name:"Chicken Noodle",
            id:"xsjhh231",
            restaurantId:"dshkahj221",
            orderTime:"10:10:00 09/09/2018",
            pickupTime:"12:00:00 09/10/2018",
            price:13.00,
            addtionals:[{
                name:'Spicy',
                value:"Medium"
            }]
        },
        {
            name:"Chicken Noodle",
            id:"xsjhh231",
            restaurantId:"dshkahj221",
            orderTime:"10:10:00 09/09/2018",
            pickupTime:"12:00:00 09/10/2018",
            price:13.00,
            addtionals:[{
                name:'Spicy',
                value:"Medium"
            }]
        },
    ]
 
    constructor(public apollo: Apollo) {console.warn('Service created!') }

}