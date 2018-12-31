import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../../features/shared/shared.module";
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from "./cart.component";


export const routing: Routes = [
    { path: '', component: CartComponent },
];

const routingModule = RouterModule.forChild(routing)


@NgModule({
    imports: [
        SharedModule,
        routingModule,
    ],
    declarations: [
        CartComponent
    ],
    providers:[],
    exports:[CartComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CartModule { }