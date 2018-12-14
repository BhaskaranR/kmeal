import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DishListService } from './dish-list.service';
import { DishListComponent } from './dish-list.component';


@NgModule({
  imports: [SharedModule],
  declarations: [DishListComponent],
  providers: [DishListService],
  entryComponents:[],
  exports:[DishListComponent]
})
export class DishListModule {}