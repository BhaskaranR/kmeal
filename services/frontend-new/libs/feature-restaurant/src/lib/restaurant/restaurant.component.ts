import { Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { ActivatedRoute } from "@angular/router";
import { pluck, switchMap } from "rxjs/operators";
import { MatDialog, MatSnackBar } from "@angular/material";
import { KmealListingGQL, OrderBy } from "../generated/graphql";
import { DishDetailPopupComponent, DishOrderComponent } from "@kmeal-nx/ui";
import * as _ from 'underscore';

@Component({
    selector: "kmeal-nx-restaurant",
    moduleId: module.id,
    templateUrl: "./restaurant.component.html",
    styleUrls:['./restaurant.component.scss']
})
export class ResComponent implements OnInit, OnDestroy{
    breakpoint:number;
    isReady:boolean = false;
    mobileQuery: MediaQueryList;
    book:any;
    sections:any[];
    restaurantInfo:any;
    routeParamSub:any;
    menu:Array<string> ;
    dishes:any[];


    private _mobileQueryListener: () => void;
    constructor(
        changeDetectorRef: ChangeDetectorRef, 
        public route:ActivatedRoute,
        media: MediaMatcher,
        public dialog: MatDialog,
        private kmealListingGQL:KmealListingGQL,
        public snackBar: MatSnackBar) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
        this.routeParamSub.unsubscribe();
    }

    ngOnInit(){
        let self = this;
        self.breakpoint = self.generateBreakpoint(window.innerWidth);
        self.routeParamSub =  self.route
        .params
        .pipe(pluck('id'),switchMap(self.loadRestaurantData.bind(self)))
        .subscribe(self.dataHandler.bind(self), self.throwError.bind(self));
    }

    private loadRestaurantData(param) {
        if (_.isUndefined(param)){
            throw new Error('Something went wrong');
        }

        return this.kmealListingGQL.watch(this.getQuery(param,true))
                .valueChanges
                .pipe(pluck('data','kmeal_menu_book'));
    }

    private dataHandler(result){

        if (!_.isArray(result) || _.isUndefined(result) || _.isEmpty(result)){
            this.throwError('Something went wrong');
            return;
        }

        console.log('found data : ', result);
        this.book = result[0];
        this.sections = !_.isEmpty(this.book.menuBookSectionsBymenuBookId) ? this.book.menuBookSectionsBymenuBookId : [];
        this.restaurantInfo = !_.isUndefined(this.book.restaurantByrestaurantId) ? this.book.restaurantByrestaurantId : {} ;
        this.isReady = true;
    }

    private getQuery(id, isActive){
        return {
            "menuBookWhere": {
              "restaurant_id": {
                "_eq": id
              }
            },
            "menuBookOrderby": [
              {"sort_order": OrderBy.Asc}
            ],
            "menuBookSectionsOrderby": [
              {"sort_order":  OrderBy.Asc}
            ],
            "itemSectionsOrderby":  [
              {"itemByitemId": {
                "sort_order":  OrderBy.Asc
              }}
            ],
            "listingWhere":  {
              "isactive": {
                "_eq": isActive
              }
            }
           }
    }

    onResize(event) {
        this.breakpoint = this.generateBreakpoint(event.target.innerWidth);
    }
  
    private generateBreakpoint(width){
        return (width <= 959 ) ? 1: (width <= 1279) ? 2: 3;
    }

    onPlaceOrder(order){
        console.log('ordered ', order);
    }

    throwError(msg) {
        this.snackBar.open(msg, '', {
            duration: 2000
        });
    }

}