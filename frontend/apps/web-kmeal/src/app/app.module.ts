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
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";


@NgModule({
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ApolloModule,
    HttpLinkModule
  ],
  declarations: [AppComponent],
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
    {
      provide:APOLLO_OPTIONS,
      useFactory(httpLink:HttpLink){
        return {
          cache:new InMemoryCache(),
          link:httpLink.create({
            uri:environment.graphql_url,
          })
        }
      },
      deps:[HttpLink]
    }
  ]
})
export class AppModule {}
