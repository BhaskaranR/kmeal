import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DishService } from './dish.service';
import { DishCardComponent } from './dish-card.component';
import { DishDetailPopupComponent } from './dish-detail-popup.component';


@NgModule({
  imports: [SharedModule],
  declarations: [DishCardComponent,DishDetailPopupComponent],
  providers: [DishService],
  entryComponents:[DishDetailPopupComponent],
  exports:[DishCardComponent,DishDetailPopupComponent]
})
export class DishModule {}