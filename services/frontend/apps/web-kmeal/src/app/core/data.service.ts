import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { restaurantQuery } from './queries/queries';

@Injectable()
export class DataService {
 
    constructor(public apollo: Apollo) {console.warn('Service created!') }
    searchInput:string;
    restaurants:{[key:string]:any};
    cuisines:any[];
    querySubscription:any;

    searchRestaurants(lat, lng, radius, callback){
    this.querySubscription = this.apollo
        .watchQuery({
        query: restaurantQuery,
        variables: {
            nearby: {
                lat:lat,
                long:lng,
                radius:radius
            },
        },
        })
        .valueChanges.subscribe(({data}) => {
            this.restaurants = data;
            callback(data);
        })
    }


}