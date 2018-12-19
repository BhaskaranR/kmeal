import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../../features/shared/shared.module";
import { Routes, RouterModule } from '@angular/router';
import { DishComponent } from "./dish.comonent";
import { DishService } from "./dish.service";
import { DishListModule } from "../../features/shared/dish-list/dish-list.module";
import { NavBarModule } from "../../features/shared/nav-bar/nav.module";
import { CheckoutDialogComponent } from "./checkout.component";


export const routing: Routes = [
    { path: '', component: DishComponent },
];

const routingModule = RouterModule.forChild(routing);


@NgModule({
    imports: [SharedModule,routingModule, NavBarModule],
    declarations: [
        DishComponent,
        CheckoutDialogComponent
    ],
    providers:[DishService],
    exports:[DishComponent,CheckoutDialogComponent],
    entryComponents:[CheckoutDialogComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DishModule { }