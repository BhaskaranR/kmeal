import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// libs
import { environment } from '@kmeal-frontend/core';

// app
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { SharedModule } from './features/shared/shared.module';
import { NavBarModule } from './features/shared/nav-bar/nav.module';
import { NavFooterLayout } from './layouts/nav-footer.layout';
import { ApiModule } from './api.module';
import { HttpClientModule } from '@angular/common/http';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { CoreModule } from './core/core.module';


@NgModule({
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NavBarModule,
    ApiModule,
    HttpClientModule,
    ScrollDispatchModule,
    CoreModule
  ],
  declarations: [AppComponent, NavFooterLayout],
  bootstrap: [AppComponent],
  providers: [
    {
        provide: APP_BASE_HREF,
        useValue: '/'
    },
    {
        provide: 'apiBase',
        useValue: environment.api_url
    },
    
  ]
})
export class AppModule {}