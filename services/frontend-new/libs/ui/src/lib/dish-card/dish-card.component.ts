import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { DishDetailPopupComponent } from '../dish-detail/dish-detail-popup.component';
//import { DishOrderComponent } from './dish-order.component';

@Component({
  selector: 'dish-card',
  moduleId: module.id,
  templateUrl: './dish-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishCardComponent {
  @Input() public dishDetails: any;
  @Output() public onOpenDetailsEvent: EventEmitter<string> = new EventEmitter();
  @Output() public onPlaceOrderEvent:EventEmitter<string> = new EventEmitter();
  @Output() public onErrorEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}

  openDetails(){
    this.onOpenDetailsEvent.emit(this.dishDetails.id);
  }

  orderNow(){
    this.onPlaceOrderEvent.emit(this.dishDetails.id);
  }

  onError(e){
    this.onErrorEvent.emit(e);
  }

}
