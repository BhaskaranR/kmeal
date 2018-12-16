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
            name:'Restaurant',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
        {
            name:'Restaurant 2',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
        {
            name:'Restaurant 4',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
        {
            name:'Restaurant 3',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
        {
            name:'Restaurant 7',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
        {
            name:'Restaurant 5',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
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