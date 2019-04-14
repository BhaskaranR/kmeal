import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ScatterService } from '@kmeal-nx/scatter';

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
        public scatterService:ScatterService
    ){}

    ngOnInit(){
      this.identity = this.scatterService.scatter.identity;
      console.log(this.identity);
      if (this.identity){
          this.isLoggedIn = true;
      }

      console.log(this.scatterService.getContract())
    }
}