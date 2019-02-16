import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { imagesMapping } from './utils';
import { KmealCategoriesGQL, GetRestaurantsNearByGQL, KmealCategories, GetRestaurantsNearBy } from '../generated/graphql';
import { map, pluck } from 'rxjs/operators';
import {  combineLatest } from 'rxjs';
import { DishDetailPopupComponent } from 'libs/ui/src/lib/dish-detail/dish-detail-popup.component';
import { DishOrderComponent } from 'libs/ui/src/lib/dish-order/dish-order.component';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
    selector: 'kmeal-nx-home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor(
        public apollo: Apollo,
        public router: Router,
        public snackBar: MatSnackBar,
        private kmealCategoriesGQL: KmealCategoriesGQL,
        private getRestaurantsNearByGQL:GetRestaurantsNearByGQL,
        public dialog: MatDialog,
        protected localStorage: LocalStorage,
    ) {}

    cuisines: KmealCategories.KmealCategories[];

    restaurants: GetRestaurantsNearBy.GetRestaurantsNearby[];

    isReady:boolean = false;

    cuisineConfig: NguCarouselConfig = {
        grid: { xs: 2, sm: 2, md: 4, lg: 5, all: 0 },
        speed: 250,
        point: {
            visible: false
        },
        touch: true,
        loop: true,
        animation: 'lazy'
    };

    
    carConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
        speed: 250,
        point: {
            visible: false
        },
        touch: true,
        loop: true,
        animation: 'lazy'
    };


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

    ngOnInit() {
        this.loadUserProfile();
    }

    ngOnDestroy() {}

    private loadUserProfile(){
        const userProfile = this.localStorage.getItem("kmealUserProfile");

        if (!!userProfile && userProfile['location']){
            this.loadUserData(40.710237, -74.007810);
            return;
        }
        
        if (!navigator.geolocation) {
            this.loadUserData(40.710237, -74.007810);
            return;
        };

        navigator.geolocation.getCurrentPosition((position) => {
            this.loadUserData(40.710237, -74.007810);
        },(positionError) => {
            this.loadUserData(40.710237, -74.007810);
        });
    }

    private loadUserData(lat, lng){
        const cuisinesObs = this.kmealCategoriesGQL
            .watch({})
            .valueChanges
            .pipe(map(result => result.data.kmeal_categories.map(ca => {
                ca['img'] = imagesMapping[ca['title'].toLowerCase()] || imagesMapping['japanese'];
                return ca ;
            })));

        const restaurantsObs = this.getRestaurantsNearByGQL
            .watch({
                nearby: {
                    cuisine:'italian',
                    timeofoperation: "REGULAR",
                    lat: lat,
                    long: lng,
                    radius:10
                }
            })
            .valueChanges
            .pipe(pluck('data','getRestaurantsNearby'));

        const combined = combineLatest(cuisinesObs, restaurantsObs).subscribe(([data1, data2])=>{
            this.cuisines = data1;
            this.restaurants = data2 as any[];
            this.isReady = true;
            combined.unsubscribe();
        });   

        
    }
    
    onSearchCuisine(cuisine) {
        this.router.navigate(['./search'],{queryParams:{type:'CUISINE', value:cuisine.toLowerCase()}});
    }

    throwError(msg) {
        this.snackBar.open(msg, '', {
            duration: 2000
        });
    }

    openDishDetails(e){
        const dialogRef = this.dialog.open(
            DishDetailPopupComponent,
            {
                width: '650px',
                data: e
            });
      
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'ORDER'){
                this.orderDishNow();
            }
        });
    }

    orderDishNow(){
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


    restaurantDetails(res){
        this.router.navigate(['./restaurant/' + res.restaurant_id]);
    }
    
}
