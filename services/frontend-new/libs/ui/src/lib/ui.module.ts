import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatCardModule, MatProgressBarModule, MatChipsModule, MatIconModule } from '@angular/material';
import { DishDetailPopupComponent } from './dish-detail/dish-detail-popup.component';
import { DishCardComponent } from './dish-card/dish-card.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DishOrderComponent } from './dish-order/dish-order.component';
import { DishCardTwoComponent } from './dish-card2/dish-card2.component';
import { DealTimerDirective } from './dish-card2/deal-timer.directive';


const components = [DealTimerDirective, 
  DishDetailPopupComponent, 
  DishCardTwoComponent, 
  DishCardComponent, 
  RestaurantComponent, 
  DishOrderComponent]

@NgModule({
  declarations: components,
  entryComponents: [DishOrderComponent, DishDetailPopupComponent],
  imports: [
    CommonModule],
  exports: components
})
export class UiModule { }
