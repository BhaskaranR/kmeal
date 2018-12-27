import { Component ,ChangeDetectionStrategy} from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'dish-order',
  moduleId: module.id,
  templateUrl:'./dish-order.component.html' ,
  styleUrls:['./dish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishOrderComponent  {
    constructor(public dialog: MatDialog){}
    data:any = {
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

}