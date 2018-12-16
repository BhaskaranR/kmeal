import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DishListService } from './dish-list.service';
import { DishListComponent } from './dish-list.component';
import { DishCardComponent } from './dish-card.component';


@NgModule({
  imports: [SharedModule],
  declarations: [DishListComponent,DishCardComponent],
  providers: [DishListService],
  entryComponents:[],
  exports:[DishListComponent,DishCardComponent]
})
export class DishListModule {}