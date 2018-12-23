import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DishService } from './dish.service';
import { DishCardComponent } from './dish-card.component';


@NgModule({
  imports: [SharedModule],
  declarations: [DishCardComponent],
  providers: [DishService],
  entryComponents:[],
  exports:[DishCardComponent]
})
export class DishModule {}