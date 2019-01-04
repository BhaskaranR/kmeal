import { Component ,ViewChild, OnInit, EventEmitter,Output} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'search-bar',
  moduleId: module.id,
  templateUrl:'./search-bar.component.html' ,
  styleUrls:['../feature-navigation-bar.scss']
})
export class SearchBarComponent  implements OnInit{
    options={
        types: [],
        componentRestrictions: { country: 'USA' }
    };
    
    userInput:string;
    @Output() public onAddressChangeEvent = new EventEmitter<{[key:string]:string}>();
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
    constructor() {}

    
    ngOnInit(){
        console.log('initing search bar ');
        console.log(this.placesRef)
    }

    onFocus(e){
        console.log('on focus : ', this.userInput);
    }

    onBlur(e){
        console.log('on blur : ',this.userInput);
    }

    handleAddressChange(e){
        this.onAddressChangeEvent.emit(e);
    }
}