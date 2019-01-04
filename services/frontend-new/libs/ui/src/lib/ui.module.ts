import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatCardModule, MatProgressBarModule, MatChipsModule, MatIconModule } from '@angular/material';
import { DishDetailPopupComponent } from './dish-detail/dish-detail-popup.component';
import { DishCardComponent } from './dish-card/dish-card.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


const components = [DishDetailPopupComponent, DishCardComponent, RestaurantComponent]

@NgModule({
  declarations: components,
  imports: [
    MatCardModule, 
    MatDialogModule, 
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule, 
    CommonModule],
  exports: components
})
export class UiModule { }
