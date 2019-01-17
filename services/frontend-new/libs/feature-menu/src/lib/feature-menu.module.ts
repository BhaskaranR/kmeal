import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MatMenuModule, MatListModule, MatSidenavModule, MatGridListModule } from '@angular/material';
import { UiModule } from '@kmeal-nx/ui';

@NgModule({
  declarations:[RestaurantDetailComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    UiModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: RestaurantDetailComponent} 
    ])
  ]
})
export class FeatureMenuModule {}
