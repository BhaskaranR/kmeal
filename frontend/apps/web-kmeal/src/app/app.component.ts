import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@kmeal-frontend/web';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>`
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
