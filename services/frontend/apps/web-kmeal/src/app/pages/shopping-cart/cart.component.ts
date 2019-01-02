import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CartService } from "../../core/shopping-cart.service";

@Component({
    selector: "app-cart",
    moduleId: module.id,
    templateUrl: "./cart.component.html",
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnDestroy{

    breakpoint:number;
    isFilterOpen:boolean = false;
    isReady:boolean = false;
    restaurants:Array<any> ;
    routeParamSub:any;
    type:string;

    constructor(
        public router: Router, 
        public route:ActivatedRoute,
        public cartService:CartService){};
    
    
    // ngOnInit() {
    //     console.log('initing search screen');
    //     this.breakpoint = this.generateBreakpoint(window.innerWidth);
    //     this.routeParamSub = this.route
    //     .queryParams
    //     .subscribe(params => {

    //         if (!params.type || !this.dataService.33){
    //             this.restaurants = [];
    //             this.isReady = true;
    //             return
    //         }
    //         this.type = params.type;
    //         this.restaurants = this.dataService.restaurants.getRestaurantsNearby;
    //         this.isReady = true;
    //     });
    // }
    
    onResize(event) {
      this.breakpoint = this.generateBreakpoint(event.target.innerWidth);
    }

    private generateBreakpoint(width){
        return (width <= 959 ) ? 1: (width <= 1279) ? 2: 3;
    }

    ngOnDestroy(){
       
    }
}