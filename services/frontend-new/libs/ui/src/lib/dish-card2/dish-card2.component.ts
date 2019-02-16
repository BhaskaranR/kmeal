import {
    Component,
    ChangeDetectionStrategy,
    Input,
    EventEmitter,
    Output,
    OnInit
  } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DishOrderComponent } from '../dish-order/dish-order.component';


  @Component({
    selector: 'dish-card2',
    moduleId: module.id,
    templateUrl: './dish-card2.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class DishCardTwoComponent implements OnInit{
      isDynamic:boolean = true;
      defaultPhoto:string = 'https://www.kensfoodservice.com/img/fall-flavors/plate-with-salad.png';
      isActive:boolean = false;
      price:number = 0;
      @Input() data:any;
      @Output() onClickEvent = new EventEmitter<any>();
      constructor(public dialog: MatDialog){}

      ngOnInit(){
        console.log(this.data, this.data.listingsByitemId);
        this.isDynamic = this.data.listingsByitemId.length > 0  && this.data.listingsByitemId[0].list_type == 'd' ? true : false;
        this.price = this.data.listingsByitemId[0].list_price.toFixed(2);
      }

      onClick(){
          const dialogRef = this.dialog.open(DishOrderComponent, {
              width: '650px',
              data: this.data.listingsByitemId[0].listingItemSidessBylistingId || [],
            });
        
          dialogRef.afterClosed().subscribe(result => {
              console.log('closed', result);
              if (result == 'order'){
                this.onClickEvent.emit(this.data);
              }
          });
        }   
  }