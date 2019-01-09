import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ApiModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer';


import { RouterModule } from '@angular/router';
import { homeRoutes, FeatureHomeModule } from '@kmeal-nx/feature-home';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarComponent } from './nav/nav.component';

import {
  MatIconModule,
  MatMenuModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { ScatterModule, scatterRoutes } from '@kmeal-nx/scatter';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent],
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
    FeatureHomeModule,
    ScatterModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          children: homeRoutes
        },
        {
          path: 'profile',
          children: scatterRoutes
        },
        {
          path: 'menu',
          loadChildren: '@kmeal-nx/feature-menu#FeatureMenuModule'
        }
      ],
      { paramsInheritanceStrategy: 'always' }
    )
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
