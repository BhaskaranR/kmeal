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
import { MatSnackBar, MatSelectChange, MatAutocompleteSelectedEvent } from "@angular/material";

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
  selectedItemId: number;

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
    const objects = [];
    for (let i = 0; i < this.sectionItems.length; i++) {
      objects.push({
        "item_id":  this.sectionItems[i].item_id,
        "section_id": this.selectedSection.section_id,
        "sort_order": i
      })
    }
    this.submitItems(objects, 'update');
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



  newItemSelected(et: MatAutocompleteSelectedEvent) {
    const indx = this.items.findIndex(i => i.item_name == et.option.value) ;
    this.selectedItemId  = this.items[indx].item_id;
  }

  onSubmit() {
    if (!this.sectionsForm.valid) {
      this.openSnackBar("Enter relevant details", "");
    }
    const objects = [{
        "item_id":  this.selectedItemId,
        "section_id": this.selectedSection.section_id,
        "sort_order": this.sectionItems.length + 1
      }]
    this.submitItems(objects, 'insert');
  }

  submitItems(objects, optype) {
    const variables: insItemSection.Variables = {
      objects: objects,
      "on_conflict": {
        "constraint": KmealItemSectionConstraint.ItemSectionPkey,
        "update_columns": [KmealItemSectionUpdateColumn.SortOrder]
      }
    };
    
    this.insertItemSectionGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_item_section', 'returning')).subscribe((ms:
      insKmealMenuBookSection.InsertKmealMenuBookSection) => {
        if (optype == 'insert') {
          this.sectionItems.push(
            {
              itemByitemId : this.items.find( i => i.item_id == objects[0].item_id),
              item_id: objects[0].item_id
            })
        }
      this.openSnackBar("updated", "");
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
