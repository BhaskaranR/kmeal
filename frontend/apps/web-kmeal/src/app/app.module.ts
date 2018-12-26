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
import { ApolloModule, APOLLO_OPTIONS, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { NavBarModule } from './features/shared/nav-bar/nav.module';
import { NavFooterLayout } from './layouts/nav-footer.layout';
import {ShoppingCartModule} from './features/shared/shopping-cart/shopping-cart.module';

import { HttpHeaders } from '@angular/common/http';
import { setContext } from 'apollo-link-context';
import { ApiModule } from './api.module';


@NgModule({
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ApolloModule,
    HttpLinkModule,
    NavBarModule,
    ShoppingCartModule,
    ApiModule
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
