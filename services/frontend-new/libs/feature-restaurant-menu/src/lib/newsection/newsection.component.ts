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

@Component({
  selector: "kmeal-nx-newsection",
  templateUrl: "./newsection.component.html",
  styleUrls: ["./newsection.component.scss"]
})
export class NewsectionComponent {
  selectedMenuBook: kmb.KmealMenuBook;

  menuBookForm = this.fb.group({
    menubook: [null, Validators.required]
  });

  sectionsForm = this.fb.group({
    section: [null, Validators.required]
  });

  menubooks: kmb.KmealMenuBook[] = []

  
  constructor(private kmealMenuBookGQL: KmealMenuBookGQL,
    private insertKmealMenuBookSectionGQL: InsertKmealMenuBookSectionGQL,
    private deleteMenuSectionGQL: DeleteMenuSectionGQL,
    private scatterService: ScatterService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    const variables = {
      "where": {
        "restaurant_id": {
          "_eq": this.scatterService.restaurant_id
        }
      }
    };
    this.kmealMenuBookGQL.watch(variables, {}).valueChanges.pipe(pluck('data', 'kmeal_menu_book'))
      .subscribe((mg: kmb.KmealMenuBook[]) => {
        if (!mg) {
          return;
        }
        this.menubooks = mg
        if (this.menubooks.length == 0) {
          this.selectedMenuBook = this.menubooks[0];
        }
      });
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
    this.insertKmealMenuBookSectionGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_menu_book_section', 'returning')).subscribe((ms:
      insKmealMenuBookSection.InsertKmealMenuBookSection) => {
      this.openSnackBar("updated", "");
    });
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
    this.insertKmealMenuBookSectionGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_menu_book_section', 'returning')).subscribe((ms:
      insKmealMenuBookSection.InsertKmealMenuBookSection) => {
        this.selectedMenuBook.menuBookSectionsBymenuBookId.push(<any>ms[0])
    });
  }


  deleteMenuSection(ev) {
    const variables: DeleteMenuSection.Variables = {
      "where": {
        "section_id": {
          "_eq": ev.section_id
        }
      }
    }
    this.deleteMenuSectionGQL.mutate(variables).pipe(pluck('data', 'delete_kmeal_menu_book_section', 'returning')).subscribe((mb: string[]) => {
      if (mb.length == 0) {
        this.openSnackBar("not deleted, make sure you don't have menu items associated with this section", "");
      }
      const indx = this.selectedMenuBook.menuBookSectionsBymenuBookId.findIndex((s) => s.section_id == ev.section_id)
      this.selectedMenuBook.menuBookSectionsBymenuBookId.splice(indx, 1);
      this.openSnackBar("deleted", "");
    })
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
