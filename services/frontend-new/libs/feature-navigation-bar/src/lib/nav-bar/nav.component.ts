import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@kmeal-nx/ui';


@Component({
    selector: 'kmeal-nx-nav-bar',
    moduleId: module.id,
    templateUrl: './nav.component.html',
    styleUrls: ['../feature-navigation-bar.scss']
})
export class NavBarComponent{
    isSideNavOpen = false;
    isLoggedIn = false;
    cnt = 0;
    @Output() 
    toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter();

    @Output() 
    onAddressChangeEvent: EventEmitter<{ [key: string]: string }> = new EventEmitter();
    
    constructor(
        private router: Router,
        public cartService:CartService) { }

    toggleSideNav() {
        this.isSideNavOpen = !this.isSideNavOpen;
        this.toggleSidenavEvent.emit(this.isSideNavOpen);
    }

    onAddressChange(e) {
        this.onAddressChangeEvent.emit(e);
    }    

    // async login() {
    //     await this.scatterService.loginorlogout();
    // }

    // async logout() {
    //     await this.scatterService.loginorlogout();
    // }
} 