import { Injectable } from '@angular/core';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import ScatterLynx from 'scatterjs-plugin-lynx';
import { Network } from 'scatterjs-core';
import * as Eos from 'eosjs';

let scatter: ScatterJS;
import { HttpClient } from '@angular/common/http';
import { BigNumber } from 'bignumber.js';

@Injectable()
export class ScatterService {
    restaurant_id = 440;
    selectedNetwork: Network;
    balance: '0.0000 KMEAL';
    networks: Network[] = [];
    scatter;
    balanceTimeout;

    constructor(private http: HttpClient) {
    }

    code :'kmealadminio';

    RETURN_TYPES : {
        ERROR: 0,
        SUCCESS: 1
    };

    eos;
    reader; 
    contract;
    formatRow (result, model) {
        result.rows = result.rows.map(model.fromJson);
        return result;
    };
    getRowsOnly(result){return result.rows};
    getFirstOnly(result){return result.rows.length ? this.getRowsOnly(result)[0] : null};

    async read ({ table, index, upper_bound = null, limit = 10, model = null, scope = this.code, firstOnly = false, rowsOnly = false, key_type = null, index_position = null }) {
        let self = this;
        let code = this.code;
        let additions = index !== null ? { lower_bound: index, upper_bound: upper_bound ? upper_bound : new BigNumber(index).plus(limit).toString() } : {};
        if (key_type) additions = Object.assign({ key_type }, additions);
        if (index_position) additions = Object.assign({ index_position }, additions);
        return await this.reader.getTableRows(Object.assign({ json: true, code, scope, table, limit }, additions)).then(result => {
            if (model) result = this.formatRow(result, model);
            if (firstOnly) return this.getFirstOnly(result);
            if (rowsOnly) return this.getRowsOnly(result);
            return result;
        });
     };

    errorMessage(err) {
        const msg = typeof err === 'string'
            ? (() => {
                const j = JSON.parse(err);
                return j.error.details.length
                    ? JSON.parse(err).error.details[0].message.replace('assertion failure with message: ', '')
                    : j;
            })()
            : err.message;
        return { type: this.RETURN_TYPES.ERROR, msg }
    }
    success (msg){return { type: this.RETURN_TYPES.SUCCESS, msg }};
    

    async initScatter(network: string) {
        await this.loadNetworks(network);
        ScatterJS.plugins(new ScatterEOS(), new ScatterLynx());
        const connected = await ScatterJS.scatter.connect('kmeal')
        if (!connected) {
            window["scatter"] = null;
            return;
        }

        this.scatter = scatter = ScatterJS.scatter;
        return await this.setSignatureProvider();
    }

    get identity(){
        if(!scatter) return null;
        return scatter.identity;
    };

    get account(){
        if(!scatter || !scatter.identity) return;
        return scatter.identity.accounts[0];
    };
    
    get accountName(){
        if(!this.account) return;
        return this.account.name;
    };

    getScatter() {
        return this.scatter;
    }


    getContract() {
        return this.contract;
    }

    setEos = () => {
        this.reader = Eos({ httpEndpoint: this.selectedNetwork.fullhost(), chainId: this.selectedNetwork.chainId });
        this.eos = Eos({ httpEndpoint: this.selectedNetwork.fullhost(), chainId: this.selectedNetwork.chainId });
    };

    loadNetworks(network: string) {
        return new Promise((resolve, reject) => {
            this.http.get<any>("assets/endpoints.json").toPromise().then(async (networks) => {
                this.networks = networks.map((n: any) => Network.fromJson(n))
                this.setNetwork(network);
                resolve();
            }).catch((e) => reject(e));
        });
    }

    setNetwork(network) {
        this.selectedNetwork = this.networks.filter(n => n.name == network)[0];
        this.setEos();
    }

    async loginorlogout() {
        if (!scatter) return;
        if (!scatter.identity) {
            const identity = await scatter.getIdentity({ 
                personal:['firstname', 'lastname', 'email'],
                location:['country', 'phone', 'address',],
                accounts: [this.selectedNetwork] });
            return await this.setSignatureProvider();
        }
        else {
            scatter.forgetIdentity()
            return await this.setSignatureProvider();
        }
    }

    /*****************************************/
    /**               WRITE                 **/
    /*****************************************/

    async setSignatureProvider() {
        try {
            if (!scatter || !scatter.identity) {
                this.setEos();
                this.contract = null;
                return false;
            }
            this.eos = scatter.eos(this.selectedNetwork, Eos);
            this.contract = await this.eos.contract(this.code, {requiredFields:{}});
        }
        catch (e) {
            console.log(e);
        }
    }

 

    /*****************************************/
    /**               READ                  **/
    /*****************************************/


    async watchBalance() {
        const timeout = () => this.balanceTimeout = setTimeout(() => this.watchBalance(), 60000);
        clearTimeout(this.balanceTimeout);
        if (!scatter || !scatter.identity) return timeout();
        const account = await this.reader.getAccount(scatter.identity.accounts[0].name).catch(res => null);
        if (account) this.balance = account.core_liquid_balance;
        timeout();
    }

}