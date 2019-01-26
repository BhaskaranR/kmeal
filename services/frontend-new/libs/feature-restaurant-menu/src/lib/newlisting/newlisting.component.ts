import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import {
  KmealBookSectionItems as kmb, KmealBookSectionItemsGQL, InsertKmealListingGQL,
  InsertKmealListing as insKmealListing,
  ConflictAction,
  KmealListingConstraint,
  KmealListingUpdateColumn
} from '../generated/graphql';
import { pluck } from 'rxjs/operators';
import { MatStepper, MatButtonToggleChange } from '@angular/material';
import { InsertKmealListing } from '../generated/graphql';

@Component({
  selector: 'kmeal-nx-newlisting',
  templateUrl: './newlisting.component.html',
  styleUrls: ['./newlisting.component.scss']
})
export class NewlistingComponent implements OnInit {

  menubooks: kmb.KmealMenuBook[] = [];
  pricetype = 'Regular';
  @ViewChild('linearVerticalStepper') stepper: MatStepper;
  selectedMenuBook: kmb.KmealMenuBook;
  selectedSection: any;

  pricingForm = this.fb.group({
    formArray: this.fb.array([
      this.fb.group({
        book_id: [null, Validators.required],
        section_id: [null, Validators.required],
      }),
      this.fb.group({
        item_id: [null, Validators.required],
      }),
      this.fb.group({
        "list_type": ['R', Validators.required],
        "isactive": [true, Validators.required],
        "list_price": [null, Validators.required],
        "min_price": [null, Validators.required],
        "quantity": [null, Validators.required],
        "start_date": [null, Validators.required],
        "start_time": [null, Validators.required],
        "end_date": [null, Validators.required],
        "end_time": [null, Validators.required],
        "sliding_rate": [null, Validators.required]
      }),
    ])
  });


  dynamicPricingForm = {
    "min_price": [null, Validators.required],
    "quantity": [null, Validators.required],
    "start_date": [null, Validators.required],
    "start_time": [null, Validators.required],
    "end_date": [null, Validators.required],
    "end_time": [null, Validators.required],
    "sliding_rate": [.05, Validators.required]
  };

  constructor(private fb: FormBuilder,
    private kmealMenuBookItemsSectionGQL: KmealBookSectionItemsGQL,
    private insertKmealListingGQL: InsertKmealListingGQL
  ) { }

  formatLabel(value: number | null) {
    return value + "%";
  }

  ngOnInit() {
    const variables = {
      "where": {
        "restaurant_id": {
          "_eq": 1
        }
      }
    };
    this.kmealMenuBookItemsSectionGQL.watch(variables, {
      fetchPolicy: 'network-only'
    }
    ).valueChanges.pipe(pluck('data', 'kmeal_menu_book'))
      .subscribe((mg: kmb.KmealMenuBook[]) => {
        if (!mg) {
          return;
        }
        this.menubooks = mg;
      });
  }


  listItemSelected(id: number) {
    (<FormArray>this.pricingForm.get("formArray")).controls[1].get("item_id").setValue(id);
    this.stepper.next();
  }

  priceTypeChanged($event: MatButtonToggleChange) {
    (<FormArray>this.pricingForm.get("formArray")).controls[2].get("list_type").setValue($event.value.substr(0, 1));

    const fb: FormGroup = <FormGroup>(<FormArray>this.pricingForm.get("formArray")).controls[2];
    if ($event.value === "dynamic") {
      Object.keys(this.dynamicPricingForm).forEach(key => {
        fb.controls[key].setValidators(this.dynamicPricingForm[key][1]);
        fb.controls[key].updateValueAndValidity();
      });
    } else {
      Object.keys(this.dynamicPricingForm).forEach(key => {
        fb.controls[key].setValidators(null);
        fb.controls[key].updateValueAndValidity();
      });
    }
    this.pricetype = $event.value;
  }


  onSubmit() {
    if (!this.pricingForm.valid) {
      return;
    }
    const valArr = this.pricingForm.value.formArray;

    const variables: insKmealListing.Variables = {
      "objects": [
        {
          "item_id": valArr[1].item_id,
          "list_price": valArr[2].list_price,
          "restaurant_id": 1,
          "list_type": valArr[2].list_type,
          "min_price": valArr[2].min_price,
          "sliding_rate": valArr[2].sliding_rate,
          "quantity": valArr[2].quantity,
          "isactive": valArr[2].isactive,
          "start_date": valArr[2].start_date,
          "start_time": valArr[2].start_time,
          "end_date": valArr[2].end_date,
          "end_time": valArr[2].end_time,
          "isrecurring": valArr[2].isrecurring,
          "listingItemSidessBylistingId": {
            "data": [{
              "group":"",
              "list_price": "",
              "max_selection": 2
            }]
          }
        }],
      "on_conflict": {
        "action": ConflictAction.Update,
        "constraint": KmealListingConstraint.ListingPkey,
        "update_columns": [
          KmealListingUpdateColumn.ListPrice,
          KmealListingUpdateColumn.Isactive,
          KmealListingUpdateColumn.MinPrice,
          KmealListingUpdateColumn.Quantity,
          KmealListingUpdateColumn.SlidingRate,
          KmealListingUpdateColumn.StartDate,
          KmealListingUpdateColumn.StartTime,
          KmealListingUpdateColumn.EndDate,
          KmealListingUpdateColumn.EndTime
        ]
      }
    }
    this.insertKmealListingGQL.mutate(variables).pipe(pluck('data', 'insert_kmeal_listing', 'returning')).subscribe((items: insKmealListing.Returning[]) => {

    });
  }

}
