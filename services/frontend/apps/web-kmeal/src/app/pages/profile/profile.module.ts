import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule} from 'nativescript-angular/forms';


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfileModule { }