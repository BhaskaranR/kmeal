import {Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UalService } from 'ual-ngx-material-renderer';
import { takeUntil } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

    isLoggedIn:boolean = false;
    unsubscribe$ = new Subject();

    constructor(public ualService: UalService, private router: Router){}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
    {
        if (this.ualService.users$.value === null) {
            this.router.navigate(['/welcome']);
            return false;
        }
        return true;
    }

}