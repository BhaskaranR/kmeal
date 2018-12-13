import { Component ,ViewChild, ElementRef} from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'restaurant-list',
  moduleId: module.id,
  templateUrl:'./res-list.component.html' ,
  styleUrls:['./res-list.component.scss']
})
export class RestaurantListComponent  {
    data:any[] = [
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
    constructor(){}
}