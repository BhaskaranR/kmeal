import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { MenuService } from "../services/menu.service";
import { Book } from "../model/books";

@Component({
  selector: "kmeal-nx-newsection",
  templateUrl: "./newsection.component.html",
  styleUrls: ["./newsection.component.scss"]
})
export class NewsectionComponent {
  selectedMenuBook: Book;

  sectionsForm = this.fb.group({
    section: [null, Validators.required]
  });

  menubooks: Book[] = [];
  sections: any[];

  
  constructor(
    private menuService: MenuService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  async ngOnInit() {
    this.menubooks = await this.menuService.getMyBooks();
  }

  dropSections(event: CdkDragDrop<Book[]>) {
    console.log('changed order!');
  }

 async onSectionsSubmit() {
    if (!this.menubooks || this.menubooks.length == 0) {
      this.openSnackBar("Create a menu book", "");
      return;
    }
    if (!this.selectedMenuBook) {
      this.openSnackBar("Select a menu book from the list", "");
      return;
    }
    if (!this.sectionsForm.valid) {
      this.openSnackBar("Enter menu sections", "");
      return;
    }
    try{
      console.log(this.selectedMenuBook);
     const resp = await this.menuService.addSection(this.selectedMenuBook.book_id,this.sectionsForm.get('section').value);
     console.log('created section : ', resp); 
     this.sections = await this.menuService.getMySections(this.selectedMenuBook.book_id);
    }
    catch(e){
      this.openSnackBar(e,'');
    }
  }

  async onBookChange(evt){
    console.log(evt);
    this.sections = await this.menuService.getMySections(evt.value.book_id);
    console.log('sections ? ', this.sections);
  }


  async deleteMenuSection(ev) {
    try{
      console.log(ev);
      //const resp = await this.menuService.deleteSection(this.menuBookForm.get('menubook').value, ev);
    }
    catch(e) {
      this.openSnackBar(e,'');
    }
  }


  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
