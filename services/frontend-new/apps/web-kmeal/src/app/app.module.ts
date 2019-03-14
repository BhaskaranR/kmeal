import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { FeatureOrderModule, CheckoutComponent, OrderHistoryClientComponent } from '@kmeal-nx/feature-order';
import { ScatterModule, ScatterService } from '@kmeal-nx/scatter';
import { FeatureProfileModule, ProfileClientComponent } from '@kmeal-nx/feature-profile';


export function init_app(scatterService: ScatterService) {
  return () => scatterService.initScatter('Kylin');
}

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    ApiModule,
    SharedModule,
    ScatterModule,
    FeatureHomeModule,
    FeatureSearchModule,
    FeatureRestaurantModule,
    FeatureNavigationBarModule,
    FeatureOrderModule,
    FeatureProfileModule,
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
          path: 'orders', 
          component:OrderHistoryClientComponent
        },
        {
          path: 'profile', 
          component:ProfileClientComponent
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
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [ScatterService], multi: true },
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