import { Injectable } from "@angular/core";
import { ScatterService } from "@kmeal-nx/scatter";

@Injectable()
export class MenuService {
    constructor(private scatterService: ScatterService) {
    }

    async createbook(bookname: string) {
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction(['kmealadminio'], contracts => {
                
                const res = contracts['kmealadminio'].createbook(
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

    async readBooks(){
        return await this.scatterService.read({
            table:'books',
            index:'',

        });
    }

    async addSection(bookid, sectionname){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction(['kmealadminio'], contracts => {
                
                const res = contracts['kmealadminio'].addSections(
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


    async createItem(acct, itemname, description, photo, spice_level, vegetarian, cooking_name, types){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction(['kmealadminio'], contracts => {
                
                const res = contracts['kmealadminio'].addSections(
                    acct,
                    itemname,
                    description,
                    photo,
                    spice_level,
                    vegetarian,
                    cooking_name,
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

    async addToSection(acct, itemname, description, photo, spice_level, vegetarian, cooking_name, types){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction(['kmealadminio'], contracts => {
                
                const res = contracts['kmealadminio'].addtosection(
                    acct,
                    itemname,
                    description,
                    photo,
                    spice_level,
                    vegetarian,
                    cooking_name,
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

    async deleteSection(bookid, sectionid){
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction(['kmealadminio'], contracts => {
                
                const res = contracts['kmealadminio'].delsec(
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
            const resp = await this.scatterService.eos.transaction(['kmealadminio'], contracts => {
                
                const res = contracts['kmealadminio'].edititem(
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
            const resp = await this.scatterService.eos.transaction(['kmealadminio'], contracts => {
                
                const res = contracts['kmealadminio'].removefromsec(
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
}