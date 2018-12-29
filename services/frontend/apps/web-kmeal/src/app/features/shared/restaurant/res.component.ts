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
    @Output() public reRoute = new EventEmitter<any>();
    @Output() public onError = new EventEmitter<string>();

    constructor(){}    
    goToRestaurant(e){
      e.preventDefault();
      this.reRoute.emit({url:"./restaurant", id:this.res.id});
    }

    generateLables(description) {
      let result = '';
      description.split(',').forEach( la => {
        result += la + ' , ';
      });
      return result;
    }
}