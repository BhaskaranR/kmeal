import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ApiModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FeatureHomeModule } from '@kmeal-nx/feature-home';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatIconModule,
  MatMenuModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { FeatureNavigationBarModule } from '@kmeal-nx/feature-navigation-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    ApiModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatListModule,
    FlexLayoutModule,
    FeatureNavigationBarModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          loadChildren: '@kmeal-nx/feature-home#FeatureHomeModule'
        },
        {
          path: 'restaurant', 
          loadChildren: '@kmeal-nx/feature-restaurant#FeatureRestaurantModule'
        }
      ],
      { 
        paramsInheritanceStrategy: 'always',
        enableTracing:false 
      }
    )
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    {
      provide: 'apiBase',
      useValue: environment.api_entry
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
