import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import {LocalStorage} from '@ngx-pwa/local-storage';
import { NavService } from './nav.services';

@Component({
  selector: 'kmeal-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAddressSet = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  
  constructor(
    public changeDetectorRef: ChangeDetectorRef, 
    public media: MediaMatcher,
    public router:Router,
    public localStorage: LocalStorage,
    public activatedRoute : ActivatedRoute,
    public navService:NavService) 
  {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = ()=> changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.localStorage.removeItem('user');
    this.localStorage.getItem('user').subscribe((result:any) => {
      if (!result || !result.address){
        this.isAddressSet = false;
      } else {
        this.isAddressSet = true;
      }
    })
    
  }

  onAddressChange(evt){
    console.log("home page ", evt);
    if (!this.isAddressSet){
      this.isAddressSet = true;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }  

  onAddrChange(e){
    this.navService.onAddressChange(e);
  }
}
