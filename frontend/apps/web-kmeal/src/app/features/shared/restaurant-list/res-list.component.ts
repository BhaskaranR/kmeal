import { Component,ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'restaurant-list',
  moduleId: module.id,
  templateUrl:'./res-list.component.html' ,
  styleUrls:['./res-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantListComponent  {
    isListView:boolean = false;
    public carouselTileItems:Array<any> = [
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

    constructor(public router:Router){}

    public carouselTileConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
        speed: 250,
        point: {
            visible: false
        },
        touch: true,
        loop: true,
        animation: 'lazy'
    };

    goToRestaurant(){
        this.router.navigate(['/restaurant']);
    }
}