import { Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "apollo-angular";

@Component({
    selector: "app-search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit{
    breakpoint:number;
    isFilterOpen:boolean = false;
    constructor(public router: Router, public route:ActivatedRoute){};
    public restaurants:Array<any> = [
        {
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        },{
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        },{
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        },{
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        },{
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        },{
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        },{
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        },{
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        },{
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        },{
            id:"hudsan321",
            restaurantName:'Indian Dinner',
            description:'Authentic Indian Cuisine. Lunch and Dinner',
            type:'Indian',
            address:{
                line:'19523 25th Ave',
                city:'Queens',
                state:'NY',
                zipcode:11453,
            },
            location:{
                long:198,
                lat:21,
            },
            distance:'198ft',
            lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
            rating:5,
            priceLevel:'$$',
        }
    ]

    sub:any;
    type:string;
    ngOnInit() {
        this.breakpoint = this.generateBreakpoint(window.innerWidth);
        this.sub = this.route
        .queryParams
        .subscribe(params => {
            // Defaults to 0 if no query param provided.
            if (!params.type){
                alert('Wrong')
            }
            this.type = params.type;
        });
    }
    
    onResize(event) {
      this.breakpoint = this.generateBreakpoint(event.target.innerWidth);
    }

    private generateBreakpoint(width){
        return (width <= 959 ) ? 1: (width <= 1279) ? 2: 3;
    }
}