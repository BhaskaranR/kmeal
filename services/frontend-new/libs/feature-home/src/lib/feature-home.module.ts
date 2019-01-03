import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { MatCardModule, MatSelectModule, MatGridListModule, MatIconModule, MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';
import { UiModule } from '@kmeal-nx/ui';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { FormsModule } from '@angular/forms';

const components = [HomeComponent, SearchComponent, SearchBarComponent];

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    data: {},
    component: SearchComponent
  }
];

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    NguCarouselModule, 
    MatCardModule, 
    MatProgressSpinnerModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    GooglePlaceModule, 
    UiModule],
  declarations: [components],
  exports: [components]
})
export class FeatureHomeModule {}