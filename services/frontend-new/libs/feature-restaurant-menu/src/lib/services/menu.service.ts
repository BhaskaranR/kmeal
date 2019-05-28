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
}