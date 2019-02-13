import { Injectable } from '@angular/core';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import ScatterLynx from 'scatterjs-plugin-lynx';
import { Network } from 'scatterjs-core';
import * as Eos from 'eosjs';

let eos, reader, contract, balanceTimeout;

import { HttpClient } from '@angular/common/http';
import { BigNumber } from 'bignumber.js';
export const code = 'kmealadmin13';

export const RETURN_TYPES = {
    ERROR: 0,
    SUCCESS: 1
};


const formatRow = (result, model) => {
    result.rows = result.rows.map(model.fromJson);
    return result;
};
const getRowsOnly = result => result.rows;
const getFirstOnly = result => result.rows.length ? getRowsOnly(result)[0] : null;

const read = async ({ table, index, upper_bound = null, limit = 10, model = null, scope = code, firstOnly = false, rowsOnly = false, key_type = null, index_position = null }) => {
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

const errorMessage = (err) => {
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
const success = (msg) => ({ type: RETURN_TYPES.SUCCESS, msg });

@Injectable()
export class ScatterService {
    restaurant_id = 440;
    selectedNetwork: Network;
    balance: '0.0000 KMEAL';
    networks: Network[] = [];

    scatter: ScatterJS;
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

        this.scatter = ScatterJS.scatter;
        return await this.setSignatureProvider();
    }

    setEos = () => {
        reader = Eos({ httpEndpoint: this.selectedNetwork.fullhost(), chainId: this.selectedNetwork.chainId });
        eos = Eos({ httpEndpoint: this.selectedNetwork.fullhost(), chainId: this.selectedNetwork.chainId });
    };

    checkLogin = (resolve, cb) => {
        if (!this.scatter.identity) return resolve(errorMessage('Please log in with Scatter first.'));
        const account = this.scatter.identity.accounts[0];
        const opts = { authorization: `${account.name}@${account.authority}` };
        cb(account, opts);
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
        if (!this.scatter) return;
        if (!this.scatter.identity) {
            const identity = await this.scatter.getIdentity({ accounts: [this.selectedNetwork] });
            return await this.setSignatureProvider();
        }
        else {
            this.scatter.forgetIdentity()
            return await this.setSignatureProvider();
        }
    }

    async setSignatureProvider() {
        try {
            if (!this.scatter || !this.scatter.identity) {
                this.setEos();
                contract = null;
                return false;
            }
            eos = this.scatter.eos(this.selectedNetwork, Eos);
            contract = await eos.contract(code, {requiredFields:{}});

        }
        catch (e) {
            console.log(e);
        }
    }

    get identity(){
        if(!this.scatter) return null;
        return this.scatter.identity;
    };

    get account(){
        if(!this.scatter || !this.scatter.identity) return;
        return this.scatter.identity.accounts[0];
    };
    
    get accountName(){
        if(!this.account) return;
        return this.account.name;
    };

    async watchBalance() {
        const timeout = () => balanceTimeout = setTimeout(() => this.watchBalance(), 60000);
        clearTimeout(balanceTimeout);
        if (!this.scatter || !this.scatter.identity) return timeout();
        const account = await reader.getAccount(this.scatter.identity.accounts[0].name).catch(res => null);
        if (account) this.balance = account.core_liquid_balance;
        timeout();
    }

}