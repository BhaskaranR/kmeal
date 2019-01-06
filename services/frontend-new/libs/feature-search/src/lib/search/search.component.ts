import { Component, OnInit, OnDestroy} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
})
export class SearchComponent implements OnInit ,OnDestroy{


    isReady:boolean = false;
    restaurants:Array<any> ;
    routeParamSub:any;
    type:string;

    constructor(
        public router: Router, 
        public route:ActivatedRoute,){};
    
    
    ngOnInit() {
        console.log('initing search screen');
        this.routeParamSub = this.route
        .queryParams
        .subscribe(params => {
            console.log('routed to search ', params)
        });
    }
    

    ngOnDestroy(){
       
    }
}