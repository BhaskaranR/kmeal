import { Component ,ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { SearchBarService } from './search-bar.service';
import { Apollo } from 'apollo-angular';
import { restaurantQuery } from './search-bar.query';
import { Subscription } from 'rxjs';

@Component({
  selector: 'search-bar',
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
        public searchService:SearchBarService,
        public apollo: Apollo) {}

    
    ngOnInit(){
        console.log('initing search bar ');
    }

    onFocus(e){
        console.log('on focus : ', this.userInput);
    }

    onBlur(e){
        console.log('on blur : ',this.userInput);
        if(!this.userInput){
            this.resetSearchBar();
        }
    }

    handleAddressChange(e){
        this.searchService.searchString = e.formatted_address;
        this.search(e.geometry.location.lat(),e.geometry.location.lng(), 5);
    }

    private search(lat, lng, radius){
        this.isLoaded = false;
        this.querySubscription = this.apollo
        .watchQuery({
        query: restaurantQuery,
        variables: {
            nearby: {
                lat:lat,
                long:lng,
                radius:radius
            },
        },
        })
        .valueChanges.subscribe(({data}) => {
            console.log('query ', data);
            this.searchService.results=data;
            this.isLoaded= true;
            console.log('search bar done , ', this.searchService.results);
            this.router.navigate(['./search'], { queryParams: {type:'NearBy'}});
        });
    }

    private resetSearchBar(){
        this.searchService.searchString = null;
        this.searchService.results = null;
        this.userInput = null;
    }
}