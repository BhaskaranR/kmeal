import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ApiModule } from './graphql.module';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FeatureNavigationBarModule } from '@kmeal-nx/feature-navigation-bar';
import { SharedModule } from './app.shared';
import { homeRoutes, FeatureHomeModule } from '@kmeal-nx/feature-home';
import { FeatureSearchModule ,featureSearchRoutes} from '@kmeal-nx/feature-search';
import {featureRestaurantRoutes, FeatureRestaurantModule} from '@kmeal-nx/feature-restaurant';
import { ErrorComponent } from './error.component';
import { FeatureOrderModule } from '@kmeal-nx/feature-order';
import { CheckoutComponent } from 'libs/feature-order/src/lib/checkout/checkout.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    ApiModule,
    SharedModule,
    FeatureHomeModule,
    FeatureSearchModule,
    FeatureRestaurantModule,
    FeatureNavigationBarModule,
    FeatureOrderModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          children:homeRoutes
        },
        {
          path: 'search',
          children:featureSearchRoutes
        },
        {
          path: 'restaurant', 
          children:featureRestaurantRoutes,
        },
        {
          path: 'checkout', 
          component:CheckoutComponent
        },
        {
          path: '**', 
          component:ErrorComponent
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