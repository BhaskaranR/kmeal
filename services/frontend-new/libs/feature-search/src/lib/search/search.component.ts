import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { map, switchMap, pluck } from "rxjs/operators";
import { GetRestaurantsNearByGQL } from "../generated/graphql";
import { MatSnackBar } from "@angular/material";
import {LocalStorage} from '@ngx-pwa/local-storage';

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
    restaurants:Array<any>;
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
        distances:['1 block', '4 blocks', 'Walking', 'Biking','Driving'],
        ratings:['0','1','2','3','4','5'],
        prices:['$','$$','$$$','$$$$']
    }
    constructor(
        public route:ActivatedRoute,
        public snackBar: MatSnackBar,
        public localStorage:LocalStorage,
        private getRestaurantsNearByGQL:GetRestaurantsNearByGQL,
        public router: Router){};
    
    
    async ngOnInit() {
        await this.populateFilter();
        this.breakpoint = this.generateBreakpoint(window.innerWidth);
        this.routeParamSub = this.route
        .queryParams
        .pipe(
            switchMap((params)=>{
                this.isReady = false;
                if (!params.type ) {
                    this.throwError('ERROR! No cuisine type is found');
                    return;
                } 

                if (params.type === 'CUISINE'){
                    this.type = "Cuisine : " + params.value;
                    this.filter.cuisine = params.value;
                    return this.getRestaurantsNearByGQL
                            .watch({nearby:this.filter})
                            .valueChanges
                            .pipe(pluck('data','getRestaurantsNearby'));
                }

                
                if (params.type == 'ADDRESS') {
                    this.type = 'Near By';
                    this.filter.lat = parseFloat(params.lat);
                    this.filter.long = parseFloat(params.lng);
                    this.filter.radius = parseFloat(params.radius);
                    return this.getRestaurantsNearByGQL
                            .watch({nearby:this.filter})
                            .valueChanges
                            .pipe(pluck('data','getRestaurantsNearby'));
                }
            })
        )
            .subscribe(params => {
                console.log("got search results : ", params);
                this.restaurants = params;
                this.isReady = true;
            }, (err)=>{
                this.throwError(err);
            });
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
                    timeofoperation: "REGULAR",
                    lat: user['lat'],
                    long:user['lng'],
                    radius:10
                }
                res();
            })
        })
    }

    onSearch(e){
        e.preventDefault();
    }
}