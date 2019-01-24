import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {KmealMenuBook as kmb, KmealBookSectionItemsGQL } from '../generated/graphql';
import { pluck } from 'rxjs/operators';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'kmeal-nx-newlisting',
  templateUrl: './newlisting.component.html',
  styleUrls: ['./newlisting.component.scss']
})
export class NewlistingComponent implements OnInit {

  menubooks: kmb.KmealMenuBook[] = [];

  @ViewChild('linearVerticalStepper') stepper: MatStepper;
  selectedMenuBook: kmb.KmealMenuBook;
  

  pricingForm = this.fb.group({
    book_id: [null, Validators.required],
    section_id: [null, Validators.required],
    list_type: ['R', Validators.required],
    item_id: [null, Validators.required],
    isactive: [true, Validators.required],
    list_price: [null, Validators.required]
  });

  dynamicPricingForm = this.fb.group({
    "listing_id": [null, Validators.required],
    "min_price": [null, Validators.required],
    "quantity": [null, Validators.required],
    "start": [null, Validators.required],
    "duration": [null, Validators.required],
    "sliding_rate": [null, Validators.required],
    "status": [null, Validators.required],
  });

  constructor(private fb: FormBuilder,
    private kmealMenuBookItemsSectionGQL:  KmealBookSectionItemsGQL) { }

  ngOnInit() {
    const variables = {
      "where": {
        "restaurant_id": {
          "_eq": 1
        }
      }
    };

    this.kmealMenuBookItemsSectionGQL.watch(variables, {
    }).valueChanges.pipe(pluck('data', 'kmeal_menu_book'))
      .subscribe((mg: kmb.KmealMenuBook[]) => {
        if (!mg) {
          return;
        }
        this.menubooks = mg;
      });
  }

  listItemSelected(item_id: number) {
    this.dynamicPricingForm.get("item_id").setValue(item_id);
    this.stepper.next();
  }

}
