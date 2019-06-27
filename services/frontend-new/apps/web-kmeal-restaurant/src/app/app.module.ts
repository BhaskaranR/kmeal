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
import { ScatterModule, ScatterService } from '@kmeal-nx/scatter';
import { UalModule } from 'ual-ngx-material-renderer';
import { Chain } from 'universal-authenticator-library';
import { Scatter } from 'ual-scatter';
import { EOSIOAuth } from 'ual-eosio-reference-authenticator';


const appName = 'kmeal';
const chain: Chain = {
  chainId: "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",
  rpcEndpoints: [{
    protocol: "https",
    host: "api.kylin.alohaeos.com",
    port: 443
  }]
};

// const lynx = new Lynx([exampleNet])
// const ledger = new Ledger([exampleNet])
const scatter = new Scatter([chain], {appName});
const eosioAuth = new EOSIOAuth([chain], { appName, protocol: 'eosio' });

export function init_app(scatterService: ScatterService) {
  return () => scatterService.initScatter('Kylin');
}

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
   // ScatterModule,
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
          loadChildren: "@kmeal-nx/feature-restaurant-profile#FeatureRestaurantProfileModule"
        },
        { path: "orders", loadChildren: "@kmeal-nx/feature-restaurant-orders#FeatureRestaurantOrdersModule" },
        { path: 'menus', loadChildren: '@kmeal-nx/feature-restaurant-menu#FeatureRestaurantMenuModule' },
      
      ],
      { paramsInheritanceStrategy: "always" }
    ),
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [
  //  { provide: APP_INITIALIZER, useFactory: init_app, deps: [ScatterService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
