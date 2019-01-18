import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ResComponent } from "./res.component";
import { SharedModule } from "../../features/shared/shared.module";
import { Routes, RouterModule } from '@angular/router';
import { DishModule } from "../../features/shared/dish/dish.module";


export const routing: Routes = [
    { path: '', component: ResComponent },
];

const routingModule = RouterModule.forChild(routing)


@NgModule({
    imports: [
        SharedModule,
        routingModule,
        DishModule
    ],
    declarations: [
        ResComponent
    ],
    providers:[],
    exports:[ResComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ResModule { }