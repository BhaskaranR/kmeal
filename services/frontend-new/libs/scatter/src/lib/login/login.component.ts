import { Component, OnInit } from '@angular/core';
import { ScatterService } from '../services/scatter.service';


@Component({
    selector: 'kmeal-nx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        public scatter: ScatterService) {
    }

    ngOnInit() {
        console.log("LoginComponet.this.scatter.network: ---> ", this.scatter.network);
    }

    login() {
        this.scatter.login().then((identity) => {
            console.log("identity", identity);
        });
    }

    logout() {
        this.scatter.logout();
    }
}
