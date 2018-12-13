import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { RestaurantListService } from './res-list.service';
import { RestaurantListComponent } from './res-list.component';


@NgModule({
  imports: [SharedModule],
  declarations: [RestaurantListComponent],
  providers: [RestaurantListService],
  entryComponents:[],
  exports:[RestaurantListComponent]
})
export class RestaurantListModule {}