import { Injectable } from '@angular/core';
import { Scatter } from 'ual-scatter';
import {ScatterUser, ScatterAuthenticator} from './ual-auth';

@Injectable()
export class ScatterUIService {
    appName = 'kmeal';
    scatter:Scatter;
    user:any;
    network = {
        chainId: "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",
        rpcEndpoints: [{
          protocol: 'https',
          host: "api.kylin.alohaeos.com",
          port: 443,
        }]
    };

    accountName:string;

    constructor(){
        this.scatter = new Scatter([this.network],{appName:this.appName});
        this.scatter.init();
        console.log('scatter : ', this.scatter);
    }

    initScatter(){
        return this.scatter
    }

    async login(){
        const users = await this.scatter.login();
        this.user = users[0]
        return this.user;
    }

    async  logout(){
        await this.scatter.logout();
    }

    async signTransaction(transaction,config) {
        return await this.user.signTransaction(transaction,config);
    }
}