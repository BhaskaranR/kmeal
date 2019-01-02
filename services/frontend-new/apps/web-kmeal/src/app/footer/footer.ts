import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'kmeal-nx-footer-bar',
  moduleId: module.id,
  templateUrl: './footer.html'
})
export class FooterComponent {
  constructor() {}
  isLoggedIn: boolean = true;
}
