import { Injectable } from "@angular/core";
import { UalService } from "ual-ngx-material-renderer";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { generateTransaction, transactionConfig } from "@utils";

@Injectable()
export class AccountService {
    constructor(private ualService: UalService) {
    }

    async signup(profile) {
        const unsubscribe$ = new Subject();
        return new Promise((resolve, reject) => {
            try {
                this.ualService.users$.pipe(takeUntil(unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {
                        unsubscribe$.next();
                        unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        const transaction = generateTransaction(accountName, "setuprest", {
                            account:  accountName,
                            name: profile.name,
                            description: profile.description,
                            phone: profile.phone,
                            address: profile.address,
                            address2: profile.address2,
                            city: profile.city,
                            state: profile.state,
                            postalCode: profile.postalCode,
                            latitude: profile.latitude,
                            longitude: profile.longitude,
                            logo: profile.logo,
                            categories: profile.categories,
                            timeofoperation: profile.timeofoperation,    
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
}