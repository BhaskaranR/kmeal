import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from "../../features/shared/shared.module";
import { SearchBarModule } from "../../features/shared/search-bar/search-bar.module";
import { RestaurantListModule } from "../../features/shared/restaurant-list/res-list.module";


const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
  ];
  
const routing = RouterModule.forChild(routes);

@NgModule({
    imports: [routing, SharedModule, SearchBarModule, RestaurantListModule],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }