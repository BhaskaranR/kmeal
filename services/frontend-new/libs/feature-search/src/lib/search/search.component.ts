import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable , of} from "rxjs";
import { map, switchMap , catchError} from "rxjs/operators";
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

    breakpoint:number = 4;
    restaurants$:Observable<any>;
    routeParamSub:any;
    type:string;
    isFilterOpen:boolean = false;
    isReady:boolean = false;

    constructor(
        public route:ActivatedRoute,
        public snackBar: MatSnackBar,
        private getRestaurantsNearByGQL:GetRestaurantsNearByGQL){};
    
    
    ngOnInit() {
        this.routeParamSub = this.route
        .queryParams
        .pipe(
            switchMap((params)=>{
                this.isReady = false;
                if (!params.type ) {
                    throw new Error('ERROR');
                } 

                if (params.type === 'CUISINE'){
                    this.type = params.cuisine;
                    this.restaurants$ = this.getRestaurantsNearByGQL
                    .watch({
                        nearby:{
                            lat:60,
                            long:-70,
                            radius:10,
                        }
                    })
                    .valueChanges
                    .pipe(map(result => result.data.getRestaurantsNearby));
                    return this.restaurants$
                }

                
                if (params.type == 'ADDRESS') {
                    this.type = 'Near By';
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
                }
            }), catchError(err => {
                this.throwError(err);
                return of([]);
            }))
            .subscribe(params => {
                console.log(params);
                this.isReady = true;
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