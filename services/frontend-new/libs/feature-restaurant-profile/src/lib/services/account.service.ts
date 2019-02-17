import { Injectable } from "@angular/core";
import { ScatterService, success, errorMessage } from "@kmeal-nx/scatter";

@Injectable()
export class AccountService {
    constructor(private scatterService: ScatterService) {
    }
    checkLogin() {
        if (!this.scatterService.getScatter().identity) {
            throw errorMessage('Please log in with Scatter first.');
        }
        const account = this.scatterService.getScatter().identity.accounts[0];
        const opts = { authorization: `${account.name}@${account.authority}` };
        return {
            account: account,
            opts: opts
        }
    }

    async signup(profile) {
        try {
            const accInfo = this.checkLogin();
            const res = await this.scatterService.getContract().signup(
                accInfo.account.name,
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
                accInfo.opts);
            return res;
        }
        catch (e) {
            throw e;
        }
    }
}