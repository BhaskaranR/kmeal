import { Component } from '@angular/core';

@Component({
  selector: 'search-bar',
  moduleId: module.id,
  templateUrl:'./search-bar.component.html' 
})
export class SearchBarComponent  {
    isCuisineOpen:boolean = false;
    constructor() {}
}