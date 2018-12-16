import { Component ,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'nav-bar',
  moduleId: module.id,
  templateUrl:'./nav.component.html' ,
  styleUrls:['./nav.component.scss']
})
export class NavBarComponent  {
    constructor() {}
    isLoggedIn:boolean = true;
}