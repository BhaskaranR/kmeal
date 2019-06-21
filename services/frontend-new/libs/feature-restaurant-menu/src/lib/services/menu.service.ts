import { Injectable } from "@angular/core";
import { ScatterService } from "@kmeal-nx/scatter";
import * as Eos from 'eosjs';
import { Book } from '../model/books';
import { Section} from '../model/section';
import {Item } from '../model/item';
const {format} = Eos.modules;

@Injectable()
export class MenuService {

    constructor(private scatterService: ScatterService) {}

    async createbook(bookname: string) {
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                
                const res = contracts[this.scatterService.code].createbook(
                    account.name,
                    bookname,
                    opts);
                return res;
            }, opts);
            return resp;
        }
        catch (e) {
            throw e;
        }
    }

    async deleteBook(bookId: string) {
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                
                const res = contracts[this.scatterService.code].delbook(
                    bookId,
                    opts);
                return res;
            }, opts);
            return resp;
        }
        catch (e) {
            throw e;
        }
    }

    async addSection(bookid, sectionname){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                const res = contracts[this.scatterService.code].addsections(
                    bookid,
                    sectionname,
                    opts);
                return res;
            }, opts);
            return resp;
        }
        catch (e) {
            throw e;
        }
    }

    async setSecOrder(bookid, sectionid, secOrder){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                
                const res = contracts[this.scatterService.code].setsecorder(
                    bookid,
                    sectionid,
                    secOrder,
                    opts);
                return res;
            }, opts);
            return resp;
        }
        catch (e) {
            throw e;
        }
    }


    async createItem(
        itemname, 
        description, 
        photo = '', 
        spice_level = 0, 
        vegetarian, 
        cooking_time, 
        types){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                
                const res = contracts[this.scatterService.code].createitem(
                    account.name,
                    itemname,
                    description,
                    photo,
                    spice_level,
                    vegetarian,
                    cooking_time,
                    types,
                    opts);
                return res;
            }, opts);
            return resp;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }

    async addToSection(bookId, sectionId, itemId, order){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                
                const res = contracts[this.scatterService.code].addtosection(
                    bookId,
                    sectionId,
                    itemId,
                    order,
                    opts);
                return res;
            }, opts);
            return resp;
        }
        catch (e) {
            throw e;
        }
    }

    async deleteSection(bookid, sectionid){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                
                const res = contracts[this.scatterService.code].delsec(
                    bookid,
                    sectionid,
                    opts);
                return res;
            }, opts);
            return resp;
        }
        catch (e) {
            throw e;
        }
    }

    async editItem(itemId, itemName, description, photo, spice_level, vegetarian, cooking_time,types){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                
                const res = contracts[this.scatterService.code].edititem(
                    itemId,
                    itemName,
                    description,
                    photo,
                    spice_level,
                    vegetarian,
                    cooking_time,
                    types,
                    opts);
                return res;
            }, opts);
            return resp;
        }
        catch (e) {
            throw e;
        }
    }

    async removeFromSection(bookId, sectionId, itemId){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                
                const res = contracts[this.scatterService.code].removefromsec(
                    bookId,
                    sectionId,
                    itemId,
                    opts);
                return res;
            }, opts);
            return resp;
        }
        catch (e) {
            throw e;
        }
    }

    async createListing(bookId, 
        itemId, 
        sectionId, 
        listType, 
        listPrice,
        minPrice,
        qty,expires,
        slidingRate,
        sides){
            try {
                const identity = await this.scatterService.scatter.getIdentity({
                    accounts: [this.scatterService.selectedNetwork]
                });
                const account = identity.accounts[0];
                const opts = { authorization: `${account.name}@${account.authority}` };
                const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                    
                    const res = contracts[this.scatterService.code].listitem(
                        bookId,
                        itemId,
                        sectionId,
                        listType,
                        listPrice,
                        minPrice,
                        qty,
                        expires,
                        slidingRate,
                        sides,
                        opts);
                    return res;
                }, opts);
                return resp;
            }
            catch (e) {
                throw e;
            }
        }




    /*****************************************/
    /**               READ                  **/
    /*****************************************/

    async getMyBooks(){
        const identity = await this.scatterService.scatter.getIdentity({
            accounts: [this.scatterService.selectedNetwork]
        });
        const account = identity.accounts[0];
        return await this.scatterService.read({
            table:'books',
            limit:100,
            rowsOnly:true,
            key_type:'i64',
            model: Book,
            index_position:2,
            index:format.encodeName(account.name, false)
        });
    }



    async getMySections(){
        const identity = await this.scatterService.scatter.getIdentity({
            accounts: [this.scatterService.selectedNetwork]
        });
        const account = identity.accounts[0];
        return await this.scatterService.read({
            table:'sec',
            limit:100,
            rowsOnly:true,
            key_type:'i64',
            model: Section,
            index_position:2,
            index:format.encodeName(account.name, false)
        });
    }

    async getMyItems(){
        const identity = await this.scatterService.scatter.getIdentity({
            accounts: [this.scatterService.selectedNetwork]
        });
        const account = identity.accounts[0];
        return await this.scatterService.read({
            table:'items',
            limit:100,
            rowsOnly:true,
            key_type:'i64',
            model: Item,
            index_position:2,
            index:format.encodeName(account.name, false)
        });
    }
}