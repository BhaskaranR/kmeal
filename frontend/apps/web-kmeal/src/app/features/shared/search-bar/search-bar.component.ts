import { Component ,ViewChild, ElementRef} from '@angular/core';
import { MatDialog } from '@angular/material';
import { CuisineMenuComponent } from './cuisine.component';

@Component({
  selector: 'search-bar',
  moduleId: module.id,
  templateUrl:'./search-bar.component.html' ,
  styleUrls:['./search-bar.component.scss']
})
export class SearchBarComponent  {
    isCuisineOpen:boolean = false;
    isSearching:boolean = false;
    @ViewChild("autocomplete", {read: ElementRef}) autocomplete: ElementRef;
    constructor(public dialogRef:MatDialog) {}

    onFocus(e:Event){
        this.isSearching = true;
        console.log(e);
        this.positionResultBox(e.srcElement.parentElement);
    }

    onBlur(){
        this.isSearching = false;
    }

    private positionResultBox(ele: Element){
        console.log(ele);
        console.log(this.autocomplete);
    }
}