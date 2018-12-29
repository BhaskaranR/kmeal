import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { restaurantQuery } from './search-bar.query';

@Injectable()
export class SearchBarService {
 
  constructor(public apollo: Apollo) {console.warn('Service created!') }
  searchString:string;
  results:{[key:string]:any};
  querySubscription:any;

  getSearchResult(lat, lng, radius, callback){
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
          this.results = data;
            callback(data);
        })
  }
}