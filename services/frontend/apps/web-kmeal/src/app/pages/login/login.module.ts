import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {LoginComponent} from './login.component';
import { SignupComponent } from "./signup.component";
import { Routes, RouterModule } from '@angular/router';


export const routing: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent}
];

const routingModule = RouterModule.forChild(routing)

@NgModule({
    imports: [routingModule],
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