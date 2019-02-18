import { Component, Output, EventEmitter } from '@angular/core';
import { ScatterService } from '@kmeal-nx/scatter';
import { Router } from '@angular/router';


@Component({
    selector: 'kmeal-nx-nav-bar',
    moduleId: module.id,
    templateUrl: './nav.component.html',
    styleUrls: ['../feature-navigation-bar.scss']
})
export class NavBarComponent {
    isSideNavOpen: boolean = false;
    isLoggedIn: boolean = false;
    @Output() toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter();
    @Output() onAddressChangeEvent: EventEmitter<{ [key: string]: string }> = new EventEmitter();
    constructor(
        private router: Router,
        public scatterService: ScatterService) { }
    toggleSideNav() {
        this.isSideNavOpen = !this.isSideNavOpen;
        this.toggleSidenavEvent.emit(this.isSideNavOpen);
    }

    onAddressChange(e) {
        this.onAddressChangeEvent.emit(e);
    }


  async login() {
    await this.scatterService.loginorlogout();
  }

  async logout() {
    await this.scatterService.loginorlogout();
    this.router.navigate([''])
  }
}