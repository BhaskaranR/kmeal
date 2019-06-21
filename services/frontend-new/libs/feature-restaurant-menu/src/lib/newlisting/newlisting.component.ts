import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { MatStepper, MatButtonToggleChange, MatSnackBar } from '@angular/material';
import { Book } from '../model/books';
import { MenuService } from '../services/menu.service';
import { Section } from '../model/section';
import { Item } from '../model/item';
import * as moment from 'moment';

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
  selectedSection: Section;
  priceHeader = "Enter pricing information";

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.pricingForm.get('formArray'); }

  dynamicPricingForm = {
    "list_type": ['1', Validators.required],
    "isactive": [true, Validators.required],
    "list_price": [null, Validators.required],
    "min_price": [null, Validators.required],
    "quantity": [null, Validators.required],
    "start_date": [{value: '', disabled: true}, Validators.required],
    "start_time": [{value: '', disabled: true}, Validators.required],
    "end_date": [null, Validators.required],
    "end_time": [null, Validators.required],
    "sliding_rate": [null, Validators.required]
  };

  side = {
    "item_name": [null, Validators.required],
    "list_price": [null, Validators.required]
  };

  pricingForm = this.fb.group({
    formArray: this.fb.array([
      this.fb.group({
        book_id: [null, Validators.required],
        section_id: [null, Validators.required],
      }),
      this.fb.group({
        item_id: [null, Validators.required],
      }),
      this.fb.group(this.dynamicPricingForm),
      this.fb.group({
        "side_groups": this.fb.array([
        ])
      })
    ])
  });

  

  

  createItemGroup() {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    groups.push(this.fb.group({
      "max_selection": [null, Validators.required],
      "group": [null, Validators.required],
      "sides": this.fb.array(
        [this.fb.group(this.side)])
    }));

    console.log((<FormArray>this.pricingForm.get("formArray")).controls[3])
  }

  createItemSide(indx) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    const item = groups.controls[indx] as FormGroup;
    (<FormArray>item.get("sides")).push(this.fb.group(this.side));
    console.log((<FormArray>this.pricingForm.get("formArray")).controls[3])
  }

  deleteItemGroup(index) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    groups.removeAt(index);
    console.log((<FormArray>this.pricingForm.get("formArray")).controls[3])
  }

  deleteItemSide(grpIndx, indx) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    const item = groups[grpIndx] as FormGroup;
    (<FormArray>item.get("sides")).removeAt(indx);
    console.log((<FormArray>this.pricingForm.get("formArray")).controls[3])
  }

  constructor(private fb: FormBuilder,
    public menuSevice:MenuService,
    public snackBar: MatSnackBar) {
  }

  formatLabel(value: number | null) {
    return value + "%";
  }

  sections:Section[];
  selectedSections: Section[];
  items:Item[];
  selectedItems: Item[];
  async ngOnInit() {
    this.menubooks = await this.menuSevice.getMyBooks();
    this.sections = await this.menuSevice.getMySections();
    this.items = await this.menuSevice.getMyItems();
  }

  onMenuBookChange(evt) {
    const bookId = evt.value;
    const book = this.menubooks.filter(book => book.book_id === bookId)[0];
    this.selectedSections = this.sections.filter(sec => book.sections.includes(sec.section_id));
  }

  onSectionChange(evt){
    const secId = evt.value;
    const section = this.selectedSections.filter(sec => sec.section_id === secId)[0];
    this.selectedItems = this.items.filter(item => section.items.includes(item.item_id));
    this.stepper.next();
  }   

  listItemSelected(id: number) {
    (<FormArray>this.pricingForm.get("formArray")).controls[1].get("item_id").setValue(id);
    this.priceTypeChanged({value:'Regular'} as any);
    this.stepper.next();
  }

  priceSet(evt) {
    this.stepper.next();
    evt.preventDefault();
  }

  priceTypeChanged($event: MatButtonToggleChange) {
    console.log($event);
    (<FormArray>this.pricingForm.get("formArray")).controls[2].get("list_type").setValue($event.value);
    const fb: FormGroup = <FormGroup>(<FormArray>this.pricingForm.get("formArray")).controls[2];
    if ($event.value !== "1") {
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

  async onSubmit() {
    if (!this.pricingForm.valid) {
      return;
    }

    const bookId    = (<FormArray>this.pricingForm.get('formArray')).controls[0].get('book_id').value;
    const sectionId = (<FormArray>this.pricingForm.get('formArray')).controls[0].get('section_id').value;
    const itemId    = (<FormArray>this.pricingForm.get('formArray')).controls[1].get("item_id").value;
    const listType  = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('list_type').value;
    const listPrice = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('list_price').value;
    const minPrice  = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('min_price').value;
    const qty       = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('quantity').value;
    const slidingRate = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('sliding_rate').value;
    const   endDate   = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('end_date').value;
    const endTime   = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('end_time').value;
    const sides     = this.generateSidesJson();
    const expires = parseFloat(this.convertDatesToSeconds(endDate, endTime));

    console.log("book id : ",bookId,
    "\n section id : ", sectionId,
    '\n item id :', itemId, 
    '\n list type : ',listType, 
    "\n list price : ",listPrice, 
    "\n min price : ",minPrice, 
    "\n qty : ", qty,
    "\n sliding rate : ", slidingRate, 
    "\n expires : ", expires,
    "\n end date : ", endDate,
    "\n end time : ", endTime,
    '\n sides : ', sides);

    const reps = await this.menuSevice.createListing(bookId, sectionId,itemId, listType, listPrice,minPrice,qty, expires, slidingRate, sides  );
    console.log('done!?', reps);
   
  }

  private convertDatesToSeconds(date, time){
    time = time + ":00";
    let now = moment();
    let end = moment(moment(date).format('MM/DD/YYYY') + ' ' + time);
    console.log(end, time);
    let duration = moment.duration(end.diff(now) );
    let secs = duration.asSeconds();
    return secs.toString();
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private generateSidesJson(){
    let sides = (<FormArray>this.pricingForm.get('formArray')).controls[3].get('side_groups').value;
    sides = sides.map(s => JSON.stringify(s));
    console.log(sides);
    return sides;
  }
}
