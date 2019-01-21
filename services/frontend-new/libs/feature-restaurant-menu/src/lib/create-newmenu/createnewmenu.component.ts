import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import {
  KmealMenuBookGQL, KmealMenuBook as kmb, InsertKmealItemGQL,
  InsertKmealItem as insKmealMenuItem,
  ConflictAction,
  KmealItemConstraint,
  KmealItemUpdateColumn
} from '../generated/graphql';
import { pluck } from 'rxjs/operators';

@Component({
  selector: "kmeal-nx-newmenu",
  templateUrl: "./createnewmenu.component.html",
  styleUrls: ["./createnewmenu.component.scss"]
})
export class CreateNewMenuComponent {

  selectedMenuBook: kmb.KmealMenuBook;
  formSubmitted = false;

  menubooks: kmb.KmealMenuBook[] = [];
  menuForm = this.fb.group({
    itemName: [null, Validators.required],
    description: [null, Validators.required],
    photo: null,
    spicy_level: null,
    vegetarian: "3",
    cooking_time: null,
    book_id: [null, Validators.required],
    section_id: [null, Validators.required]
  });

  constructor(private fb: FormBuilder,
    private insertKmealItemGQL: InsertKmealItemGQL,
    private kmealMenuBookGQL: KmealMenuBookGQL) { }


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
      });
  }

  onSubmit() {
    
    if (!this.menuForm.valid) {
      return;
    }
    
    const variables: insKmealMenuItem.Variables = {
      object:  [{
        "cooking_time": this.menuForm.get("cooking_time").value,
        "description": this.menuForm.get("description").value,
        //item_id: ,
        "item_name": this.menuForm.get("itemName").value,
        "photo": this.menuForm.get("photo").value ==  null ? 'na':  this.menuForm.get("photo").value  ,
        "restaurant_id": 1,
        "sort_order":  1,
        "spicy_level": this.menuForm.get("spicy_level").value,
        "vegetarian": this.menuForm.get("vegetarian").value,
        "itemSectionsByitemId":  {
          "data":[{
            "section_id":this.menuForm.get("section_id").value
          }]
        }
      }],
      "on_conflict": {
        "action": ConflictAction.Update,
        "constraint": KmealItemConstraint.ItemPkey,
        "update_columns": [
          KmealItemUpdateColumn.ItemName
        ]
      }
    }
    this.insertKmealItemGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_item', 'returning')).subscribe((items: insKmealMenuItem.Returning[]) => {
      if (items.length !== 0) {
          this.formSubmitted = true;
      }
    });
  }

  deletemenu() {

  }
}
