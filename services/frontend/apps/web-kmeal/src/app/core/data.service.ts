import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { restaurantQuery ,categoriesQuery} from './queries/queries';
import { imagesMapping } from '../features/shared/utils/utils';

@Injectable()
export class DataService {
 
    constructor(public apollo: Apollo) {console.warn('Service created!') }
    searchInput:string;
    restaurants:any;
    cuisines:any;
    querySubscription:any;
    trendingDishes = [
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

    searchRestaurants(lat, lng, radius): Promise<any> { 
        return new Promise((resolve, reject) =>{
            console.log('searching restaurants...');
            let query = {
                query: restaurantQuery,
                variables: {
                    nearby: {
                        lat:lat,
                        long:lng,
                        radius:radius
                    },
                },
            }

            this.querySubscription = this.apollo
            .watchQuery(query)
            .valueChanges.subscribe(({data}) => {
                this.restaurants = data['getRestaurantsNearby'];
                this.restaurants.forEach(res=>{
                    res['img']= imagesMapping[res.name.toLowerCase()] || imagesMapping['japanese'];
                })
                console.log('found restaurants');
                resolve(this.restaurants)
            })

        })
    }

    getCuisines(): Promise<any> {
        return new Promise((resolve, reject)=>{
            console.log('calling cuisines');
            let query = {
                query: categoriesQuery,
            }
            this.querySubscription = this.apollo
            .watchQuery(query)
            .valueChanges
            .subscribe(({data}) => {
                this.cuisines = data['kmeal_categories'];
                console.log('found cuisines', this.cuisines);
                resolve(data['kmeal_categories']);
            });
        }) 
    }
}