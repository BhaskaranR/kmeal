import { Component,ChangeDetectionStrategy,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'res-card',
  moduleId: module.id,
  templateUrl:'./res.component.html' ,
  styleUrls:['./res.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantComponent  {
    @Input() public res:{[key:string]:string};
    @Output() public getRestaurantDetailsEvent = new EventEmitter<string>();
    @Output() public onError = new EventEmitter<string>();

    constructor(){}    
    restaurantDetails(e){
      this.getRestaurantDetailsEvent.emit(this.res.id);
    }
}