import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'kmeal-nx-profile-client',
    moduleId: module.id,
    templateUrl: './profile-client.component.html',
    styleUrls:['./profile-client.scss']
})
export class ProfileClientComponent {
    view:number = 2;
    constructor(){}
}