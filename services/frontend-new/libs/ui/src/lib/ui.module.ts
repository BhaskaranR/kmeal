import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatCardModule, MatProgressBarModule, MatChipsModule, MatIconModule } from '@angular/material';
import { DishDetailPopupComponent } from './dish-detail/dish-detail-popup.component';
import { DishCardComponent } from './dish-card/dish-card.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FeatureCoreModule } from '@kmeal-nx/feature-core';
import { DishOrderComponent } from './dish-order/dish-order.component';


const components = [DishDetailPopupComponent, DishCardComponent, RestaurantComponent, DishOrderComponent]

@NgModule({
  declarations: components,
  entryComponents:[DishOrderComponent,DishDetailPopupComponent],
  imports: [
    FeatureCoreModule,
    CommonModule],
  exports: components
})
export class UiModule { }
