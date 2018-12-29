import { Component , OnInit} from '@angular/core';

// xplat
import { AppBaseComponent } from '@kmeal-frontend/web';



@Component({
  selector: 'app-root',
  template: `<app-nav-layout>
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  </app-nav-layout>`
})
export class AppComponent extends AppBaseComponent implements OnInit{
  constructor() {
    super();
  }

  ngOnInit(){
  }

}
