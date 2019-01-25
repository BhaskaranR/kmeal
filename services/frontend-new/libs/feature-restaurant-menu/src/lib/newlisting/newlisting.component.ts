import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { KmealBookSectionItems as kmb, KmealBookSectionItemsGQL } from '../generated/graphql';
import { pluck } from 'rxjs/operators';
import { MatStepper, MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'kmeal-nx-newlisting',
  templateUrl: './newlisting.component.html',
  styleUrls: ['./newlisting.component.scss']
})
export class NewlistingComponent implements OnInit {

  menubooks: kmb.KmealMenuBook[] = [];
  pricetype = 'regular';
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
        "sliding_rate": [null, Validators.required],
        "status": [null, Validators.required]
      }),
    ])
  });


  dynamicPricingForm = {
    "min_price": [null, Validators.required],
    "quantity": [null, Validators.required],
    "start": [null, Validators.required],
    "duration": [null, Validators.required],
    "sliding_rate": [null, Validators.required],
    "status": [null, Validators.required],
  };

  constructor(private fb: FormBuilder,
    private kmealMenuBookItemsSectionGQL: KmealBookSectionItemsGQL) { }

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
    (<FormArray>this.pricingForm.get("formArray")).controls[3].get("list_type").setValue($event.value.substr(1, 1));

    const fb: FormGroup = <FormGroup>(<FormArray>this.pricingForm.get("formArray")).controls[3];
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

}
