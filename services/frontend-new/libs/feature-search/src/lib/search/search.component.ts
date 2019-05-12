import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { map, switchMap, pluck } from "rxjs/operators";
import { KmealGetNearbyGQL } from "../generated/graphql";
import { MatSnackBar } from "@angular/material";
import {LocalStorage} from '@ngx-pwa/local-storage'

@Component({
    selector: "app-search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styles:[`
    .red-snackbar{
        background-color:red;
    }
    
    .to-align{
        padding:15px 20px 15px 20px;
    }`]
})
export class SearchComponent implements OnInit ,OnDestroy{

    breakpoint:number = 4;
    restaurants:any;
    routeParamSub:any;
    type:string;
    isFilterOpen:boolean = false;
    isReady:boolean = false;
    sortedBy:string = "Relevant";
    viewType:string = 'grid';
    filter:any = {};
    cuisines: string[] = ['Thai', 'American','Dinners','Cocktail Bars', 'Italian', 'Mexican','Seafood','Cafes','Portuguese','Austrailian','Desserts','Beer, Wine & Spirits','Lebanese','French','Vitenamese','Japanese','Korean','American (Traditonal)','Mediterranean','Hawalian','Cantonese','Ramen','Brazillian','Taiwanese','Chinese','Filipino','Vegan','Malaysian','Hala','Asian Fusion','Turkish','Greek','Latin American','Cuban','Indian','South Indian'];
    searchMetadata = {
        cuisines: this.cuisines,
        distances:{10:'1 block', 30:'4 blocks', 60:'Walking', 80:'Biking',100:'Driving'},
        ratings:{0:'NA',1:'1 star',2:'2 stars',3:'3 stars',4:'4 stars',5:'5 stars'},
        prices:{0:'NA',1:'$',2:'$$',3:'$$$',4:'$$$$'}
    };
    objectKeys = Object.keys;
    searchForm = {
        cuisine:null,
        priceLevel:null,
        rating:null,
        radius:null,
    }

    constructor(
        public route:ActivatedRoute,
        public snackBar: MatSnackBar,
        public localStorage:LocalStorage,
        private getRestaurantsNearByGQL:KmealGetNearbyGQL,
        public router: Router){};
    
    
    async ngOnInit() {
        await this.populateFilter();
        this.breakpoint = this.generateBreakpoint(window.innerWidth);
        this.routeParamSub = this.route
        .queryParams
        .pipe(
            switchMap((params:any)=>{
                this.isReady = false;
                switch(params.type) 
                {
                    case 'CUISINE' : {
                        this.type = "Cuisine : " + params.value;
                        this.filter.cuisine = this.searchForm.cuisine = params.value;
                        break;
                    }

                    case 'ADDRESS':{
                        this.type = 'Near By';
                        this.filter.lat = parseFloat(params.lat);
                        this.filter.long = parseFloat(params.lng);
                        this.filter.radius = this.searchForm.radius = parseFloat(params.radius);
                        break;
                    }

                    default :{
                        throw new Error('ERROR!No Cuisine Type is Found')
                    }
                }

                return this.getRestaurantsNearByGQL
                            .watch({args:this.filter})
                            .valueChanges
                            .pipe(pluck('data','getRestaurantsNearby'));
            })
        )
        .subscribe(data => {
            this.restaurants = data;
            this.isReady = true;
        }, (e) => {
            this.throwError(e);
        })
 
    }
    
    onResize(event) {
        this.breakpoint = this.generateBreakpoint(event.target.innerWidth);
    }
  
    private generateBreakpoint(width){
        return (width <= 959 ) ? 1: (width <= 1279) ? 3: 4;
    }

    ngOnDestroy(){
        this.routeParamSub.unsubscribe();
    }

    throwError(msg) {
        this.snackBar.open(msg, '', {
            duration: 10000,
            panelClass: ['red-snackbar']
        });
    }

    restaurantDetails(res){
        this.router.navigate(['./restaurant/' + res.restaurant_id]);
    }

    changeView(type){
        this.viewType = type;
    }

    private async populateFilter(){
        return new Promise((res, rej)=>{
            this.localStorage.getItem('user').subscribe((user:any) => {
                console.log(user);
                this.filter = {
                    cuisine:null,
                    latitude:user['lat'],
                    longitude:user['lng'],
                    radius: 10,
                    timeofop: 'REGULAR'
                }
                res();
            })
        })
    }

    onSearch(e){
        e.preventDefault();
    }

    onFiltering(type, val, display) {
        if(type !== 'cuisine') val = parseInt(val);
        else val = val.toLowerCase();
        
        this.filter[type] = val;
        this.searchForm[type] = display;
        delete this.filter.priceLevel;
        console.log(type, val, display, this.filter);
        this.isReady = false;
        this.getRestaurantsNearByGQL
                            .watch({args:this.filter})
                            .valueChanges
                            .pipe(pluck('data','getRestaurantsNearby'))
                            .subscribe(data => {
                                this.restaurants = data;
                                this.isReady = true;
                            }, (e) =>{
                                this.throwError(e);
                            })
    }
}