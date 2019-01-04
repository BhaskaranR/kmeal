import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { imagesMapping } from './utils';
import { KmealCategoriesGQL, GetRestaurantsNearByGQL } from '../generated/graphql';
import { MediaMatcher } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
        public changeDetectorRef: ChangeDetectorRef, 
        public media: MediaMatcher,
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = ()=> changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
     }

    private _mobileQueryListener: () => void;
    mobileQuery: MediaQueryList;
  

    cuisines$: Observable<{ title: string; img: any; }[]>;

    dishes: Array<any>;
    restaurants$: Observable<any[]>;

    cuisineConfig: NguCarouselConfig = {
        grid: { xs: 2, sm: 2, md: 4, lg: 6, all: 0 },
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
        loop: false,
        animation: 'lazy'
    };

    isReady: boolean = false;
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
        this.kmealCategoriesGQL
            .watch()
            .valueChanges
            .pipe(map(result => result.data.kmeal_categories.map(ca => {
                return {
                    title:ca.title,
                    img:imagesMapping[ca['title'].toLowerCase()] || imagesMapping['japanese'],
                }
            }))).subscribe(resu =>{
                console.log(resu);
            });
        
        console.log('reading restaurants data');
        this.restaurants$ = this.getRestaurantsNearByGQL
            .watch({
                nearby:{
                    lat:11,
                    long:11,
                    radius:5
                }
            })
            .valueChanges
            .pipe(map(result => {console.log('got data, ', result);return result.data.getRestaurantsNearby}));

        this.isReady=true;
    }

    ngOnDestroy() {
        
    }

    onSearch(type, cuisine) {
        console.log(type,cuisine);
    }

    throwError(msg) {
        this.snackBar.open(msg, '', {
            duration: 2000
        });
    }

    navigate(e) {
        this.router.navigate([e.url], { queryParams: { value: e.id } });
    }
    
}
