import { Injectable } from "@angular/core";
import { ScatterService } from "@kmeal-nx/scatter";

@Injectable()
export class AccountService {
    constructor(private scatterService: ScatterService) {
    }

    async transfer(accountTo: string, value: string, memo: string) {
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.coincode], contracts => {
                const res = contracts[this.scatterService.coincode].transfer(
                    account.name,
                    accountTo,
                    value,
                    memo,
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