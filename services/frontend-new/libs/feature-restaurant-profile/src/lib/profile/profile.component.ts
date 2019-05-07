import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { PhoneValidator } from '../validators/phone.validator';
import { MatSnackBar, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';

import { KmealCategoriesGQL } from '@kmeal-nx/ui';

interface Coordinate {
  type: string,
  lat: number,
  lng: number,
  radius: number
}

@Component({
  selector: 'kmeal-nx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCategories: Observable<string[]>;
  category: string[] = [];
  allCategories: string[] = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  cuisinesObs: Observable<{
    alias: string,
    title: string
  }[]>;

  country = new FormControl('US');

  phone = new FormControl('', {
    validators: Validators.compose([
      Validators.required,
      PhoneValidator.validCountryPhone(this.country)
    ])
  });

  addressForm = this.fb.group({
    name: [null, Validators.required],
    address: [{value:null, disabled:true}, Validators.required],
    address2: null,
    city: [{value:null, disabled:true}, Validators.required],
    state: [{value:null, disabled:true}, Validators.required],
    postalCode: [{value:null, disabled:true}, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    description: [null, Validators.required],
    phone: this.phone,
    logo: '',
    timeofoperation: [''],
    latitude:[null],
    longitude:[null],
    categories: ['', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'District Of Columbia', abbreviation: 'DC' },
    { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Marshall Islands', abbreviation: 'MH' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Northern Mariana Islands', abbreviation: 'MP' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Palau', abbreviation: 'PW' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' }
  ];

  constructor(private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private categoriesGQL: KmealCategoriesGQL,
    private acctService: AccountService) {

    this.cuisinesObs = this.categoriesGQL
      .watch({})
      .valueChanges
      .pipe(map(result => result.data.kmeal_categories.map(ca => {
        return {
          alias: ca.alias,
          title: ca.title
        };
      })));

    const combined = this.cuisinesObs.subscribe((data1) => {
      this.allCategories = data1.map(d => d.alias);
      combined.unsubscribe();
    });

    this.filteredCategories = this.addressForm.get("categories").valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => {
        return fruit ? this._filter(fruit) : this.allCategories.slice()
      }));
  }



  onAddressChange(e) {
    console.log(e);
    var value = e.formatted_address.split(",");
    const count = value.length;
    
    const country = value[count-1];
    const state = value[count-2];
    const city = value[count-3];
    var z=state.split(" ");
    //this.addressForm.get("country").setValue(country);
    var i =z.length;
    this.addressForm.get("state").setValue(z[1]);
    if(i>2){
      this.addressForm.get("postalCode").setValue(z[2]);
    }
    this.addressForm.get("address").setValue(value[0]);
    this.addressForm.get("city").setValue(city);
    this.addressForm.get("latitude").setValue(e.geometry.location.lat())
    this.addressForm.get("longitude").setValue(e.geometry.location.lng())

  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.category.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.addressForm.get("categories").setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.category.indexOf(fruit);

    if (index >= 0) {
      this.category.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.category.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.addressForm.get("categories").setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  async onSubmit() {
    try {
      if (this.category && this.category.length) {
        this.addressForm.get("categories").setValue(this.category);
      }
      if (!this.addressForm.valid) {
        this.openSnackBar("Invalid form", "");
        return;
      }
      await this.acctService.signup(this.addressForm.value);
      this.openSnackBar("Profile updated", "");
    } catch (e) {
      this.openSnackBar(e, "");
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
