import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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

    breakpoint:number = 4;
    restaurants:Array<any>;
    routeParamSub:any;
    type:string;
    isFilterOpen:boolean = false;
    isReady:boolean = false;
    sortedBy:string = "Relevant";

    constructor(
        public route:ActivatedRoute,
        public snackBar: MatSnackBar,
        private getRestaurantsNearByGQL:GetRestaurantsNearByGQL,
        public router: Router){};
    
    
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
                    this.type = "Cuisine : " + params.value;
                    const res = this.getRestaurantsNearByGQL
                    .watch({
                        nearby:{
                            cuisine:params.value,
                            timeofoperation: "REGULAR",
                            lat: 40.710237,
                            long: -74.007810,
                            radius:10
                        }
                    })
                    .valueChanges
                    .pipe(map(result => result.data.getRestaurantsNearby));
                    return res
                }

                
                if (params.type == 'ADDRESS') {
                    this.type = 'Near By';
                    const res  = this.getRestaurantsNearByGQL
                    .watch({
                        nearby:{
                            cuisine:"Italian",
                            timeofoperation:"",
                            lat:parseFloat(params.lat),
                            long:parseFloat(params.lng),
                            radius:parseFloat(params.radius),
                        }
                    })
                    .valueChanges
                    .pipe(map(result => result.data.getRestaurantsNearby));
                    return res;
                }
            })
        )
            .subscribe(params => {
                console.log("got search results : ", params);
                this.restaurants = params;
                this.isReady = true;
            }, (err)=>{
                console.log('ERROR');
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
}