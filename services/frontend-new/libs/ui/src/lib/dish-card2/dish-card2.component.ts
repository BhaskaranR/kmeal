import {
    Component,
    ChangeDetectionStrategy,
    Input,
    EventEmitter,
    Output,
    OnInit
  } from '@angular/core';


  @Component({
    selector: 'dish-card2',
    moduleId: module.id,
    templateUrl: './dish-card2.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class DishCardTwoComponent implements OnInit{
      spiceLevelEnum : {[key:string]:string} = {
        0:'Not Spicy',
        1:'Mild Spicy',
        2:'Medium Spicy',
        3:'Spicy',
        4:'Extra Spicy'
      } ;
      
      @Input() data:any;
      @Output() onClickEvent = new EventEmitter<any>();
      constructor(){}

      ngOnInit(){
        console.log(this.data);
      }
  }