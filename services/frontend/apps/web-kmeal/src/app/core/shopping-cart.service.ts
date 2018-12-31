import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

interface Item {
    name:string,
    restaurantId:string,
    orderTime:string,
    pickupTime:string,
    price:string,
    addtionals:Additional[] | null,
}

interface Additional {
    name:string,
    value:string[] | null
}

@Injectable()
export class CartService {
 
    constructor(public apollo: Apollo) {console.warn('Service created!') }

}