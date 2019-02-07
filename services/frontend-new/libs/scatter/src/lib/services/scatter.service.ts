import { Injectable } from '@angular/core';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs'
import { Network } from 'scatterjs-core';
import Eos from 'eosjs';
console.log(Eos);
import { HttpClient } from '@angular/common/http';
import { BigNumber } from 'bignumber.js';
let eos, reader, contract, balanceTimeout;

export const code = 'kmeal';

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
    selectedNetwork: Network;
    balance: '0.0000 KMEAL';
    networks: Network[] = [];

    scatter: ScatterJS;
    constructor(private http: HttpClient) {
    }

    initScatter(network: string) {
        this.loadNetworks(network);
        ScatterJS.plugins(new ScatterEOS());
        ScatterJS.connect('kmeal').then((connected: any) => {
            this.scatter = ScatterJS;
            if (!connected) {
                window["scatter"] = null;
                return;
            }
        })
    }

    checkLogin = (resolve, cb) => {
        if (!this.scatter.identity) return resolve(errorMessage('Please log in with Scatter first.'));
        const account = this.scatter.identity.accounts[0];
        const opts = { authorization: `${account.name}@${account.authority}` };
        cb(account, opts);
    };

    // setEos = () => {
    //     reader = Eos({ httpEndpoint: this.selectedNetwork.fullhost(), chainId: this.selectedNetwork.chainId });
    //     eos = Eos({ httpEndpoint: this.selectedNetwork.fullhost(), chainId: this.selectedNetwork.chainId });
    // }

    loadNetworks(network: string) {
        this.http.get<any>("assets/endpoints.json").toPromise().then(async (networks) => {
            this.networks = networks.map((n: any) => Network.fromJson(n))
            await this.setNetwork(network);
        });
    }

    async setNetwork(network) {
        this.selectedNetwork = this.networks.filter(n => n.name == network)[0];
        //this.setEos();
        await this.setSignatureProvider();
    }

    async setSignatureProvider() {
        if (!this.scatter || !this.scatter.identity) {
          //  this.setEos();
            contract = null;
            return false;
        }
        eos = this.scatter.eos(this.selectedNetwork, Eos);
        contract = await eos.contract(code);
    }

    async watchBalance() {
        const timeout = () => balanceTimeout = setTimeout(() => this.watchBalance(), 60000);
        clearTimeout(balanceTimeout);
        if (!this.scatter || !this.scatter.identity) return timeout();
        const account = await reader.getAccount(this.scatter.identity.accounts[0].name).catch(res => null);
        if (account) this.balance = account.core_liquid_balance;
        timeout();
    }

}