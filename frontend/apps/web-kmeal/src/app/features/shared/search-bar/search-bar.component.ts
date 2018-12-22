import { Component ,ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { SearchBarService } from './search-bar.service';

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
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
    constructor(
        public dialogRef:MatDialog, 
        public router:Router,
        public searchService:SearchBarService) {}

    ngOnInit(){
        this.userInput= this.searchService.searchString || '';
    }

    onFocus(e:Event){
        console.log(e);
    }

    onBlur(){
    }

    handleAddressChange(e){
        this.searchService.searchString = e.formatted_address;

        if (this.needToReRoute()) {
            this.router.navigate(['./search']);
        } else {
            this.search(e)
        }
        
    }

    private needToReRoute(){
        let curr = this.router.url;
        if (curr !== '/search') return true;
        return false;
    }

    private search(e){
        console.log(e);
    }
}