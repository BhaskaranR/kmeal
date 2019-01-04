import { Component, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'kmeal-nx-nav-bar',
  moduleId: module.id,
  templateUrl:'./nav.component.html' ,
  styleUrls:['../feature-navigation-bar.scss']
})
export class NavBarComponent  {
    isSideNavOpen : boolean = false;
    @Output() toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter();
    @Output() onAddressChangeEvent : EventEmitter<{[key:string]:string}> = new EventEmitter();
    constructor(){}
    toggleSideNav(){
        this.isSideNavOpen = !this.isSideNavOpen;
        this.toggleSidenavEvent.emit(this.isSideNavOpen);
    }

    onAddressChange(e){
        this.onAddressChangeEvent.emit(e);
    }
}