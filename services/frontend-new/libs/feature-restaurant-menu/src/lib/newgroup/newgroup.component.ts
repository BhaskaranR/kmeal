import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  KmealMenuBookGQL, KmealMenuBook as kmb,
  InsertKmealMenuBook as insKmealMenuBook,
  InsertKmealMenuBookGQL,
  DeleteKmealMenuBook as delKmealMenuBook,
  DeleteKmealMenuBookGQL,
  KmealMenuBookConstraint,
  KmealMenuBookUpdateColumn,
} from '../generated/graphql';

import { pluck } from "rxjs/operators";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { MenuService } from "../services/menu.service";


@Component({
  selector: "kmeal-nx-newgroup",
  templateUrl: "./newgroup.component.html",
  styleUrls: ["./newgroup.component.scss"]
})
export class NewgroupComponent implements OnInit {
  selectedMenuBook: kmb.KmealMenuBook;

  menuBookForm = this.fb.group({
    menubook: [null, Validators.required]
  });

  sectionsForm = this.fb.group({
    section: [null, Validators.required]
  });

  menubooks: any[] = []

  sections: kmb.MenuBookSectionsBymenuBookId[] = [];

  constructor(private kmealMenuBookGQL: KmealMenuBookGQL,
    private insertKmealMenuBookGQL: InsertKmealMenuBookGQL,
    private deleteKmealMenuBookGQL: DeleteKmealMenuBookGQL,
    private menuService: MenuService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loadBooks();
  }

  private async loadBooks(){
    this.menubooks = await this.menuService.readBooks();
  }

  dropMenubook(event: CdkDragDrop<kmb.KmealMenuBook[]>) {
    // moveItemInArray(this.menubooks, event.previousIndex, event.currentIndex);

    // const objects = [];
    // for (let i = 0; i < this.menubooks.length; i++) {
    //   objects.push({
    //     menu_book_id: this.menubooks[i].menu_book_id,
    //     menu_book: this.menubooks[i].menu_book,
    //     restaurant_id: this.scatterService.restaurant_id,
    //     sort_order: i
    //   })
    // }

    // const variables: insKmealMenuBook.Variables = {
    //   objects: objects,
    //   "on_conflict": {
    //     "constraint": KmealMenuBookConstraint.MenuBookPkey,
    //     "update_columns": [KmealMenuBookUpdateColumn.SortOrder]
    //   }
    // }
    // this.insertKmealMenuBookGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_menu_book', 'returning')).subscribe((mb: insKmealMenuBook.KmealMenuBookInlineFragment[]) => {
    //   this.openSnackBar("updated", "");
    // })
  }


  async onBookSubmit() {
    if (!this.menuBookForm.valid) {
      this.openSnackBar("Enter menu book", "");
      return;
    }

    try {
     const resp = await this.menuService.createbook(this.menuBookForm.value.menubook);
     this.menubooks.push(this.menuBookForm.value.menubook);
     this.openSnackBar("menu book created", "");
    }
    catch (e) {
      this.openSnackBar("Error creating menu book :" + e, "");
    }
  }


  deleteMenuGroup(ev) {

    
    /*
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
      */
  }


  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
