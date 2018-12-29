import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SearchBarService } from "../../features/shared/search-bar/search-bar.service";

@Component({
    selector: "app-search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit ,OnDestroy{

    breakpoint:number;
    isFilterOpen:boolean = false;
    isReady:boolean = false;
    restaurants:Array<any> ;
    routeParamSub:any;
    type:string;

    constructor(
        public router: Router, 
        public route:ActivatedRoute,
        public searchBarService:SearchBarService){};
    
    
    ngOnInit() {
        console.log('initing search screen');
        this.breakpoint = this.generateBreakpoint(window.innerWidth);
        this.routeParamSub = this.route
        .queryParams
        .subscribe(params => {

            if (!params.type || !this.searchBarService.results){
                this.restaurants = [];
                this.isReady = true;
                return
            }
            this.type = params.type;
            this.restaurants = this.searchBarService.results.getRestaurantsNearby;
            this.isReady = true;
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