import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'kmeal-nx-profile-client-credit-card',
    moduleId: module.id,
    templateUrl: './profile-credit-card.component.html'
})
export class ProfileCreditCardComponent {
    view:number = 1;
    isEmpty:boolean = true;

    constructor(){}
}