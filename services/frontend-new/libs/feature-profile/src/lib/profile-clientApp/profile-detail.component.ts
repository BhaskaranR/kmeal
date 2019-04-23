import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ScatterUIService } from '@kmeal-nx/scatter';

@Component({
    selector: 'kmeal-nx-profile-detail',
    moduleId: module.id,
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailCompoonent implements OnInit {
    isLoggedIn:boolean = false;
    error:string;
    identity:{[key:string]:any};

    constructor(
        public scatterUIService:ScatterUIService
    ){}

    async ngOnInit(){
      //this.identity = await this.scatterUIService.user.scatter.getIdentity() ;
      //if (this.identity) {
       //   this.isLoggedIn = true;
     // }
    }
}