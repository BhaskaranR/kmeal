import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import {
  KmealMenuBookGQL, KmealMenuBook as kmb,
  InsertKmealMenuBookSection as insKmealMenuBookSection,
  InsertKmealMenuBookSectionGQL,
  KmealMenuBookSectionConstraint,
  KmealMenuBookSectionUpdateColumn,
  DeleteMenuSection, 
  DeleteMenuSectionGQL
} from '../generated/graphql';

import { pluck, map } from "rxjs/operators";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { ScatterService } from "@kmeal-nx/scatter";
import { MenuService } from "../services/menu.service";
import { Section } from "../model/section";

@Component({
  selector: "kmeal-nx-newsection",
  templateUrl: "./newsection.component.html",
  styleUrls: ["./newsection.component.scss"]
})
export class NewsectionComponent {
  selectedMenuBook: kmb.KmealMenuBook;
  sections:Section[] ;

  menuBookForm = this.fb.group({
    menubook: [null, Validators.required]
  });

  sectionsForm = this.fb.group({
    section: [null, Validators.required]
  });

  menubooks: kmb.KmealMenuBook[] = []
  hasBooks:boolean = false;
  
  constructor(public menuService: MenuService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  async ngOnInit() {
    this.menubooks = await this.menuService.getMyBooks();
    console.log(this.menubooks);
  }

  dropSections(event: CdkDragDrop<kmb.KmealMenuBook[]>) {
    moveItemInArray(this.selectedMenuBook.menuBookSectionsBymenuBookId, event.previousIndex, event.currentIndex);

    const objects = [];
    for (let i = 0; i < this.selectedMenuBook.menuBookSectionsBymenuBookId.length; i++) {
      objects.push({
        section_id: this.selectedMenuBook.menuBookSectionsBymenuBookId[i].section_id,
        section_name: this.selectedMenuBook.menuBookSectionsBymenuBookId[i].section_name,
        menu_book_id: this.selectedMenuBook.menu_book_id,
        sort_order: i
      })
    }

    const variables: insKmealMenuBookSection.Variables = {
      objects: objects,
      "on_conflict": {
        "constraint": KmealMenuBookSectionConstraint.MenuBookSectionPkey,
        "update_columns": [KmealMenuBookSectionUpdateColumn.SortOrder]
      }
    }

  }

  onSectionsSubmit() {
    if (!this.menubooks || this.menubooks.length == 0) {
      this.openSnackBar("Create a menu book", "");
      return;
    }
    if (!this.selectedMenuBook) {
      this.openSnackBar("Select a menu book from the list", "");
      return;
    }
    if (!this.sectionsForm.valid) {
      this.openSnackBar("Enter menu sections", "");
      return;
    }
    const variables: insKmealMenuBookSection.Variables = {
      objects: [{
        section_name: this.sectionsForm.value.section,
        menu_book_id: this.selectedMenuBook.menu_book_id,
        sort_order: this.selectedMenuBook.menuBookSectionsBymenuBookId.length + 1
      }],
      "on_conflict": {
        "constraint": KmealMenuBookSectionConstraint.MenuBookSectionPkey,
        "update_columns": [KmealMenuBookSectionUpdateColumn.SectionName]
      }
    }
  }


  deleteMenuSection(ev) {
    
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
