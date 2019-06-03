import { Injectable } from "@angular/core";
import { ScatterService } from "@kmeal-nx/scatter";

@Injectable()
export class AccountService {
    constructor(private scatterService: ScatterService) {
    }

    async signup(profile) {
        try {
            const identity = await this.scatterService.scatter.getIdentity({
                accounts: [this.scatterService.selectedNetwork]
            });
            const account = identity.accounts[0];
            const opts = { authorization: `${account.name}@${account.authority}` };
            const resp = await this.scatterService.eos.transaction([this.scatterService.code], contracts => {
                const res =  contracts[this.scatterService.code].setuprest(
                    account.name,
                    profile.name,
                    profile.description,
                    profile.phone,
                    profile.address,
                    profile.address2,
                    profile.city,
                    profile.state,
                    profile.postalCode,
                    profile.latitude,
                    profile.longitude,
                    profile.logo,
                    profile.categories,
                    profile.timeofoperation,
                    opts);
                return res;
            });
            return resp;
           
        }
        catch (e) {
            throw e;
        }
    }
}