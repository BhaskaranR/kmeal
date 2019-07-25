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
}