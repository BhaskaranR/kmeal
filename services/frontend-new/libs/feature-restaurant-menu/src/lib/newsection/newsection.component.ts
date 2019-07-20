import { Component, OnInit, OnDestroy } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar, MatDialog } from "@angular/material";
import { MenuService } from "../services/menu.service";
import { Book } from "../model/books";
import { Section } from "../model/section";
import { SearchTransactionsForwardGQL } from '../generated/graphql';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { DeleteBookDialog } from "../newgroup/newgroup.component";

@Component({
  selector: "kmeal-nx-newsection",
  templateUrl: "./newsection.component.html",
  styleUrls: ["./newsection.component.scss"]
})
export class NewsectionComponent implements OnInit, OnDestroy {

  unSubscription$ = new Subject();

  sectionsForm = this.fb.group({
    section: [null, Validators.required],
    menuBook: [null, Validators.required]
  });

  menubooks: Book[];
  sections: Section[];
  selectedSections: Section[];
  selectedMenuBook: Book;
  isReady = false;

  constructor(
    public dialog: MatDialog,
    private menuService: MenuService,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  async ngOnInit() {
    const accountName = await this.menuService.getAccountName();

    this.menubooks = await this.menuService.getMyBooks();
    this.sections = await this.menuService.getMySections();
    this.selectedSections = this.sections;
    
    const sub = this.searchTransactionsForwardGQL
    .subscribe({
       "query": `receiver:kmealowner12 auth:${accountName} status:executed  db.table:sec/kmealowner12`,
    })
    .pipe(takeUntil(this.unSubscription$))
    .subscribe(this.updateHandler.bind(this));

    this.isReady = true;
  }

  private updateHandler(update){
    console.log('update ?! ', update);
  }

  async dropSections(evt: CdkDragDrop<Section[]>) {
    
  }

  async onSectionsSubmit() {
    try {
      const resp = await this.menuService.addSection(this.sectionsForm.get('menuBook').value, this.sectionsForm.get('section').value);
      const newSec = new Section();
      newSec.section_name = this.sectionsForm.get('section').value;
      newSec.section_id   = this.sections[this.sections.length-1].section_id + 1;
      newSec.is_active    = 1;
      this.selectedSections.push(newSec);
      this.sections.push(newSec);
      this.selectedMenuBook.sections.push(newSec.section_id);
      this.sectionsForm.get('menubook').setValue(null);
      this.sectionsForm.get('section').setValue(null);
      
    }
    catch (e) {
      this.openSnackBar(e, '');
    }
  }

  async onBookChange(evt) {
    const book = this.menubooks.find(b => b.book_id == evt.value);
    this.selectedSections = this.sections.filter(sec => book.sections.includes(sec.section_id)) as any;
  }


  async deleteMenuSection(name,id) {
    const dialogRef = this.dialog.open(DeleteBookDialog, {
      width: '250px',
      data: {name: name, id:id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.callContactToDeleteSection(id);
    });
  }

  async callContactToDeleteSection(id){
    const sec = this.sections.find(s => s.section_id === id);
    if(sec.items.length > 0){
      this.openSnackBar('Failed to delete this section as it has items in it','');
      return ;
    }

    let book;
    if (!this.selectedMenuBook){
      book = this.menubooks.find(b => b.sections.includes(id));
    }

    try {
      const resp = await this.menuService.deleteSection(this.selectedMenuBook? this.selectedMenuBook.book_id : book.book_id, id);
      this.sections = this.sections.filter(sec => sec.section_id !== id); 
      this.selectedSections = this.sections.filter(sec => this.selectedMenuBook.sections.includes(sec.section_id) && sec.section_id !== id );
      this.sectionsForm.get('section').setValue(null);
      this.sectionsForm.get('menubook').setValue(null);
      this.openSnackBar('Deleted',"");
    }
    catch (e) {
      this.openSnackBar(e, '');
    }
  }


  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this.unSubscription$.next();
    this.unSubscription$.complete();
  }
}
