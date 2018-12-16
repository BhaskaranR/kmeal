import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../../features/shared/shared.module";
import { Routes, RouterModule } from '@angular/router';
import { DishComponent } from "./dish.comonent";
import { DishService } from "./dish.service";
import { DishListModule } from "../../features/shared/dish-list/dish-list.module";


export const routing: Routes = [
    { path: '', component: DishComponent },
];

const routingModule = RouterModule.forChild(routing)


@NgModule({
    imports: [SharedModule,routingModule],
    declarations: [
        DishComponent
    ],
    providers:[DishService],
    exports:[DishComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DishModule { }