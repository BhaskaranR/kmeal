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
      
      @Input() data:any;
      @Output() onClickEvent = new EventEmitter<any>();
      constructor(public dialog: MatDialog){}

      ngOnInit(){
        console.log(this.data, this.data.listingsByitemId);
        this.isDynamic = this.data.listingsByitemId.length > 0  ? true: false;
      }

      onClick(){
          const dialogRef = this.dialog.open(DishOrderComponent, {
              width: '650px',
              data: this.data
            });
        
          dialogRef.afterClosed().subscribe(result => {
              console.log('closed', result);
              if (result == 'order'){
                this.onClickEvent.emit(this.data);
              }
          });
        }
      
  }