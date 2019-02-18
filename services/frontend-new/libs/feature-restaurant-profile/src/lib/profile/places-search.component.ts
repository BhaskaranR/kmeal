import { Component ,ViewChild, OnInit, EventEmitter,Output, Input} from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';


@Component({
  selector: 'kmeal-nx-place-search',
  moduleId: module.id,
  templateUrl:'./places-search.component.html' ,
  styleUrls:['./places-search.component.scss']
})
export class PlacesSearchComponent  implements OnInit{
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
        this.onAddressChangeEvent.emit(e);
    }
}