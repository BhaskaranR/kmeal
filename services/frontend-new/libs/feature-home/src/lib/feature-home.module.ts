import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FeatureCoreModule } from 'libs/feature-core/src';
import { UiModule } from '@kmeal-nx/ui';
import { FeatureNavigationBarModule } from '@kmeal-nx/feature-navigation-bar';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  imports: [
    FeatureCoreModule, 
    RouterModule.forChild(routes), 
    UiModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FeatureHomeModule {}
