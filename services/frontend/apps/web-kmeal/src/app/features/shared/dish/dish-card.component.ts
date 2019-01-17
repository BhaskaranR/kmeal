import { Component ,ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
import { MatDialog } from '@angular/material';
import { DishDetailPopupComponent } from './dish-detail-popup.component';
import { DishOrderComponent } from './dish-order.component';

@Component({
  selector: 'dish-card',
  moduleId: module.id,
  templateUrl:'./dish-card.component.html' ,
  styleUrls:['./dish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishCardComponent  {
    @Input() public dishDetails:any;
    @Output() public byRestaurantEvent = new EventEmitter<string>();
    @Output() public openDetailsEvent = new EventEmitter<string>();
    @Output() public orderNowEvent = new EventEmitter<string>();
    @Output() public onError = new EventEmitter<string>();

    constructor(public dialog: MatDialog){}

    byRestaurant(url){
        this.byRestaurantEvent.emit(this.dishDetails.id);
    }

    openDetails(): void{
        this.openDetailsEvent.emit(this.dishDetails.id);
    }

    orderNow(){
        this.orderNowEvent.emit(this.dishDetails.id);
    }
}