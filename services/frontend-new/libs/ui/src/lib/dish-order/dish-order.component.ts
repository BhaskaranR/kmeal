import { Component, ChangeDetectionStrategy, Input, Inject , OnInit} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import * as _ from 'underscore';

interface SideDetail {
  type:string,
  inputs:string[],
  inputsPrices:number[],
  value:any,
  maxSelect:number | null,
  name:string,
  subName:string | null
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
    name:null,
    options:[]
  }

  sides:any= {};
  isReady:boolean = false;
  total:number=0;
  qty:number = 1;
  price:number = 0;
  constructor(public dialogRef: MatDialogRef<DishOrderComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(){

    this.options.name = this.data.name;
    this.total = this.data.price;
    this.price = this.data.price;
    this.populateSides();
    this.isReady = true;
    
  }

  private populateSides(){
    const keys = {};
    this.data.sides.forEach( d => {
      if (!keys[d.group]){
        keys[d.group] = [];
      }
      keys[d.group].push(d);
    });

    _.keys(keys).forEach(k => {
      const type = keys[k][0].max_selection == 1 ? 'select' : 'multi-choices';
      this.options.options.push({
        type:type,
        inputs:keys[k].map( side => side.item_name),
        inputsPrices:keys[k].map(side => side.list_price || 0),
        value: type=='select' ? null : [],
        maxSelect: type == 'select' ? 1 : type == 'multi-choices' ?  keys[k][0].max_selection : null,
        name:k,
        subName:type == 'multi-choices' ? `Up to ${keys[k][0].max_selection}` : null ,
      } )
    })

    console.log(this.options);
  }

  onChangeSingle(){
    this.getTotalPrice();
  }

  onChangeMultiChoice(opt, idx){
    console.log(opt);
    if (!this.validateMulti(opt) ) {
      opt.value[idx] = false;
      alert('exceeding max choices');
    }
  }

  onChangeQty(type) {
    this.qty = type == 'PLUS' ? this.qty + 1 : this.qty - 1 <= 0 ? 0 : this.qty - 1; 
    this.getTotalPrice();
  }

  private getTotalPrice(){
    console.log('calculating..');
    let tol = this.price * this.qty;
    this.options.options.forEach( opt => {
      if (!!opt.value && opt.type == 'select') {
        const idx = opt.inputs.indexOf(opt.value);
        tol += opt.inputsPrices[idx];
      }
    })
    this.total = tol;
  }

  private validateMulti(opt){
    const max = opt.maxSelect;
    let cnt = _.filter(opt.value, (val) => val == true).length;

    return max > cnt;
  }
}
