import { Component ,ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { DataService } from '../../../core/data.service';

@Component({
  selector: 'search-bar',
  moduleId: module.id,
  templateUrl:'./search-bar.component.html' ,
  styleUrls:['./nav.component.scss']
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
        public dataService:DataService,
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
        this.dataService.searchInput = e;
        this.router.navigate(['/search']);
    }
}