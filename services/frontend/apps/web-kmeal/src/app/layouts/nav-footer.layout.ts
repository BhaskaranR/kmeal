import { Component , OnInit, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router ,ActivatedRoute} from '@angular/router';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-nav-layout',
  templateUrl: `./nav-footer.layout.html`,
  styles:[`
  .leftSidenavContent {
    min-width: 280px;
    overflow: hidden;
    height:100%;
  }
  .mat-content-class {
      min.height: 100%;
    min-height: -moz-available;          /* WebKit-based browsers will ignore this. */
    min-height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    min-height: fill-available;
    }`]
})
export class NavFooterLayout implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  isHome:boolean = false;
  private _mobileQueryListener: () => void;
  
  constructor(
    public changeDetectorRef: ChangeDetectorRef, 
    public media: MediaMatcher,
    public router:Router,
    public activatedRoute : ActivatedRoute) 
  {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = ()=> changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    activatedRoute.url.subscribe(url =>{
      console.log(url);
    });
  }

  ngOnInit(){
    this.isHome = this.router.url === '/home';
    console.log('???' , this.isHome, this.router.url);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private changeListener(){
    return this.changeDetectorRef.detectChanges()
  }

}