import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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
    RouterModule.forRoot(
      [
        {
          path: "",
          redirectTo: "/home",
          pathMatch: "full"
        },
        {
          path: "home",
          loadChildren: "@kmeal-nx/feature-restaurant-dashboard#FeatureRestaurantDashboardModule"
        },
        { path: "orders", loadChildren: "@kmeal-nx/feature-restaurant-orders#FeatureRestaurantOrdersModule" },
         {path: 'menu', loadChildren: '@kmeal-nx/feature-restaurant-menu#FeatureRestaurantMenuModule'}
       
      ],
      { paramsInheritanceStrategy: "always" }
    ),
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
