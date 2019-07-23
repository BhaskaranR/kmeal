import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UalService } from 'ual-ngx-material-renderer';
import { takeUntil } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

    isLoggedIn      : boolean = false;
    unsubscribe$    : Subject<any> = new Subject();

    constructor(
        public  ualService: UalService,
        private router: Router){}


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean | Promise<boolean> {
        return this.getLogin(route, state);
    }

    getLogin(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean>{
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

                       
                        let parentUrl = state.url.slice(0, state.url.indexOf(route.url[route.url.length - 1].path));
                         this.router.navigate([parentUrl, 'welcome']);
                        

                        rej(false);
                    } else {
                        let parentUrl = state.url.slice(0, state.url.indexOf(route.url[route.url.length - 1].path));
                            this.router.navigate([parentUrl, 'welcome']);
                        rej(false);
                    }
                });
    
            }catch(e) {
                let parentUrl = state.url.slice(0, state.url.indexOf(route.url[route.url.length - 1].path));
                            this.router.navigate([parentUrl, 'welcome']);
                rej(false)
            }
        })
    }
}