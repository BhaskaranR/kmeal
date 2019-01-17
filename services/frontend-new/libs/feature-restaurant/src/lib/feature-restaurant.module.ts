import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ResComponent } from "./restaurant/restaurant.component";
import { FeatureCoreModule } from "@kmeal-nx/feature-core";
import { UiModule } from "@kmeal-nx/ui";

export const featureRestaurantRoutes : Routes = [{
  path: ':id',
  component: ResComponent
},{
  path:':id/photo',
  component: ResComponent
}]


@NgModule({
  imports: [
    CommonModule,
    FeatureCoreModule,
    UiModule
  ],
  declarations:[ResComponent]
})
export class FeatureRestaurantModule {}
