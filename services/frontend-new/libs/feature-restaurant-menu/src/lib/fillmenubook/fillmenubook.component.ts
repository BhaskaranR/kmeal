import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar, MatSelectChange, MatAutocompleteSelectedEvent } from "@angular/material";
import { MenuService } from "../services/menu.service";
import { Book } from "../model/books";
import { Section } from "../model/section";

@Component({
  selector: 'kmeal-nx-fillmenubook',
  templateUrl: './fillmenubook.component.html',
  styleUrls: ['./fillmenubook.component.scss']
})
export class FillmenubookComponent implements OnInit {
  selectedMenuBook: Book;
  selectedSection: Section;
  sectionItems: any[];

  sectionsForm = this.fb.group({
    section_id: [null, Validators.required],
    book_id: [null, Validators.required]
  });

  menubooks: Book[] = [];
  items: any[] = [];
  selectedItemId: number;

  constructor(public menuService: MenuService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  async ngOnInit() {
    this.menubooks = await this.menuService.getMyBooks();
  }

  dropSections(event: CdkDragDrop<Section[]>) {
    
  }

  sectionsSelectionChanged(ev: MatSelectChange) {
    
  }

  deleteItemFromSection(ev) {
    
  }



  newItemSelected(et: MatAutocompleteSelectedEvent) {
    const indx = this.items.findIndex(i => i.item_name == et.option.value) ;
    this.selectedItemId  = this.items[indx].item_id;
  }

  onSubmit() {
    if (!this.sectionsForm.valid) {
      this.openSnackBar("Enter relevant details", "");
    }
    
  }

  submitItems(objects, optype) {
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
