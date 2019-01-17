import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Component({
  selector: 'kmeal-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kmeal';

  isAddressSet = false;
  mobileQuery: MediaQueryList;
  isHome:boolean = false;
  private _mobileQueryListener: () => void;
  
  constructor(
    public changeDetectorRef: ChangeDetectorRef, 
    public media: MediaMatcher,
    public router:Router,
    protected localStorage: LocalStorage,
    public activatedRoute : ActivatedRoute) 
  {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = ()=> changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.localStorage.getItem<string>('address').subscribe((address) => {
      console.log(address);
      if (address) {
        this.isAddressSet = true;
      }
    });
    activatedRoute.url.subscribe(url =>{
      
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
