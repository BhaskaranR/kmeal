import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
})
export class SearchComponent implements OnInit ,OnDestroy{

    breakpoint:number;
    isReady:boolean = false;
    restaurants:Array<any> ;
    routeParamSub:any;
    type:string;
    isFilterOpen:boolean = false;

    constructor(
        public router: Router, 
        public route:ActivatedRoute,){};
    
    
    ngOnInit() {
        console.log('initing search screen');
        this.routeParamSub = this.route
        .queryParams
        .subscribe(params => {
            console.log('routed to search ', params);
            this.isReady=true;
        });
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