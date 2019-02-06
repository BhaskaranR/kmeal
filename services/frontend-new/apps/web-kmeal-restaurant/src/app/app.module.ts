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
import { Routes, RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav/nav.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScatterModule, scatterRoutes, ScatterService } from '@kmeal-nx/scatter';

export function init_app(scatterService: ScatterService) {
  return () => scatterService.initScatter('Kylin');
}

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
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
    ScatterModule,
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
        { path: "orders", loadChildren: "@kmeal-nx/feature-restaurant-orders#FeatureRestaurantOrdersModule" },
        { path: 'menus', loadChildren: '@kmeal-nx/feature-restaurant-menu#FeatureRestaurantMenuModule' },
        {
          path: 'profile',
          children: scatterRoutes
        },
      ],
      { paramsInheritanceStrategy: "always" }
    ),
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [

    { provide: APP_INITIALIZER, useFactory: init_app, deps: [ScatterService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
