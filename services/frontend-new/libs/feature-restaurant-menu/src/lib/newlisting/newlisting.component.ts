import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { MatStepper, MatButtonToggleChange, MatSnackBar } from '@angular/material';
import { Book } from '../model/books';
import { MenuService } from '../services/menu.service';
import { Section } from '../model/section';
import { Item } from '../model/item';
import * as moment from 'moment';
import { SearchTransactionsForwardGQL } from '../generated/graphql';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'kmeal-nx-newlisting',
  templateUrl: './newlisting.component.html',
  styleUrls: ['./newlisting.component.scss']
})
export class NewlistingComponent implements OnInit , OnDestroy{

  get formArray(): AbstractControl | null { return this.pricingForm.get('formArray'); }

  constructor(
    private fb: FormBuilder,
    public menuService:MenuService,
    public snackBar: MatSnackBar,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL) {}


  menubooks       : Book[] = [];
  isNonLinear     : boolean = false;
  isNonEditable   : boolean = false;
  pricetype       : number = 1;
  stepper         : MatStepper;
  selectedMenuBook: Book;
  selectedSection : Section;
  priceHeader     : string = "Enter pricing information";
  isReady         : boolean = false;
  unSubscription$ : Subject<any> = new Subject();

  dynamicPricingValidator = {
    "list_type": [1, Validators.required],
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

  sideValidator = {
    "item_name": [null, Validators.required],
    "list_price": [null, Validators.required]
  };

  bookAndSectionForm = this.fb.group({
    book_id: [null, Validators.required],
    section_id: [null, Validators.required],
  });

  itemForm = this.fb.group({
    item_id: [null, Validators.required],
  })

  dynamicPricingForm = this.fb.group(this.dynamicPricingValidator);

  sidesForm = this.fb.group({
    "side_groups": this.fb.array([])
  });

  pricingForm = this.fb.group({
    formArray: this.fb.array([
      this.bookAndSectionForm,
      this.itemForm,
      this.dynamicPricingForm,
      this.sidesForm
    ])
  });

  sections:Section[];
  selectedSections: Section[];
  items:Item[];
  selectedItems: Item[];
  accountName;
  

  createSideGroup() {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    groups.push(this.fb.group({
      "max_selection": [null, Validators.required],
      "group": [null, Validators.required],
      "sides": this.fb.array([this.fb.group(this.sideValidator)])
    }));
  }

  createItemSide(indx) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    const item = groups.controls[indx] as FormGroup;
    (<FormArray>item.get("sides")).push(this.fb.group(this.sideValidator));
  }

