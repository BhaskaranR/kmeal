import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";

import { AppComponent } from "./app.component";
import { NxModule } from "@nrwl/nx";
import { ApiModule } from "./graphql.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav/nav.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UalModule } from 'ual-ngx-material-renderer';
import { Chain } from 'universal-authenticator-library';
import { Scatter } from 'ual-scatter';
import { EOSIOAuth } from 'ual-eosio-reference-authenticator';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from "@env/restaurant";
import {AuthGuard} from './app.guard';



const appName = 'demo';
const chain: Chain = {
  chainId: environment.CHAIN_ID,
  rpcEndpoints: [{
    protocol: environment.RPC_PROTOCOL,
    host: environment.RPC_HOST,
    port: environment.RPC_PORT
  }]
};


// const lynx = new Lynx([exampleNet])
// const ledger = new Ledger([exampleNet])
const scatter = new Scatter([chain], {appName});
const eosioAuth = new EOSIOAuth([chain], { appName, protocol: 'eosio' });


@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    UalModule.forRoot({
      chains: [chain],
      authenticators: [scatter, eosioAuth],
      appName
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    ApiModule,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          redirectTo: "/dashboard",
          pathMatch: "full"
        },
        {
          path: "dashboard",
          loadChildren: "@kmeal-nx/feature-restaurant-dashboard#FeatureRestaurantDashboardModule"
        },
        {
          path: "profile",
          loadChildren: "@kmeal-nx/feature-restaurant-profile#FeatureRestaurantProfileModule",
          canActivate:[AuthGuard],
        },
        { 
          path: "orders", 
          loadChildren: "@kmeal-nx/feature-restaurant-orders#FeatureRestaurantOrdersModule",
          canActivate:[AuthGuard] 
        } ,
        { 
          path: 'menus', 
          loadChildren: '@kmeal-nx/feature-restaurant-menu#FeatureRestaurantMenuModule',
          canActivate:[AuthGuard] },
      
      ],
      { paramsInheritanceStrategy: "always" }
    ),
    BrowserAnimationsModule,
    LayoutModule
  ],
  bootstrap: [AppComponent],
  providers:[AuthGuard]
})
export class AppModule { }
