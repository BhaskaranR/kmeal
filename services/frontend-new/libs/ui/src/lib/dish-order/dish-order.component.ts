import { Component, ChangeDetectionStrategy, Input, Inject , OnInit} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

interface SideDetail {
  type:string,
  inputs:any[],
  value:any;
  name:string;
}

interface Sides {
  name:string;
  options:SideDetail[]
}

@Component({
  selector: "dish-order",
  moduleId: module.id,
  templateUrl: "./dish-order.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishOrderComponent implements OnInit{
  options :Sides = {
    name:'Chicken noodle',
    options:[]
  }

  sides:any= {};
  isReady:boolean = false;
  constructor(public dialogRef: MatDialogRef<DishOrderComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(){
    console.log('open sides : ', this.data);
    const keys = {};
    this.data.forEach( d => {
      if (!keys[d.group]){
        keys[d.group] = [];
      }

      keys[d.group].push(d);
    });

    Object.keys(keys).forEach(k => {
      let inputs = keys[k].map( side => side.item_name);
      this.options.options.push({
        type:'select',
        inputs:inputs,
        value:null,
        name:k
      } )
    })

    console.log(this.options);
    this.isReady =true;
    
  }
}