  deleteItemGroup(index) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    groups.removeAt(index);
  }

  deleteItemSide(grpIndx, indx) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    const item = groups.controls[grpIndx] as FormGroup;
    (<FormArray>item.get("sides")).removeAt(indx);
  }

  formatLabel(value: number | null) {
    return (value/100) + "%";
  }


  async ngOnInit() {
    const menubooks  = await this.menuService.getMyBooks();
    this.menubooks = menubooks.filter(bk => !!bk.is_active);

    const sections   = await this.menuService.getMySections();
    this.sections = sections.filter(sec => !!sec.is_active);

    const items      = await this.menuService.getMyItems();
    this.items = items.filter(i => !!i.is_active);

    this.accountName = await this.menuService.getAccountName();

    const sub = this.searchTransactionsForwardGQL
    .subscribe({
       "query": `receiver:kmealowner12 auth:${this.accountName} status:executed  db.table:sec/kmealowner12`,
    }).pipe(takeUntil(this.unSubscription$));
    sub.subscribe((next) => {
       console.log(next, 'update ?');
     });

     this.isReady = true;
  }

  onMenuBookChange(evt, stepper) {
    const bookId = evt.value;
    const book = this.menubooks.filter(book => book.book_id === bookId)[0];
    this.selectedSections = this.sections.filter(sec => book.sections.includes(sec.section_id));
    if (!this.stepper){
      this.stepper = stepper;
    }
  }

  onSectionChange(evt, stepper:MatStepper){
    const secId = evt.value;
    const section = this.selectedSections.filter(sec => sec.section_id === secId)[0];
    this.selectedItems = this.items.filter(item => section.items.includes(item.item_id));
    if (!this.stepper){
      this.stepper = stepper;
    }
    stepper.next();
  }   

  listItemSelected(id: number, stepper:MatStepper) {
    (<FormArray>this.pricingForm.get("formArray")).controls[1].get("item_id").setValue(id);
    this.priceTypeChanged({value:1} as any);
    stepper.next();
  }

  priceTypeChanged($event: MatButtonToggleChange) {
    (<FormArray>this.pricingForm.get("formArray")).controls[2].get("list_type").setValue($event.value);
    const fb: FormGroup = <FormGroup>(<FormArray>this.pricingForm.get("formArray")).controls[2];
    if ($event.value != 1) {
      Object.keys(this.dynamicPricingValidator).forEach(key => {
        fb.controls[key].setValidators(this.dynamicPricingValidator[key][1]);
        fb.controls[key].updateValueAndValidity();
      });
    } else {
      Object.keys(this.dynamicPricingValidator).forEach(key => {
        fb.controls[key].setValidators(null);
        fb.controls[key].updateValueAndValidity();
      });

      fb.controls['list_price'].setValidators(this.dynamicPricingValidator['list_price'][1]);
      fb.controls['list_price'].updateValueAndValidity();
    }
    this.pricetype = Number($event.value);
  }

  async onSubmit(form) {
    if (!this.pricingForm.valid) {
      return;
    }

    let listType    = Number((<FormArray>this.pricingForm.get('formArray')).controls[2].get('list_type').value);
    const bookId    = (<FormArray>this.pricingForm.get('formArray')).controls[0].get('book_id').value;
    const sectionId = (<FormArray>this.pricingForm.get('formArray')).controls[0].get('section_id').value;
    const itemId    = (<FormArray>this.pricingForm.get('formArray')).controls[1].get("item_id").value;
    const listPrice = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('list_price').value;
    const sides     = this.generateSidesJson();

    let minPrice    = 0, 
        qty         = 0, 
        slidingRate = 0, 
        endTime , 
        endDate, 
        expires     = 0;

    if (listType == 0) {
      minPrice      = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('min_price').value;
      qty           = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('quantity').value;
      slidingRate   = ((<FormArray>this.pricingForm.get('formArray')).controls[2].get('sliding_rate').value)/100;
      endDate       = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('end_date').value;
      endTime       = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('end_time').value;
      expires       = parseInt(this.convertDatesToSeconds(endDate, endTime).toString());
    }
    

    console.log("book id : ",bookId,
    "\n section id : ", sectionId,
    '\n item id :', itemId, 
    '\n list type : ',listType, 
    "\n list price : ",listPrice, 
    "\n min price : ",minPrice, 
    "\n qty : ", qty,
    "\n sliding rate : ", slidingRate, 
    "\n expires : ", expires,
    '\n sides : ', sides);

    try{
      const reps = await this.menuService.createListing(
        bookId, 
        itemId, 
        sectionId,
        listType, 
        listPrice,
        minPrice,
        qty, 
        expires, 
        slidingRate, 
        sides  );
      this.openSnackBar('Created listing',"");
      this.resetForm();
      this.formArray['controls'].forEach( form => {
        form.markAsPristine();
        form.markAsUntouched();
      })
    }
    catch(e){
      this.openSnackBar(e,"");
    }
   
  }

  resetForm(){
    this.pricingForm.reset();
      this.pricingForm.markAsUntouched();
      this.stepper.reset();
  }

  private convertDatesToSeconds(date, time){
    time = time + ":00";
    const now = moment();
    const end = moment(moment(date).format('MM/DD/YYYY') + ' ' + time);
    const duration = moment.duration(end.diff(now) );
    const secs = duration.asSeconds();
    return secs
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private generateSidesJson(){
    let sides = (<FormArray>this.pricingForm.get('formArray')).controls[3].get('side_groups').value;
    sides = sides.map(s => JSON.stringify(s));
    return sides;
  }

  ngOnDestroy(){
    this.unSubscription$.next();
    this.unSubscription$.complete();
  }

}
