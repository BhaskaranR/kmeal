import { Component ,ChangeDetectionStrategy, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'dish-order',
  moduleId: module.id,
  templateUrl:'./dish-order.component.html' ,
  styleUrls:['./dish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishOrderComponent  {
    @Input() dish:{[key:string]:string};
    constructor(public dialogRef: MatDialogRef<DishOrderComponent>) { }
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