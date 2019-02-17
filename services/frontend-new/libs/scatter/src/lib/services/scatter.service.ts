import { Injectable } from '@angular/core';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import ScatterLynx from 'scatterjs-plugin-lynx';
import { Network } from 'scatterjs-core';
import * as Eos from 'eosjs';

let scatter: ScatterJS;
export let eos;
export let reader; 
export let contract;

import { HttpClient } from '@angular/common/http';
import { BigNumber } from 'bignumber.js';
export const code = 'kmealadmin13';

export const RETURN_TYPES = {
    ERROR: 0,
    SUCCESS: 1
};


export const formatRow = (result, model) => {
    result.rows = result.rows.map(model.fromJson);
    return result;
};
export const getRowsOnly = result => result.rows;
export const getFirstOnly = result => result.rows.length ? getRowsOnly(result)[0] : null;

export const read = async ({ table, index, upper_bound = null, limit = 10, model = null, scope = code, firstOnly = false, rowsOnly = false, key_type = null, index_position = null }) => {
   let additions = index !== null ? { lower_bound: index, upper_bound: upper_bound ? upper_bound : new BigNumber(index).plus(limit).toString() } : {};
   if (key_type) additions = Object.assign({ key_type }, additions);
   if (index_position) additions = Object.assign({ index_position }, additions);
   return await reader.getTableRows(Object.assign({ json: true, code, scope, table, limit }, additions)).then(result => {
       if (model) result = formatRow(result, model);
       if (firstOnly) return getFirstOnly(result);
       if (rowsOnly) return getRowsOnly(result);
       return result;
   });
};

export const errorMessage = (err) => {
    const msg = typeof err === 'string'
        ? (() => {
            const j = JSON.parse(err);
            return j.error.details.length
                ? JSON.parse(err).error.details[0].message.replace('assertion failure with message: ', '')
                : j;
        })()
        : err.message;
    return { type: RETURN_TYPES.ERROR, msg }
}
export const success = (msg) => ({ type: RETURN_TYPES.SUCCESS, msg });

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
        return scatter;
    }


    getContract() {
        return contract;
    }

    setEos = () => {
        reader = Eos({ httpEndpoint: this.selectedNetwork.fullhost(), chainId: this.selectedNetwork.chainId });
        eos = Eos({ httpEndpoint: this.selectedNetwork.fullhost(), chainId: this.selectedNetwork.chainId });
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
            const identity = await scatter.getIdentity({ accounts: [this.selectedNetwork] });
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
                contract = null;
                return false;
            }
            eos = scatter.eos(this.selectedNetwork, Eos);
            contract = await eos.contract(code, {requiredFields:{}});

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
        const account = await reader.getAccount(scatter.identity.accounts[0].name).catch(res => null);
        if (account) this.balance = account.core_liquid_balance;
        timeout();
    }

}