import { NgModule, NO_ERRORS_SCHEMA ,Component } from "@angular/core";
import { SharedModule } from "../../features/shared/shared.module";

@Component({
    selector:'app-404',
    template:'Page not found',
})
export class FourZeroFourComponent {
    constructor(){}
}


@NgModule({
    imports: [ SharedModule],
    declarations: [
        FourZeroFourComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }