import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ScatterService } from '@kmeal-nx/scatter';
import { Router } from '@angular/router';
import { CartService } from '../../../../../libs/ui/src/lib/cart.service';


@Component({
    selector: 'kmeal-nx-nav-bar',
    moduleId: module.id,
    templateUrl: './nav.component.html',
    styleUrls: ['../feature-navigation-bar.scss']
})
export class NavBarComponent implements OnInit {
    isSideNavOpen: boolean = false;
    isLoggedIn: boolean = false;
    cnt:number = 0;
    @Output() toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter();
    @Output() onAddressChangeEvent: EventEmitter<{ [key: string]: string }> = new EventEmitter();
    constructor(
        private router: Router,
        public cartService:CartService,
        public scatterService: ScatterService) { }
    toggleSideNav() {
        this.isSideNavOpen = !this.isSideNavOpen;
        this.toggleSidenavEvent.emit(this.isSideNavOpen);
    }

    onAddressChange(e) {
        this.onAddressChangeEvent.emit(e);
    }

    ngOnInit(){

    }
    

    async login() {
        await this.scatterService.loginorlogout();
    }

    async logout() {
        await this.scatterService.loginorlogout();
        this.router.navigate([''])
    }
} 