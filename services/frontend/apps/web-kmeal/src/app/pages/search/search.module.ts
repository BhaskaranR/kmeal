import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../../features/shared/shared.module";
import { Routes, RouterModule } from '@angular/router';
import { NavBarModule } from "../../features/shared/nav-bar/nav.module";
import { SearchComponent } from "./search.component";
import { RestaurantModule } from "../../features/shared/restaurant/res.module";


export const routing: Routes = [
    { path: '', component: SearchComponent },
];

const routingModule = RouterModule.forChild(routing)


@NgModule({
    imports: [
        SharedModule,
        routingModule,
        RestaurantModule
    ],
    declarations: [
        SearchComponent
    ],
    providers:[],
    exports:[SearchComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }