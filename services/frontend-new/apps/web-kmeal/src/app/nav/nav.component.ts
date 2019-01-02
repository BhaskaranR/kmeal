import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kmeal-nx-nav-bar',
  moduleId: module.id,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavBarComponent {
  dia: any;
  isLoggedIn = true;
  isSideNavOpen: boolean = false;
  @Output() toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    this.toggleSidenavEvent.emit(this.isSideNavOpen);
  }
}
