import { Component, OnInit } from '@angular/core';
import { ScatterService } from '../services/scatter.service';


@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
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
