import { Component ,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'footer-bar',
  moduleId: module.id,
  templateUrl:'./footer.component.html' ,
  styleUrls:['./nav.component.scss']
})
export class FooterComponent  {
    constructor() {}
    isLoggedIn:boolean = true;
}