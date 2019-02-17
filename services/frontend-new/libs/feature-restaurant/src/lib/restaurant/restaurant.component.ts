import { Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { ActivatedRoute } from "@angular/router";
import { pluck } from "rxjs/operators";
import { MatDialog, MatSnackBar } from "@angular/material";
import { KmealListingGQL, OrderBy } from "../generated/graphql";
import { DishDetailPopupComponent, DishOrderComponent } from "@kmeal-nx/ui";

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
        this.kmealListListner.unsubscribe();
        this.routeParamSub.unsubscribe();
    }

    ngOnInit(){
        console.log('init restuanrats')
        this.breakpoint = this.generateBreakpoint(window.innerWidth);
        this.routeParamSub =  this.route
        .params
        .pipe(pluck('id'))
        .subscribe(params => {
            console.log(params);
            this.loadRestaurantDetails(this.getQuery(params,true));
        })
    }

    kmealListListner:any;
    loadRestaurantDetails(query){
        this.kmealListListner = this.kmealListingGQL.watch(query)
        .valueChanges
        .pipe(pluck("data","kmeal_menu_book"))
        .subscribe((result: any[]) =>{

            if (!result || result.length == 0){
                this.throwError('Something went wrong');
                return;
            }
            this.book = result[0];
            this.sections = this.book.menuBookSectionsBymenuBookId;
            this.isReady = true;
            console.log(result);
        })
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

    openDishDetails(e){
        const dialogRef = this.dialog.open(
            DishDetailPopupComponent,
            {
                width: '650px',
                data: e
            });
      
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'ORDER'){
                this.orderDishNow();
            }
        });
    }


    orderDishNow(){
        let data = {
            name:'Chicken noodle',
            id:'hxusa2432nk',
            specifications:[
                {
                    type:'number',
                    inputs:'',
                    name:'Quantity',
                    value:null,
                },{
                    type:'select',
                    inputs:['Mild','Medium','Extra Spicy'],
                    value:null,
                    name:'Spicy Level'
                },{
                    type:'multiple',
                    inputs:['extra shrimp','extra chicken breast','salad'],
                    name:'AddOn',
                    value:null,
                },{
                    type:'string',
                    inputs:'',
                    name:'Other Instructions',
                    value:null
                }
            ]
        }

        const dialogRef = this.dialog.open(DishOrderComponent, {
            width: '650px',
            data: data
          });
      
        dialogRef.afterClosed().subscribe(result => {
            console.log('closed', result);
        });
    }


    throwError(msg) {
        this.snackBar.open(msg, '', {
            duration: 2000
        });
    }

}