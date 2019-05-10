import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ScatterService } from '@kmeal-nx/scatter';

@Component({
    selector: 'kmeal-nx-profile-detail',
    moduleId: module.id,
    templateUrl: './profile-detail.component.html',
    styles:[`
    .card-avatar{
        width:100px;
        height:100px;
        border:1px solid #999;
        margin-left:auto;
        margin-right:auto;
        border-radius:800px;

        .card-avatar-text {
            position: relative;
            margin-bottom:60px;
            top: 8%;
            left: 41%;
            font-size: 65px;
        }
    }
    `]
})
export class ProfileDetailCompoonent implements OnInit {
    isLoggedIn:boolean = false;
    identity:any;
    constructor(
        public scatterService:ScatterService
    ){}

    ngOnInit(){
        console.log('lazy loading ?!');
      this.isLoggedIn = this.scatterService.scatter ?  this.scatterService.scatter.identity ? true: false : false;
      console.log(this.scatterService.scatter.identity);
      if (!this.isLoggedIn) return;
      this.identity = this.scatterService.scatter.identity;
    }
}