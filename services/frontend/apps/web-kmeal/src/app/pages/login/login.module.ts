import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule} from 'nativescript-angular/forms';
import {LoginComponent} from './login.component';
import { SignupComponent } from "./signup.component";
import { routing } from "./login.routing";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routing)
    ],
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