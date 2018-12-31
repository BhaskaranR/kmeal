import { Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import { MatDialog } from "@angular/material";
import { MediaMatcher } from "@angular/cdk/layout";
import { DataService } from "../../core/data.service";

@Component({
    selector: "app-restaurant",
    moduleId: module.id,
    templateUrl: "./res.component.html",
    styleUrls: ['./res.component.scss'],
})
export class ResComponent implements OnInit, OnDestroy{
    breakpoint:number;
    dia:any;
    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    dishes:any;
    constructor(
        changeDetectorRef: ChangeDetectorRef, 
        media: MediaMatcher,
        dataService: DataService) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        console.log(dataService);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    ngOnInit(){
        this.breakpoint = this.generateBreakpoint(window.innerWidth);
    }

    onResize(event) {
        this.breakpoint = this.generateBreakpoint(event.target.innerWidth);
      }
  
    private generateBreakpoint(width){
        return (width <= 959 ) ? 1: (width <= 1279) ? 2: 4;
    }

}