import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { KmealRestaurantGroupGQL } from '../generated/graphql';
import { map } from "rxjs/operators";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "kmeal-nx-newgroup",
  templateUrl: "./newgroup.component.html",
  styleUrls: ["./newgroup.component.scss"]
})
export class NewgroupComponent {
  selectedMenuBook = "menu"
  menuBookForm = this.fb.group({
    menubook: [null, Validators.required]
  });

  sectionsForm = this.fb.group({
    section: [null, Validators.required]
  });

  menubooks: string[] = [];
  sections: string[] = [
    'Starters',
    'Breakfast',
    'Beverages',
    'Rice & Noodles',
    'Pizza',
    'Dessert',
    'Chef\'s specials'
  ];


  constructor(private KmealRestaurantGroupGQL: KmealRestaurantGroupGQL, private fb: FormBuilder) {

  }



  ngOnInit() {
    this.KmealRestaurantGroupGQL.watch({}, {}).valueChanges.pipe(map(result => result.data.kmeal_restaurant_group
    )).subscribe((kr) => {
      this.menubooks = kr.map(k => k.menu_book).filter((v, i, a) => a.indexOf(v) === i);
    });
  }

  dropMenubook(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.menubooks, event.previousIndex, event.currentIndex);
  }

  dropSections(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
  }

  onBookSubmit() {

  }

  onSectionsSubmit() {

  }
}
