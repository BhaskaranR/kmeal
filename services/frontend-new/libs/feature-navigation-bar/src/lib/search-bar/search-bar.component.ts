import { Component ,ViewChild, OnInit, EventEmitter,Output, Input} from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {User} from '@kmeal-nx/ui';

@Component({
  selector: 'kmeal-nx-search-bar',
  moduleId: module.id,
  templateUrl:'./search-bar.component.html' ,
  styleUrls:['../feature-navigation-bar.scss']
})
export class SearchBarComponent  implements OnInit{
    
    userInput:string;
    isLoaded = true;

    // tslint:disable-next-line: no-output-on-prefix
    @Output() 
    public onAddressChangeEvent = new EventEmitter<{[key:string]:string}>();

    @ViewChild("placesRef", {static: false}) 
    placesRef : GooglePlaceDirective;

    @Input() searchOnBlur;
    
    constructor(public localStorage: LocalStorage) {}

    async ngOnInit(){
        this.userInput = await this.populateAddress();
    }

    onFocus(e){
        console.log('on focus : ', this.userInput);
    }

    onBlur(e){
        console.log('on blur : ',this.userInput);
    }

    async populateAddress() : Promise<any> { 
        return new Promise((res, rej)=>{
            this.localStorage.getItem('user').subscribe((user:User ) => {
                if (!user) {
                    res(null);
                }
                if (user['address']){
                    res(user['address']);
                }
            })
        })
    }

    async handleAddressChange(e){
        console.log("on search address change : ", e, this.userInput);
        if (e && !!e.formatted_address){
            await this.saveAddress(e.formatted_address, e.geometry.location.lat(), e.geometry.location.lng());
            this.onAddressChangeEvent.emit(e.formatted_address);
        }
    }

    async saveAddress(addr, lat, lng) {
        return new Promise((res, rej)=>{
            this.localStorage.getItem('user').subscribe((data:User)=>{
                if (!data){
                    data = {
                        restaurant:null,
                        orders:[],
                        address:null,
                        lat:null,
                        lng:null
                    };
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