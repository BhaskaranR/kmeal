import { Component, ChangeDetectionStrategy, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "dish-order",
  moduleId: module.id,
  templateUrl: "./dish-order.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishOrderComponent {
  options = {
    name:'Chicken noodle',
    id:'hxusa2432nk',
    specifications:[{
            type:'select',
            inputs:['Mild','Medium','Extra Spicy'],
            value:null,
            name:'Spicy Level'
        },{
            type:'multi-choices',
            inputs:['extra shrimp','extra chicken breast','salad'],
            name:'AddOn',
            value:null,
        }
    ]
  }
  constructor(public dialogRef: MatDialogRef<DishOrderComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
}
