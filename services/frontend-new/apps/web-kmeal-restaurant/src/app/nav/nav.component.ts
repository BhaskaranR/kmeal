import { Component, Output, EventEmitter } from "@angular/core";
import { ScatterService } from "@kmeal-nx/scatter";
import { SECTIONS } from "../menu-items/menu-items";

import { Network } from "scatterjs-core";

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: "kmeal-nx-nav-bar",
  moduleId: module.id,
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavBarComponent {
  dia: any;
  isLoggedIn = true;
  isSideNavOpen: boolean = false;
  @Output() toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter();


  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }

  constructor(
    public scatterService: ScatterService) { }



  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    this.toggleSidenavEvent.emit(this.isSideNavOpen);
  }

  onenvChanged(e: Network) {
    this.scatterService.selectedNetwork = e
  }

  login() {
    this.scatterService.loginorlogout();
  }

  logout() {
    this.scatterService.loginorlogout();
  }
}
