import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from '@kmeal-nx/ui';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';
import { FeatureCoreModule } from '@kmeal-nx/feature-core';
import 'hammerjs';
import { DishDetailPopupComponent } from 'libs/ui/src/lib/dish-detail/dish-detail-popup.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    NguCarouselModule,
    FeatureCoreModule,
    UiModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[]
})
export class FeatureHomeModule {}
