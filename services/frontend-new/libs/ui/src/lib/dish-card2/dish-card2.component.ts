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
import * as _ from 'underscore';


  @Component({
    selector: 'dish-card2',
    moduleId: module.id,
    templateUrl: './dish-card2.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class DishCardTwoComponent implements OnInit{
      isDynamic:boolean = false;
      defaultPhoto:string = 'https://www.kensfoodservice.com/img/fall-flavors/plate-with-salad.png';
      isActive:boolean = false;
      price:number = 0;
      @Input() data:any;
      @Output() onClickEvent = new EventEmitter<any>();
      constructor(public dialog: MatDialog){}

      ngOnInit(){
        console.log(this.data.listingsByitemId[0]);
        if (_.isUndefined(this.data.listingsByitemId) || _.isEmpty(this.data.listingsByitemId) ) {
          this.isDynamic = false;
          this.price = 0;
          console.log('bad data');
          return;
        }
        
        this.isDynamic = this.data.listingsByitemId[0].list_type == 'd' ? true : false;
        this.price = this.data.listingsByitemId[0].list_price.toFixed(2);
        
      }

      onClick(){
          if (_.isUndefined(this.data.listingsByitemId[0].listingItemSidessBylistingId) || _.isEmpty(this.data.listingsByitemId[0].listingItemSidessBylistingId)){
            alert('bad data');
            return;
          }

          const dialogRef = this.dialog.open(DishOrderComponent, {
            width: '650px',
            data: {
              sides:this.data.listingsByitemId[0].listingItemSidessBylistingId, 
              name:this.data.item_name,
              isDynamic:this.isDynamic,
              price : this.price
            }
          });
        
          dialogRef.afterClosed().subscribe(result => {
              console.log('closed', result);
              if (result == 'order'){
                this.onClickEvent.emit(this.data);
              }
          });
        }   
  }