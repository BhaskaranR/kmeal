import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { ResComponent } from "./restaurant/restaurant.component";
import { UiModule } from "@kmeal-nx/ui";
import { MatProgressSpinnerModule, MatDividerModule, MatTabsModule, MatGridListModule } from "@angular/material";

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
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTabsModule,
    MatGridListModule,
    UiModule
  ],
  declarations:[ResComponent]
})
export class FeatureRestaurantModule {}
