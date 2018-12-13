import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../../features/shared/shared.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
    imports: [ SharedModule],
    declarations: [
        ProfileComponent
    ],
    entryComponents:[
        ProfileComponent,
    ],
    exports:[ProfileComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfileModule { }