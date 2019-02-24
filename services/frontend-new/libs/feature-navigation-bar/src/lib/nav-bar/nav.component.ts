import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ScatterService } from '@kmeal-nx/scatter';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

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
        public scatterService: ScatterService,
        public localStorage:LocalStorage) { }
    toggleSideNav() {
        this.isSideNavOpen = !this.isSideNavOpen;
        this.toggleSidenavEvent.emit(this.isSideNavOpen);
    }

    onAddressChange(e) {
        this.onAddressChangeEvent.emit(e);
    }

    ngOnInit(){
        this.localStorage.getItem('orders').subscribe( (result:any[]) => {
            this.cnt = result.length || 0;
            console.log(this.cnt, this.localStorage);
        });

        window.addEventListener('storage',(e) => {
            console.log('storage changed ', e);
        })
    }

    async login() {
        await this.scatterService.loginorlogout();
      }
    
    async logout() {
        await this.scatterService.loginorlogout();
        this.router.navigate([''])
    }
}