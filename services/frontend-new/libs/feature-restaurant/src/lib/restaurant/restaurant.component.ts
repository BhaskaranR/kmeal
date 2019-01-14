import { Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { Observable } from "apollo-link";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "kmeal-nx-restaurant",
    moduleId: module.id,
    templateUrl: "./restaurant.component.html",
})
export class ResComponent implements OnInit, OnDestroy{
    breakpoint:number;
    mobileQuery: MediaQueryList;
    routeParamSub:any;
    private _mobileQueryListener: () => void;
    constructor(
        changeDetectorRef: ChangeDetectorRef, 
        public route:ActivatedRoute,
        media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    ngOnInit(){
        this.breakpoint = this.generateBreakpoint(window.innerWidth);
        this.routeParamSub = this.route
        .queryParams
        .subscribe(result =>{
            console.log(result);
        })
    }

    onResize(event) {
        this.breakpoint = this.generateBreakpoint(event.target.innerWidth);
      }
  
    private generateBreakpoint(width){
        return (width <= 959 ) ? 1: (width <= 1279) ? 2: 4;
    }

}