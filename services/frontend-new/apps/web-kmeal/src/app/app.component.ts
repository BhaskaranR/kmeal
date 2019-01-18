import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';

interface Coordinate {
  type:string,
  lat:number,
  lng:number,
  radius:number
}

@Component({
  selector: 'kmeal-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kmeal';

  isAddressSet = true;
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


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onAddressChange(e){
    console.log('address changed : ',e);
    let param : Coordinate = {
      type:'ADDRESS',
      lat:e.geometry.location.lat(),
      lng:e.geometry.location.lng(),
      radius:10
    }
    this.updateLocateStorage(param);
    this.router.navigate(['/search'],{queryParams:param});
  }

  private updateLocateStorage(param){
    window.localStorage.setItem('address', param)
  }
  
}
