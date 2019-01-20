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
  KmealMenuBookSectionConstraint,
} from '../generated/graphql';

import { pluck, map } from "rxjs/operators";
import { FormBuilder, Validators } from "@angular/forms";
import { InsertKmealMenuBookSection, UpdateKmealMenuBookSection } from '../generated/graphql';
import { MatSnackBar } from "@angular/material";
import { KmealMenuBookSectionUpdateColumn } from '../../../../feature-profile/src/lib/generated/graphql';

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
    this.kmealMenuBookGQL.watch(variables, {}).valueChanges.pipe(pluck('data', 'kmeal_menu_book'))
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

    const objects = [];
    for (let i = 0; i < this.menubooks.length; i++) {
      objects.push({
        menu_book_id: this.menubooks[i].menu_book_id,
        menu_book: this.menubooks[i].menu_book,
        restaurant_id: 1,
        sort_order: i
      })
    }

    const variables: insKmealMenuBook.Variables = {
      objects: objects,
      "on_conflict": {
        "action": ConflictAction.Update,
        "constraint": KmealMenuBookConstraint.MenuBookPkey,
        "update_columns": [KmealMenuBookUpdateColumn.SortOrder]
      }
    }
    this.insertKmealMenuBookGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_menu_book', 'returning')).subscribe((mb: insKmealMenuBook.KmealMenuBookInlineFragment[]) => {
      this.openSnackBar("updated", "");
    })
  }

  dropSections(event: CdkDragDrop<kmb.KmealMenuBook[]>) {
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);

    const objects = [];
    for (let i = 0; i < this.sections.length; i++) {
      objects.push({
        section_id: this.sections[i].section_id,
        section_name: this.sections[i].section_name,
        menu_book_id: this.selectedMenuBook.menu_book_id,
        sort_order: i
      })
    }

    const variables: insKmealMenuBookSection.Variables = {
      objects: objects,
      "on_conflict": {
        "action": ConflictAction.Update,
        "constraint": KmealMenuBookSectionConstraint.MenuBookSectionPkey,
        "update_columns": [KmealMenuBookSectionUpdateColumn.SortOrder]
      }
    }
    this.insertKmealMenuBookSectionGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_menu_book_section', 'returning')).subscribe((ms:
      insKmealMenuBookSection.InsertKmealMenuBookSection) => {
      this.openSnackBar("updated", "");
    });
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
        "update_columns": [KmealMenuBookUpdateColumn.MenuBook]
      }
    }
    this.insertKmealMenuBookGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_menu_book', 'returning')).subscribe((mb: insKmealMenuBook.KmealMenuBookInlineFragment[]) => {
      const newgroup = <kmb.KmealMenuBook>mb[0];
      this.menubooks.push(newgroup);
    })
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
        sort_order: this.sections.length + 1
      }],
      "on_conflict": {
        "action": ConflictAction.Update,
        "constraint": KmealMenuBookSectionConstraint.MenuBookSectionPkey,
        "update_columns": [KmealMenuBookSectionUpdateColumn.SectionName]
      }
    }
    this.insertKmealMenuBookSectionGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_menu_book_section', 'returning')).subscribe((ms:
      insKmealMenuBookSection.InsertKmealMenuBookSection) => {
      this.sections.push(<any>ms[0])
    });
  }


  onSelectionChange(ev) {
    this.selectedMenuBook = ev;
    this.sections = this.selectedMenuBook.menuBookSectionsBymenuBookId;
  }

  deleteMenuGroup(ev) {
    const variables: delKmealMenuBook.Variables = {
      "where": {
        "menu_book_id": {
          "_eq": ev.menu_book_id
        }
      }
    }
    this.deleteKmealMenuBookGQL.mutate(variables).pipe(pluck('data', 'delete_kmeal_menu_book', 'returning')).subscribe((mb: string[]) => {
      const indx = this.menubooks.findIndex((mb) => mb.menu_book_id == ev.menu_book_id)
      this.menubooks.splice(indx, 1);
    })
  }

  deleteMenuSection(ev) {
    const variables: delKmealMenuBookSection.Variables = {
      "where": {
        "section_id": {
          "_eq": ev.section_id
        }
      }
    }
    this.deleteKmealMenuBookSectionGQL.mutate(variables).pipe(pluck('data', 'delete_kmeal_menu_book_section', 'returning')).subscribe((mb: string[]) => {
      const indx = this.sections.findIndex((s) => s.section_id == ev.section_id)
      this.sections.splice(indx, 1);
    })
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
