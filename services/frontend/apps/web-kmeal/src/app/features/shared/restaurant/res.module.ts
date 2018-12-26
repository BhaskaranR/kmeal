import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { RestaurantService } from './res.service';
import { RestaurantComponent } from './res.component';


@NgModule({
  imports: [SharedModule],
  declarations: [RestaurantComponent],
  providers: [RestaurantService],
  entryComponents:[],
  exports:[RestaurantComponent]
})
export class RestaurantModule {}