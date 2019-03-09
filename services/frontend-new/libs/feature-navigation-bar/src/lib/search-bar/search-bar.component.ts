import { Component ,ViewChild, OnInit, EventEmitter,Output, Input} from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Component({
  selector: 'kmeal-nx-search-bar',
  moduleId: module.id,
  templateUrl:'./search-bar.component.html' ,
  styleUrls:['../feature-navigation-bar.scss']
})
export class SearchBarComponent  implements OnInit{
    
    userInput:string;
    isLoaded:boolean = true;
    @Output() public onAddressChangeEvent = new EventEmitter<{[key:string]:string}>();
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    @Input() searchOnBlur;
    
    constructor(public localStorage: LocalStorage) {}

    
    ngOnInit(){
    }

    onFocus(e){
        console.log('on focus : ', this.userInput);
    }

    onBlur(e){
        console.log('on blur : ',this.userInput);
    }

    async handleAddressChange(e){
        console.log(e, this.userInput);
        if (e && !!e.formatted_address){
            await this.saveAddress(e.formatted_address, e.geometry.location.lat(), e.geometry.location.lng());
            this.onAddressChangeEvent.emit(e.formatted_address);
        }
    }

    async saveAddress(addr, lat, lng) {
        return new Promise((res, rej)=>{
            this.localStorage.getItem('user').subscribe((data:any)=>{
                if (!data){
                    data = {};
                }

                data.address = addr;
                data.lat = lat;
                data.lng = lng;

                this.localStorage.setItem('user', data).subscribe((result)=> {
                    res(result);
                })
            })
        })
    }
}