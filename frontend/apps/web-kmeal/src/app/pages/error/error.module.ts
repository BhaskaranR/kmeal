import { NgModule, NO_ERRORS_SCHEMA ,Component } from "@angular/core";
import { SharedModule } from "../../features/shared/shared.module";
import { Routes, RouterModule } from "@angular/router";

@Component({
    selector:'app-404',
    template:'Page not found',
})
export class FourZeroFourComponent {
    constructor(){}
}


export const routing: Routes = [
    { path: '', component: FourZeroFourComponent },
];

const routingModule = RouterModule.forChild(routing);


@NgModule({
    imports: [ SharedModule,routingModule],
    declarations: [FourZeroFourComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ErrorModule { }