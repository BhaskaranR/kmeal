import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import {
  KmealBookSectionItemsGQL,
  KmealBookSectionItems as kmb,
  KmealItem as ki,
  InsertKmealMenuBookSection as insKmealMenuBookSection,
  InsertItemSection as insItemSection,
  InsertItemSectionGQL,
  DeleteItemSection as dis,
  DeleteItemSectionGQL as deleteItemSectionGQL,
  ConflictAction,
  KmealItemSectionConstraint,
  KmealItemSectionUpdateColumn,
  KmealItemGQL
} from '../generated/graphql';

import { combineLatest } from 'rxjs';
import { pluck, map } from "rxjs/operators";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar, MatSelectChange } from "@angular/material";

@Component({
  selector: 'kmeal-nx-fillmenubook',
  templateUrl: './fillmenubook.component.html',
  styleUrls: ['./fillmenubook.component.scss']
})
export class FillmenubookComponent implements OnInit {
  selectedMenuBook: kmb.KmealMenuBook;
  selectedSection: kmb.MenuBookSectionsBymenuBookId;
  sectionItems: kmb.ItemSectionsBysectionId[];

  sectionsForm = this.fb.group({
    section_id: [null, Validators.required],
    book_id: [null, Validators.required]
  });

  menubooks: kmb.KmealMenuBook[] = [];
  items: ki.KmealItem[] = [];

  constructor(
    private kmealMenuBookItemsSectionGQL: KmealBookSectionItemsGQL,
    private kmealItemGQL: KmealItemGQL,
    private insertItemSectionGQL: InsertItemSectionGQL,
    private deleteItemSectionGQL: deleteItemSectionGQL,
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

    const ob1 = this.kmealMenuBookItemsSectionGQL.watch(variables, {
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(pluck('data', 'kmeal_menu_book'));

    const ob2 = this.kmealItemGQL.watch(variables, {}).valueChanges
      .pipe(pluck('data', 'kmeal_item'));

    combineLatest(ob1, ob2).subscribe(([mg, items]) => {
      if (!mg || !items) {
        return;
      }
      this.menubooks = <kmb.KmealMenuBook[]>mg;
      this.items = <ki.KmealItem[]>items;
    });
  }

  dropSections(event: CdkDragDrop<ki.KmealItem[]>) {
    moveItemInArray(this.sectionItems, event.previousIndex, event.currentIndex);
    this.submitItems();
  }

  sectionsSelectionChanged(ev: MatSelectChange) {
    this.selectedSection = ev.value;
    this.sectionItems = ev.value.itemSectionsBysectionId;
  }

  deleteItemFromSection(ev) {
    const variables: dis.Variables = {
      "where": {
        "item_id": {
          "_eq": ev.item_id
        }
      }
    }
    this.deleteItemSectionGQL.mutate(variables).pipe(pluck('data', 'delete_kmeal_item_section', 'returning')).subscribe((mb: string[]) => {
      if (mb.length == 0) {
        this.openSnackBar("not deleted, make sure you don't items listed", "");
      }
      const indx = this.sectionItems.findIndex((s) => s.item_id == ev.item_id)
      this.sectionItems.splice(indx, 1);
      this.openSnackBar("deleted", "");
    })
  }

  onSubmit() {
    if (!this.sectionsForm.valid) {
      this.openSnackBar("Enter relevant details", "");
    }
    this.submitItems();
  }

  submitItems() {
    const objects = [];
    for (let i = 0; i < this.sectionItems.length; i++) {
      objects.push({
        "item_id":  this.sectionItems[i].item_id,
        "section_id": this.selectedSection.section_id,
        "sort_order": i
      })
    }

    const variables: insItemSection.Variables = {
      objects: objects,
      "on_conflict": {
        "action": ConflictAction.Update,
        "constraint": KmealItemSectionConstraint.ItemSectionPkey,
        "update_columns": [KmealItemSectionUpdateColumn.SortOrder]
      }
    };
    
    this.insertItemSectionGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_item_section', 'returning')).subscribe((ms:
      insKmealMenuBookSection.InsertKmealMenuBookSection) => {
      this.openSnackBar("updated", "");
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
