import { Component ,ViewChild, OnInit, EventEmitter,Output, Input} from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';


@Component({
  selector: 'kmeal-nx-search-bar',
  moduleId: module.id,
  templateUrl:'./search-bar.component.html' ,
  styleUrls:['../feature-navigation-bar.scss']
})
export class SearchBarComponent  implements OnInit{
    options={
        types: [],
        componentRestrictions: { country: 'USA' }
    };
    geometry: any;
    
    userInput:string;
    isLoaded:boolean = true;
    @Output() public onAddressChangeEvent = new EventEmitter<{[key:string]:string}>();
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    @Input() searchOnBlur;
    
    constructor() {}

    
    ngOnInit(){
    }

    onFocus(e){
        console.log('on focus : ', this.userInput);
    }

    onBlur(e){
        console.log('on blur : ',this.userInput);
    }

    findFood() {
        if (this.geometry) {
            this.onAddressChangeEvent.emit(this.geometry);
        }
    }

    handleAddressChange(e){
        if (this.searchOnBlur) {
        this.onAddressChangeEvent.emit(e);
        } else {
            this.geometry = e;
        }
    }
}