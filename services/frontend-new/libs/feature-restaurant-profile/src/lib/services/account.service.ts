import { Injectable } from "@angular/core";
import { ScatterService, contract, success, errorMessage } from "@kmeal-nx/scatter";

@Injectable()
export class AccountService {
    constructor(private scatterService: ScatterService) {
    }

    async signup(profile) {
        return new Promise(resolve => {
            this.scatterService.checkLogin(resolve, (account, opts) => {
                resolve(contract.signup(
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
                    opts)
                    .then(res => success(res))
                    .catch(err => errorMessage(err)));
            });
        });
    }
}