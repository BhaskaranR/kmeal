import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DishCardComponent } from './dish-card.component';
import { DishDetailPopupComponent } from './dish-detail-popup.component';
import { DishOrderComponent } from './dish-order.component';


@NgModule({
  imports: [SharedModule],
  declarations: [DishCardComponent,DishDetailPopupComponent,DishOrderComponent],
  providers: [],
  entryComponents:[DishDetailPopupComponent,DishOrderComponent],
  exports:[DishCardComponent,DishDetailPopupComponent,DishOrderComponent],
})
export class DishModule {}