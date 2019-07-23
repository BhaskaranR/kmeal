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
                console.log(this.ualService.users$.value, 'app' );
                
                if (this.ualService.users$.value) {
                    this.isLoggedIn = true;
                    res(true);
                } else {
                    rej('not logged in');
                }
    
            }catch(e) {
                rej('not logged in')
            }
        })
    }
}