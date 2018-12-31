import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CartService } from "../../core/shopping-cart.service";

@Component({
    selector: "app-cart",
    moduleId: module.id,
    templateUrl: "./cart.component.html",
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit ,OnDestroy{

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
    
    
    ngOnInit() {

    }
    
    onResize(event) {
      this.breakpoint = this.generateBreakpoint(event.target.innerWidth);
    }

    private generateBreakpoint(width){
        return (width <= 959 ) ? 1: (width <= 1279) ? 2: 3;
    }

    ngOnDestroy(){
       
    }
}