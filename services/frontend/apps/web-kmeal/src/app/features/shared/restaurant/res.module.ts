import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { RestaurantComponent } from './res.component';


@NgModule({
  imports: [SharedModule],
  declarations: [RestaurantComponent],
  providers: [],
  entryComponents:[],
  exports:[RestaurantComponent]
})
export class RestaurantModule {}