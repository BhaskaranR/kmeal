import { Injectable } from "@angular/core";
import * as Eos from 'eosjs';
import { UalService } from 'ual-ngx-material-renderer';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { read, generateTransaction, transactionConfig } from '@utils';
import { Order } from "../models/Order";
import { environment } from "@env/frontend";

const { format } = Eos.modules;

@Injectable()
export class OrderService {

    reader;
    user;
    accountName;
    constructor(private ualService: UalService) {
       this.reader = Eos({httpEndpoint: `${environment.RPC_PROTOCOL}://${environment.RPC_HOST}:${environment.RPC_PORT}`, chainId:environment.CHAIN_ID});
    }

    async getMyOrders() {
        const users = this.ualService.users$.value;

         if (users == null || users.length <=0) {
            return;
        }

        this.accountName = await users[0].getAccountName();
        return await read({
            reader: this.reader,
            table: 'orders',
            limit: 100,
            rowsOnly: true,
            key_type: 'i64',
            model: Order,
            index_position: 2,
            index: format.encodeName(this.accountName, false)
        });
    }

    getUser(){
        return new Promise((res, rej) => {
            if (this.user) res(this.user);

            const unsubscribe$ = new Subject();
            try{
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {
                        unsubscribe$.next();
                        unsubscribe$.complete();
                        this.user = val[val.length - 1];
                        this.accountName = await this.user.getAccountName();
                        res(this.user);
                    }
                })
            }
            catch(e){
                rej(e);
            }
            
        })
    }

    acceptRequest(seller, orderId){
        return new Promise(async (resolve, reject) => {
            try{
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                    this.accountName = await this.user.getAccountName();
                }

                const transaction = generateTransaction(this.accountName, "accept", {
                    seller: seller,
                    order_id:orderId
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            } catch(e){
                reject(e);
            }
        });
    }

    cancelOrder(orderId){
        return new Promise(async (resolve, reject) => {
            try{
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "cancel", {
                    order_id:orderId
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            } catch(e){
                reject(e);
            }
        });
    }

    readyToPickup(orderId, memo){
        return new Promise(async (resolve, reject) => {
            try{
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "delivered", {
                    order_id:orderId,
                    memo:memo
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            } catch(e){
                reject(e);
            }
        });
    }

    setArbiter(account, contactName, email, description, website, phone, isoCountry){
        return new Promise(async (resolve, reject) => {
            try{
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "delivered", {
                    account: account,
                    contactName:contactName,
                    email:email,
                    description: description,
                    website: website,
                    phone: phone,
                    iso_country:isoCountry
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            } catch(e){
                reject(e);
            }
        });
    }
}