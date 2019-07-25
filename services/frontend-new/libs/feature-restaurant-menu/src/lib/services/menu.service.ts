import { Injectable } from "@angular/core";
import * as Eos from 'eosjs';
import { Book } from '../model/books';
import { Section } from '../model/section';
import { Item } from '../model/item';
import { UalService } from 'ual-ngx-material-renderer';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { read, generateTransaction, transactionConfig } from '@utils';
import { environment } from '@env/restaurant';
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
        return new Promise(async (resolve, reject) => {
            try {

                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                    this.accountName = await this.user.getAccountName();
                }

                const transaction = generateTransaction(this.accountName, "createbook", {
                    account: this.accountName,
                    bookname: bookname
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    deleteBook(bookid: string) {
        return new Promise(async (resolve, reject) => {
            try{
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                    this.accountName = await this.user.getAccountName();
                }

                const transaction = generateTransaction(this.accountName, "delbook", {
                    bookid: bookid
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            } catch(e){
                reject(e);
            }
        });
    }

    addSection(bookid, sectionname) {

        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                    this.accountName = await this.user.getAccountName();
                }

                const transaction = generateTransaction(this.accountName, "addsections", {
                    bookid: bookid,
                    sectionname: sectionname
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    setSecOrder(bookid, sectionid, secOrder) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "setsecorder", {
                    bookid: bookid,
                    sectionid: sectionid,
                    sortorder: secOrder
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    createItem(
        itemname, 
        description, 
        photo = '', 
        spice_level = 0, 
        vegetarian, 
        cooking_time, 
        types, 
        bookId, 
        sectionId) {

        const unsubscribe$ = new Subject();
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "createitem", {
                    account: this.accountName,
                    itemname: itemname,
                    description: description,
                    photo: photo,
                    spicy_level: spice_level,
                    vegetarian: vegetarian,
                    cooking_time: cooking_time,
                    types: types,
                    book_id:bookId,
                    section_id:sectionId
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    addToSection(bookId, sectionId, itemId, order) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "addtosection", {
                    bookid: bookId,
                    sectionid: sectionId,
                    itemid: itemId,
                    sortorder: order
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    deleteSection(bookid, sectionid) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "delsec", {
                    bookid: bookid,
                    secid: sectionid,
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    editItem(itemid, itemname, description, photo, spice_level, vegetarian, cooking_time, types) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "edititem", {
                    itemid: itemid,
                    itemname: itemname,
                    description: description,
                    photo: photo,
                    spicy_level: spice_level,
                    vegetarian: vegetarian,
                    cooking_time: cooking_time,
                    types: types
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    removeFromSection(sectionid, itemid) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "removefromsec", {
                    sectionid: sectionid,
                    itemid: itemid,
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    createListing(
        bookId, 
        itemId, 
        sectionId, 
        listType, 
        listPrice, 
        minPrice, 
        qty, 
        expires, 
        slidingRate, 
        sides) {
            return new Promise(async (resolve, reject) => {
                try {
                    if (!this.user || !this.accountName) {
                        this.user = await this.getUser();
                    }
    
                    const transaction = generateTransaction(this.accountName, "listitem", {
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
                    const res = await this.user.signTransaction(transaction, transactionConfig);
                    resolve(res);
                }
                catch (e) {
                    reject(e);
                }
            });
    }

    deleteItem(itemId) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = await this.getUser();
                }

                const transaction = generateTransaction(this.accountName, "delitem", {
                    itemid: itemId
                });
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
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