import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from "../../features/shared/shared.module";
import { SearchBarModule } from "../../features/shared/search-bar/search-bar.module";
import { RestaurantModule } from "../../features/shared/restaurant/res.module";
import { DishModule } from "../../features/shared/dish/dish.module";
import {NguCarouselModule} from '@ngu/carousel';
import 'hammerjs';
import { NavBarModule } from "../../features/shared/nav-bar/nav.module";

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
  ];
  
const routing = RouterModule.forChild(routes);

@NgModule({
    imports: [
        routing, 
        SharedModule, 
        SearchBarModule, 
        RestaurantModule, 
        DishModule,
        NavBarModule,
        NguCarouselModule],
    declarations: [
        HomeComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomeModule { }