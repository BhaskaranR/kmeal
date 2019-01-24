import { Component, Input } from "@angular/core";
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

  @Input() menuDetails: {
    itemId: number;
    menuBookId: number;
    itemName: string,
    description: string,
    photo: string | null,
    spicy_level: number,
    vegetarian: number,
    cooking_time: number | null,
    book_id: number,
    section_id: number
  }

  menubooks: kmb.KmealMenuBook[] = [];
  menuForm = this.fb.group({
    itemName: [null, Validators.required],
    description: [null, Validators.required],
    photo: null,
    spicy_level: 0,
    vegetarian: 3,
    cooking_time: null,
    book_id: null,
    section_id: null
  });

  constructor(private fb: FormBuilder,
    private insertKmealItemGQL: InsertKmealItemGQL,
    private kmealMenuBookGQL: KmealMenuBookGQL) { }

  get itemName() {
    return this.menuForm.get("itemName").value;
  }

  get description() {
    return this.menuForm.get("description").value;
  }

  get photo() {
    return this.menuForm.get("photo").value;
  }

  get spicyLevel() {
    if (this.menuForm.get("spicy_level").value == "0") return;
    return this.menuForm.get("spicy_level").value;
  }
  
  get vegetarian() {
    if (this.menuForm.get("vegetarian").value == 3) return;
    return this.menuForm.get("vegetarian").value;
  }

  get cookingTime() {
    return this.menuForm.get("cooking_time").value;
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
        if (this.menuDetails) {
          this.setInitialDetails();
        }
      });
  }

  setInitialDetails() {
    const mbs = this.menubooks.filter(mb => mb.menu_book_id == this.menuDetails.menuBookId)
    if (mbs && mbs.length !== 0){
      this.selectedMenuBook = mbs[0];
    }
    this.menuForm.get("cooking_time").setValue(this.menuDetails.itemName);
    this.menuForm.get("description").setValue(this.menuDetails.description);
    this.menuForm.get("itemName").setValue(this.menuDetails.itemName)
    this.menuForm.get("photo").setValue(this.menuDetails.photo);
    this.menuForm.get("spicy_level").setValue(this.menuDetails.spicy_level);
    this.menuForm.get("vegetarian").setValue(this.menuDetails.vegetarian);
    this.menuForm.get("section_id").setValue(this.menuDetails.section_id);
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
