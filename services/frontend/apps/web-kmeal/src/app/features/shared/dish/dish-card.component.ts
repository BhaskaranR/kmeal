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
    @Output() public reRoute = new EventEmitter<any>();
    @Output() public onError = new EventEmitter<string>();

    constructor(public dialog: MatDialog){}

    goToDish(e){
        this.reRoute.emit({url:"./dish", id:this.dishDetails.id});
    }

    goToRestaurant(e){
        e.preventDefault();
        this.reRoute.emit({url:"./restaurant", id:this.dishDetails.id});
    }

    openDetails(): void{
        const dialogRef = this.dialog.open(DishDetailPopupComponent, {
            width: '640px',
            data: {name: this.dishDetails.name}
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if (result === 'order'){
                this.orderNow();
            }
          });
    }

    orderNow(){
        const dialogRef = this.dialog.open(DishOrderComponent, {
            width: '450px',
            data: {name: this.dishDetails.name}
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
          });
    }
}