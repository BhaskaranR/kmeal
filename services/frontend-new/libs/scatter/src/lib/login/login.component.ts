import { Component, OnInit } from '@angular/core';
import { ScatterService } from '../services/scatter.service';


@Component({
    selector: 'kmeal-nx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        public scatterService: ScatterService) {
    }

    ngOnInit() {
      //  console.log("LoginComponet.this.scatter.network: ---> ", this.scatter.network);
    }

    login() {
        if(!this.scatterService.scatter) return;
        if(!this.scatterService.scatter.identity) 
            return this.scatterService.scatter.getIdentity({accounts:[this.scatterService.selectedNetwork]});
        else return this.scatterService.scatter.forgetIdentity()
    }

    logout() {
        this.scatterService.scatter.forgetIdentity();
    }
}
