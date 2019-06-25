import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'kmeal-nx-root',
  templateUrl: './app.component.html',
  styles:[`
  .main-content{
    height:calc(100vh - 65px) !important;
    overflow-y:auto;
  }

  .mat-toolbar{
    background:white !important;
  }
  `]
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
