import { Injectable } from "@angular/core";
import * as Eos from 'eosjs';
import { Book } from '../model/books';
import { Section } from '../model/section';
import { Item } from '../model/item';
import { UalService } from 'ual-ngx-material-renderer';
import { environment } from "@env/restaurant";
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { read, generateTransaction, transactionConfig } from '@utils';
const { format } = Eos.modules;

@Injectable()
export class MenuService {

    reader;
    user;
    accountName;
    constructor(private ualService: UalService) {
       this.reader = Eos({httpEndpoint: `${environment.RPC_PROTOCOL}://${environment.RPC_HOST}:${environment.RPC_PORT}`, chainId:environment.CHAIN_ID});
     }


    createbook(bookname: string) {
        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {
                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "createbook", {
                            account: accountName,
                            bookname: bookname
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    deleteBook(bookid: string) {
        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {
                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "delbook", {
                            bookid: bookid
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    addSection(bookid, sectionname) {

        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {

                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "addsections", {
                            bookid: bookid,
                            sectionname: sectionname
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    setSecOrder(bookid, sectionid, secOrder) {

        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {
                        
                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "setsecorder", {
                            bookid: bookid,
                            sectionid: sectionid,
                            sortorder: secOrder
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    createItem(itemname, description, photo = '', spice_level = 0, vegetarian, cooking_time, types) {

        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {

                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "createitem", {
                            account: accountName,
                            itemname: itemname,
                            description: description,
                            photo: photo,
                            spicy_level: spice_level,
                            vegetarian: vegetarian,
                            cooking_time: cooking_time,
                            types: types
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    addToSection(bookId, sectionId, itemId, order) {

        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {

                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "addtosection", {
                            bookid: bookId,
                            sectionid: sectionId,
                            itemid: itemId,
                            sortorder: order
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    deleteSection(bookid, sectionid) {
        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {

                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "delsec", {
                            bookid: bookid,
                            secid: sectionid,
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    editItem(itemid, itemname, description, photo, spice_level, vegetarian, cooking_time, types) {

        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {

                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "edititem", {
                            itemid: itemid,
                            itemname: itemname,
                            description: description,
                            photo: photo,
                            spicy_level: spice_level,
                            vegetarian: vegetarian,
                            cooking_time: cooking_time,
                            types: types
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    removeFromSection(bookid, sectionid, itemid) {

        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {

                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "removefromsec", {
                            bookid: bookid,
                            sectionid: sectionid,
                            itemid: itemid,
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    createListing(bookId, itemId, sectionId, listType, listPrice, minPrice, qty, expires, slidingRate, sides) {
        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {
                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "listitem", {
                            book_id: bookId,
                            item_id: itemId,
                            section_id: sectionId,
                            list_type: listType,
                            list_price: listPrice,
                            min_price: minPrice,
                            quantity: qty,
                            expires: expires,
                            sliding_rate: slidingRate,
                            sides: sides
                        });
                        const res = await user.signTransaction(transaction, transactionConfig);
                        resolve(res);
                    } else {
                        this.ualService.showModal();
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }




    /*****************************************/
    /**               READ                  **/
    /*****************************************/

    async getMyBooks() {
        const users = this.ualService.users$.value;
         if (users == null || users.length <=0) {
             return;
         }
        const accountName = await users[0].getAccountName();
        const books = await read({
            reader: this.reader,
            table: 'books',
            limit: 100,
            rowsOnly: true,
            key_type: 'i64',
            model: Book,
            index_position: 2,
            index: format.encodeName(accountName, false)
        });
        return books;
    }

    async getMySections() {
        const users = this.ualService.users$.value;
         if (users == null || users.length <=0) {
             return;
         }
        const accountName = await users[0].getAccountName();
        return await read({
            reader: this.reader,
            table: 'sec',
            limit: 100,
            rowsOnly: true,
            key_type: 'i64',
            model: Section,
            index_position: 2,
            index: format.encodeName(accountName, false)
        });
    }

    async getMyItems() {
        const users = this.ualService.users$.value;
        if (users == null || users.length <=0) {
            return;
        }
       const accountName = await users[0].getAccountName();
        return await read({
            reader: this.reader,
            table: 'items',
            limit: 100,
            rowsOnly: true,
            key_type: 'i64',
            model: Item,
            index_position: 2,
            index: format.encodeName(accountName, false)
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

    getAccountName(){
        return new Promise(async (res, rej)=>{
            if (this.accountName) res(this.accountName);

            const user = await this.getUser();
            res(this.accountName);
        });
    }
}