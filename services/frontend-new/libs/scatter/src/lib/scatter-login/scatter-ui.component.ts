import { Component, OnInit } from '@angular/core';
import { ScatterUIService } from '../services/scatter-ui.service';


@Component({
    selector: 'kmeal-nx-scatter-ui',
    templateUrl: './scatter-ui.component.html'
})

export class ScatterUIComponent implements OnInit {
    isLoggedIn:boolean=false;
    user:any;
    scatter:any;
    constructor(public scatterUIService:ScatterUIService){}
    
    ngOnInit(){
        this.scatterUIService.initScatter();
    }

    async login(){
        this.user = await this.scatterUIService.login();
        this.isLoggedIn = true;
    }


    async logout(){
        await this.scatterUIService.logout();
    }

    
}