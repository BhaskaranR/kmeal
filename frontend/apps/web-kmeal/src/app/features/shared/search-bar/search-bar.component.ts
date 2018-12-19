import { Component ,ViewChild, ElementRef} from '@angular/core';
import { MatDialog } from '@angular/material';
import { CuisineMenuComponent } from './cuisine.component';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'search-bar',
  moduleId: module.id,
  templateUrl:'./search-bar.component.html' ,
  styleUrls:['./search-bar.component.scss']
})
export class SearchBarComponent  {
    options={
        types: [],
        componentRestrictions: { country: 'USA' }
        };
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    constructor(public dialogRef:MatDialog) {}

    onFocus(e:Event){
        console.log(e);
    }

    onBlur(){

    }

    handleAddressChange(e){
        console.log(e);
    }
}