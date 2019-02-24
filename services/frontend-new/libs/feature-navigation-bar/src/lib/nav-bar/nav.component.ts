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
        this.localStorage.getItem('orders').subscribe((result:any[]) => {
            this.cnt = result.length;
            console.log('get itme ?');
        });

        this.localStorage.setItemSubscribe('orders', (e)=>{
            console.log('set item sub?  ',e);
        })
    }

    async login() {
        await this.scatterService.loginorlogout();
<<<<<<< HEAD
    }

=======
      }
    
>>>>>>> 1035508fab40a8b6fd57c0e72c51f8c47f5e0f5a
    async logout() {
        await this.scatterService.loginorlogout();
        this.router.navigate([''])
    }
}