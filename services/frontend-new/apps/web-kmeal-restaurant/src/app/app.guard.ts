import {Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UalService } from 'ual-ngx-material-renderer';
import { takeUntil } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

    isLoggedIn:boolean = false;
    unsubscribe$ = new Subject();

    constructor(public ualService: UalService){}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean | Promise<boolean>
    {
        return this.getLogin();
    }

    getLogin() : Promise<boolean>{
        return new Promise<boolean>((res, rej)=>{
            try{
                if (this.isLoggedIn) {
                    res(true);
                }
                this.ualService.users$.pipe(takeUntil(this.unsubscribe$)).subscribe(async val => {
                    if (val !== null && val.length > 0) {
    
                        this.unsubscribe$.next();
                        this.unsubscribe$.complete();
                        const user = val[val.length - 1];
                        const accountName = await user.getAccountName();
                        if (accountName) {
                            this.isLoggedIn = true;
                            res(true);
                        }

                        rej(false);
                    } else {
                        rej(false);
                    }
                });
    
            }catch(e) {
                rej(false)
            }
        })
    }
}