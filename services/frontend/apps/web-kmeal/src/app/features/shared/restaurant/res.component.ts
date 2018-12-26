import { Component,ChangeDetectionStrategy,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'res-card',
  moduleId: module.id,
  templateUrl:'./res.component.html' ,
  styleUrls:['./res.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantComponent  {
    @Input() public res:any;
    @Output() public goToDishEvent = new EventEmitter<any>();
    @Output() public onError = new EventEmitter<string>();

    constructor(){}    
    goToRestaurant(){
      this.goToDishEvent.emit('restaurant');
    } 
}