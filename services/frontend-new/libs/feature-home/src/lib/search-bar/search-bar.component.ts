  
import { Component ,ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kmeal-nx-search-bar',
  moduleId: module.id,
  templateUrl:'./search-bar.component.html' ,
  styleUrls:['./search-bar.component.scss']
})
export class SearchBarComponent  implements OnInit{
    options={
        types: [],
        componentRestrictions: { country: 'USA' }
    };
    
    userInput:string;
    isLoaded:boolean = true;
    querySubscription:Subscription;
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
    constructor(
        public dialogRef:MatDialog, 
        public router:Router,
        public apollo: Apollo) {}

    
    ngOnInit(){
        console.log('initing search bar ');
    }

    onFocus(e){
        console.log('on focus : ', this.userInput);
    }

    onBlur(e){
        console.log('on blur : ',this.userInput);
    }

    handleAddressChange(e){
        //this.dataService.searchInput = e.formatted_address;
        this.search(e.geometry.location.lat(),e.geometry.location.lng(), 10);
    }

    private search(lat, lng, radius){
        // this.isLoaded = false;
        // this.dataService.searchRestaurants(lat,lng, radius);
    }
}