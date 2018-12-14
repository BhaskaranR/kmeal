import { Component ,Input,ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'dish-list',
  moduleId: module.id,
  templateUrl:'./dish-list.component.html' ,
  styleUrls:['./dish-list.component.scss']
})
export class DishListComponent  {
    constructor(){}
    data:any[] = [
        {
            name:'noodle',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
        {
            name:'noodle',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
        {
            name:'noodle 3',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
        {
            name:'noodle',
            lables:['Chinese','fast food','take out'],
            rating:5,
            distance:'198ft',
            priceLevel:'$$',
            discount:'20%'
        },
        {
            name:'noodle',
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
}