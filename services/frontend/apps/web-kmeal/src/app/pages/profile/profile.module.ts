import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../../features/shared/shared.module";
import { ProfileComponent } from "./profile.component";
import { Routes, RouterModule } from '@angular/router';


export const routing: Routes = [
    { path: '', component: ProfileComponent },
];

const routingModule = RouterModule.forChild(routing)

@NgModule({
    imports: [ SharedModule,routingModule],
    declarations: [
        ProfileComponent
    ],
    exports:[ProfileComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfileModule { }