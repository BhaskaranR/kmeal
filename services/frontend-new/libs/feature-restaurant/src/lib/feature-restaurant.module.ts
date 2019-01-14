import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ResComponent } from "./restaurant/restaurant.component";
import { FeatureCoreModule } from "@kmeal-nx/feature-core";

@NgModule({
  imports: [
    CommonModule,
    FeatureCoreModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ResComponent} 
    ])
  ],
  declarations:[ResComponent]
})
export class FeatureRestaurantModule {}
