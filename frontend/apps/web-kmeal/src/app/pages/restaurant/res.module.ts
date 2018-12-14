import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ResComponent } from "./res.component";
import { SharedModule } from "../../features/shared/shared.module";
import { ResService } from "./res.service";
import { Routes, RouterModule } from '@angular/router';


export const routing: Routes = [
    { path: '', component: ResComponent },
];

const routingModule = RouterModule.forChild(routing)


@NgModule({
    imports: [SharedModule,routingModule],
    declarations: [
        ResComponent
    ],
    providers:[ResService],
    exports:[ResComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ResModule { }