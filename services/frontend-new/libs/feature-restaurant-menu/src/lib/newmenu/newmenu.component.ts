import { Component, OnDestroy, OnInit} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar, MatDialog } from "@angular/material";
import { MenuService } from "../services/menu.service";
import { Book } from "../model/books";
import { Section } from "../model/section";
import { SearchTransactionsForwardGQL } from "../generated/graphql";
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: "kmeal-nx-newmenu",
  templateUrl: "./newmenu.component.html",
  styleUrls: ["./newmenu.component.scss"]
})
export class NewmenuComponent implements OnInit, OnDestroy {

  selectedMenuBook : Book;
  selectedSection  : Section;
  formSubmitted = false;
  menubooks        : Book[] = [];
  sections         : Section[];
  selectedSections : Section[];
  isReady = false;

  menuForm = this.fb.group({
    itemName       : [null, Validators.required],
    description    : [null, Validators.required],
    photo          : null,
    spicy_level    : 0,
    vegetarian     : 3,
    cooking_time   : [null, Validators.required],
    book_id        : null,
    section_id     : null
  });

  CONST_VEGETARIAN : any = {
    3:'Other',
    2:'Vegetarian',
    1:'Vegan'
  }

  unSubscription$ = new Subject();

  constructor(private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private menuService: MenuService,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL,
    public dialog: MatDialog,) { }

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
    const idx = this.menuForm.get("vegetarian").value;
    return this.CONST_VEGETARIAN[idx];
  }

  get cookingTime() {
    return this.menuForm.get("cooking_time").value;
  }

  async ngOnInit() {
    this.menubooks = await this.menuService.getMyBooks();
    const sections = await this.menuService.getMySections();
    this.sections = sections.filter(sec => !!sec.is_active);
    // const accountName = await this.menuService.getAccountName();
    // const sub = this.searchTransactionsForwardGQL.subscribe({
    //   "query": `receiver:${this.scatterService.code} auth:${accountName} status:executed  db.table:sec/${this.scatterService.code}`,
    // }).pipe(takeUntil(this.unSubscription$));
    // sub.subscribe((next) => {
    //   console.log(next, 'update ?');
    // });
    this.isReady = true;
  }

  setInitialDetails() {

  }

  async onSubmit() {
    
    try{
      
      const resp = await this.menuService.createItem(
        this.menuForm.get('itemName').value, 
        this.menuForm.get('description').value, 
        this.menuForm.get('photo').value || 'random string', 
        this.menuForm.get('spicy_level').value,
        this.menuForm.get('vegetarian').value,
        this.menuForm.get('cooking_time').value,
        '');

      const resp2 = await this.menuService.addToSection(this.menuForm.get('book_id').value, this.menuForm.get('section_id').value, 0, 0);
      this.openSnackBar('Created new item',"");
      this.formSubmitted = true;

    }catch(e){
      this.openSnackBar('ERROR creating menu ' +  e, "");
    }
    
    
  }

  deletemenu() {
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }

  onChanegMenuBook(e){
    const bookId = e.value;
    const secs = this.menubooks.filter(book => book.book_id === bookId)[0].sections;
    this.selectedSections = this.sections.filter(sec=> secs.includes(sec.section_id));
  }

  ngOnDestroy(){
    this.unSubscription$.next();
    this.unSubscription$.complete();
  }
}
