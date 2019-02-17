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
  DeleteKmealItemGQL,
  ConflictAction,
  KmealMenuBookConstraint,
  KmealMenuBookUpdateColumn,
  KmealMenuBookSectionConstraint,
} from '../generated/graphql';

import { pluck, map } from "rxjs/operators";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { ScatterService } from "@kmeal-nx/scatter";

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
    private deleteKmealMenuBookGQL: DeleteKmealMenuBookGQL,
    private deleteKmealMenuBookSectionGQL: DeleteKmealItemGQL,
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
        restaurant_id: this.scatterService.restaurant_id,
        sort_order: i
      })
    }

    const variables: insKmealMenuBook.Variables = {
      objects: objects,
      "on_conflict": {
        "constraint": KmealMenuBookConstraint.MenuBookPkey,
        "update_columns": [KmealMenuBookUpdateColumn.SortOrder]
      }
    }
    this.insertKmealMenuBookGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_menu_book', 'returning')).subscribe((mb: insKmealMenuBook.KmealMenuBookInlineFragment[]) => {
      this.openSnackBar("updated", "");
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
        restaurant_id: this.scatterService.restaurant_id,
        sort_order: this.menubooks.length + 1
      }],
      "on_conflict": {
        "constraint": KmealMenuBookConstraint.MenuBookPkey,
        "update_columns": [KmealMenuBookUpdateColumn.MenuBook]
      }
    }
    this.insertKmealMenuBookGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_menu_book', 'returning')).subscribe((mb: insKmealMenuBook.KmealMenuBookInlineFragment[]) => {
      const newgroup = <kmb.KmealMenuBook>mb[0];
      this.menubooks.push(newgroup);
    }, (err) => {
      this.openSnackBar("Error creating menu book :" + err, "");
    })
  }


  deleteMenuGroup(ev) {
    const variables: delKmealMenuBook.Variables = {
      "where": {
        "menu_book_id": {
          "_eq": ev.menu_book_id
        }
      }
    }
    this.deleteKmealMenuBookGQL.mutate(variables).pipe(pluck('data', 'delete_kmeal_menu_book', 'returning')).subscribe(
      (mb: string[]) => {
        if (mb.length == 0) {
          this.openSnackBar("not deleted, make sure you don't have sections associated with this section", "");
        }
        const indx = this.menubooks.findIndex((mb) => mb.menu_book_id == ev.menu_book_id)
        this.menubooks.splice(indx, 1);
        this.openSnackBar("deleted", "");
      }, (err) => {
        this.openSnackBar("Cannot delete the menu book, Please delete/move the items associated with this book", "");
      })
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
