import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from '@kmeal-nx/ui';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  imports: [
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
