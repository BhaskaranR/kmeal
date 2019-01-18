import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import {
  KmealMenuBookGQL, KmealMenuBook as kmb,
  InsertKmealMenuBook as insKmealMenuBook,
  InsertKmealMenuBookGQL,
  UpdateKmealMenuBook as updKmealMenuBook,
  UpdateKmealMenuBookGQL,
  DeleteKmealMenuBook as delKmealMenuBook,
  DeleteKmealMenuBookGQL,
  InsertKmealMenuBookSection as insKmealMenuBookSection,
  InsertKmealMenuBookSectionGQL,
  UpdateKmealMenuBookSection as updKmealMenuBookSection,
  UpdateKmealMenuBookSectionGQL,
  DeleteKmealMenuBookSection as delKmealMenuBookSection,
  DeleteKmealMenuBookSectionGQL,
  ConflictAction,
  KmealMenuBookConstraint,
  KmealMenuBookUpdateColumn,
} from '../generated/graphql';

import { pluck, map } from "rxjs/operators";
import { FormBuilder, Validators } from "@angular/forms";
import { InsertKmealMenuBookSection, UpdateKmealMenuBookSection } from '../generated/graphql';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "kmeal-nx-newgroup",
  templateUrl: "./newgroup.component.html",
  styleUrls: ["./newgroup.component.scss"]
})
export class NewgroupComponent {
  selectedMenuBook: kmb.KmealMenuBook;

  menuBookForm = this.fb.group({
    menubook: [null, Validators.required]
  });

  sectionsForm = this.fb.group({
    section: [null, Validators.required]
  });

  menubooks: kmb.KmealMenuBook[] = []

  sections: kmb.MenuBookSectionsBymenuBookId[] = [];

  constructor(private kmealMenuBookGQL: KmealMenuBookGQL,
    private insertKmealMenuBookGQL: InsertKmealMenuBookGQL,
    private updateKmealMenuBookGQL: UpdateKmealMenuBookGQL,
    private deleteKmealMenuBookGQL: DeleteKmealMenuBookGQL,
    private insertKmealMenuBookSectionGQL: InsertKmealMenuBookSectionGQL,
    private updateKmealMenuBookSectionGQL: UpdateKmealMenuBookSectionGQL,
    private deleteKmealMenuBookSectionGQL: DeleteKmealMenuBookSectionGQL,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    const variables = {
      "where": {
        "restaurant_id": {
          "_eq": 1
        }
      }
    };
    this.kmealMenuBookGQL.watch(variables, {}).valueChanges.pipe(pluck('data', 'KmealMenuBook'))
      .subscribe((mg: kmb.KmealMenuBook[]) => {
        if (!mg) {
          return;
        }
        this.menubooks = mg
        if (this.menubooks.length == 0) {
          this.selectedMenuBook = this.menubooks[0]
          this.sections = this.selectedMenuBook.menuBookSectionsBymenuBookId
        }
      });
  }

  dropMenubook(event: CdkDragDrop<kmb.KmealMenuBook[]>) {
    moveItemInArray(this.menubooks, event.previousIndex, event.currentIndex);
    const variables: updKmealMenuBook.Variables = {
      "where": {
        "menu_book_id": {
          "_eq":  event.item["menu_book_id"]
        },
      },
      "_set": {
        "sort_order": event.currentIndex
      }
    }
    this.updateKmealMenuBookGQL.mutate(variables).pipe(pluck('data')).subscribe((ms:
      updKmealMenuBookSection.Returning) => {
      
    })
  }

  dropSections(event: CdkDragDrop<kmb.KmealMenuBook[]>) {
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
    const variables: updKmealMenuBookSection.Variables = {
      "where": {
        "section_id": {
          "_eq":  event.item["section_id"]
        },
      },
      "_set": {
        "sort_order": event.currentIndex
      }
    }
    this.updateKmealMenuBookGQL.mutate(variables).pipe(pluck('data')).subscribe((ms:
      updKmealMenuBookSection.Returning) => {
      
    })
  }

  onBookSubmit() {
    if (!this.menuBookForm.valid) {
      this.openSnackBar("Enter menu book", "");
      return;
    }
    const variables: insKmealMenuBook.Variables = {
      objects: [{
        menu_book: this.menuBookForm.value.menubook,
        restaurant_id: 1,
        sort_order: this.menubooks.length + 1
      }], 
      "on_conflict": {
        "action": ConflictAction.Update,
        "constraint": KmealMenuBookConstraint.MenuBookPkey,
        "update_columns": [KmealMenuBookUpdateColumn.MenuBookId]
      }
    }
    this.insertKmealMenuBookGQL.mutate(variables).pipe(pluck('data')).subscribe((mb: {
      menu_book_id: number
      menu_book: string
    }) => {
      this.menubooks.push(<kmb.KmealMenuBook>mb)
    })
  }

  onSectionsSubmit() {
    if (!this.sectionsForm.valid) {
      this.openSnackBar("Enter menu sections", "");
      return;
    }
    const variables: insKmealMenuBookSection.Variables = {
      objects: [{
        section_name: this.sectionsForm.value.section,
        menu_book_id: this.selectedMenuBook.menu_book_id,
        sort_order: this.menubooks.length + 1
      }]
    }
    this.insertKmealMenuBookSectionGQL.mutate(variables).pipe(pluck('data')).subscribe((ms:
      insKmealMenuBookSection.Returning) => {
      this.sections.push(ms)
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
