import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {LoginComponent} from './login.component';
import { SignupComponent } from "./signup.component";
import { routing } from "./login.routing";

@NgModule({
    imports: [routing],
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    entryComponents:[
        LoginComponent,
    ],
    exports:[],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }