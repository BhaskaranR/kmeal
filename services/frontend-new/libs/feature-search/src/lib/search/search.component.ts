import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { GetRestaurantsNearByGQL } from "../generated/graphql";
import { MatSnackBar } from "@angular/material";

@Component({
    selector: "app-search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styles:[`
    .red-snackbar{
        background-color:red;
    }`]
})
export class SearchComponent implements OnInit ,OnDestroy{

    breakpoint:number;
    restaurants$:Observable<any>;
    routeParamSub:any;
    type:string;
    isFilterOpen:boolean = false;

    constructor(
        public route:ActivatedRoute,
        public snackBar: MatSnackBar,
        private getRestaurantsNearByGQL:GetRestaurantsNearByGQL){};
    
    
    ngOnInit() {
        this.routeParamSub = this.route
        .queryParams
        .pipe(switchMap((params)=>{
            console.log(params);
            this.restaurants$ = this.getRestaurantsNearByGQL
            .watch({
                nearby:{
                    lat:parseFloat(params.lat),
                    long:parseFloat(params.lng),
                    radius:parseFloat(params.radius),
                }
            })
            .valueChanges
            .pipe(map(result => result.data.getRestaurantsNearby));
            return this.restaurants$
        }))
        .subscribe(params => {
            console.log(params);
        });
    }
    
    onResize(event) {
        this.breakpoint = this.generateBreakpoint(event.target.innerWidth);
    }
  
    private generateBreakpoint(width){
        return (width <= 959 ) ? 1: (width <= 1279) ? 2: 3;
    }

    ngOnDestroy(){
        this.routeParamSub();
    }

    search(param){
        if (param.type === 'ADRESS'){
            this.restaurants$ = this.getRestaurantsNearByGQL
            .watch({
                nearby:{
                    lat:param.lat,
                    long:param.lng,
                    radius:param.radius,
                }
            })
            .valueChanges
            .pipe(map(result => result.data.getRestaurantsNearby));
        }  
    }

    restaurantDetails(e){
        console.log('restaurant detail : ', e);
    }

    throwError(msg) {
        this.snackBar.open(msg, '', {
            duration: 10000,
            panelClass: ['red-snackbar']
        });
    }
}