import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { MatStepper, MatButtonToggleChange, MatSnackBar } from '@angular/material';
import { Book } from '../model/books';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'kmeal-nx-newlisting',
  templateUrl: './newlisting.component.html',
  styleUrls: ['./newlisting.component.scss']
})
export class NewlistingComponent implements OnInit {

  menubooks: Book[] = [];

  isNonLinear = false;

  isNonEditable = false;
  pricetype = 'Regular';
  @ViewChild('linearVerticalStepper') stepper: MatStepper;
  selectedMenuBook: Book;
  selectedSection: any;
  priceHeader = "Enter pricing information";

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.pricingForm.get('formArray'); }

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
      this.fb.group({
        "side_groups": this.fb.array([
        ])
      })
    ])
  });

  side = {
    "item_name": [null, Validators.required],
    "list_price": [null]
  };

  dynamicPricingForm = {
    "min_price": [null, Validators.required],
    "quantity": [null, Validators.required],
    "start_date": [null, Validators.required],
    "start_time": [null, Validators.required],
    "end_date": [null, Validators.required],
    "end_time": [null, Validators.required],
    "sliding_rate": [.05, Validators.required]
  };

  createItemGroup() {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    groups.push(this.fb.group({
      "max_selection": [null, Validators.required],
      "group": [null, Validators.required],
      "sides": this.fb.array(
        [this.fb.group(this.side)])
    }));
  }

  createItemSide(indx) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    const item = groups.controls[indx] as FormGroup;
    (<FormArray>item.get("sides")).push(this.fb.group(this.side))
  }

  deleteItemGroup(index) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    groups.removeAt(index);
  }

  deleteItemSide(grpIndx, indx) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    const item = groups[grpIndx] as FormGroup;
    (<FormArray>item.get("sides")).removeAt(indx);
  }

  // filteredStates: Observable<any[]>;

  // states: any[] = [
  //   {
  //     name: 'Arkansas',
  //     population: '2.978M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
  //   },
  //   {
  //     name: 'California',
  //     population: '39.14M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
  //   },
  //   {
  //     name: 'Florida',
  //     population: '20.27M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
  //   },
  //   {
  //     name: 'Texas',
  //     population: '27.47M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
  //   }
  // ];
  // stateCtrl = new FormControl();


  constructor(private fb: FormBuilder,
    public menuSevice:MenuService,
    public snackBar: MatSnackBar) {
    // this.filteredStates = this.stateCtrl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(state => state ? this._filterStates(state) : this.states.slice())
    // );
  }



  formatLabel(value: number | null) {
    return value + "%";
  }

  async ngOnInit() {
    this.menubooks = await this.menuSevice.getMyBooks();
  }

  listItemSelected(id: number) {
    (<FormArray>this.pricingForm.get("formArray")).controls[1].get("item_id").setValue(id);
    this.stepper.next();
  }

  priceSet(evt) {
    this.stepper.next();
    evt.preventDefault();
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
   
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
