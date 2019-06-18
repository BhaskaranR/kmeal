import { Component, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { MenuService } from "../services/menu.service";
import { Book } from "../model/books";
import { Section } from "../model/section";

@Component({
  selector: "kmeal-nx-newmenu",
  templateUrl: "./newmenu.component.html",
  styleUrls: ["./newmenu.component.scss"]
})
export class NewmenuComponent {

  selectedMenuBook : Book;
  selectedSection  : Section;
  formSubmitted    : boolean= false;
  menubooks        : Book[] = [];
  sections         : Section[];
  selectedSections : Section[];

  menuForm = this.fb.group({
    itemName: [null, Validators.required],
    description: [null, Validators.required],
    photo: null,
    spicy_level: 0,
    vegetarian: 3,
    cooking_time: [null, Validators.required],
    book_id: null,
    section_id: null
  });

  CONST_VEGETARIAN : any = {
    3:'Other',
    2:'Vegetarian',
    1:'Vegan'
  }

  constructor(private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private menuService: MenuService) { }

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
    let idx = this.menuForm.get("vegetarian").value;
    return this.CONST_VEGETARIAN[idx];
  }

  get cookingTime() {
    return this.menuForm.get("cooking_time").value;
  }

  async ngOnInit() {
    this.menubooks = await this.menuService.getMyBooks();
    this.sections = await this.menuService.getMySections();
    this.sections = this.sections.filter(sec => !!sec.is_active);
  }

  setInitialDetails() {
    /*
    const mbs = this.menubooks.filter(mb => mb.book_id == this.menuDetails.menuBookId)
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
    */
  }

  async onSubmit() {
    if (!this.menuForm.valid) {
      return;
    }

    try{
      const resp = await this.menuService.createItem(
        this.menuForm.get('itemName').value, 
        this.menuForm.get('description').value, 
        this.menuForm.get('photo').value, 
        this.menuForm.get('spicy_level').value,
        this.menuForm.get('vegetarian').value,
        this.menuForm.get('cooking_time').value,
        '');
     console.log('created ', resp)
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
}
