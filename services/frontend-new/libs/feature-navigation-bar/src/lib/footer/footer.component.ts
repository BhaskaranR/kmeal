import { Component ,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'kmeal-nx-footer-bar',
  moduleId: module.id,
  templateUrl:'./footer.component.html' ,
  styleUrls:['../feature-navigation-bar.scss']
})
export class FooterComponent  {
    constructor() {}
    isLoggedIn:boolean = true;
}