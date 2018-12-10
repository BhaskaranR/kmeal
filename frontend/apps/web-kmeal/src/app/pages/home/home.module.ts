import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from "../../features/shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SearchBarModule } from "../../features/shared/search-bar/search-bar.module";


const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
  ];
  
const routing = RouterModule.forChild(routes);

@NgModule({
    imports: [routing, FlexLayoutModule, SearchBarModule],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }