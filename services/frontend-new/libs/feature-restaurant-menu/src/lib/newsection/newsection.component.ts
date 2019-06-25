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
import { ScatterService } from "@kmeal-nx/scatter";
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
    private scatterService: ScatterService,
    public dialog: MatDialog,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL,
    private menuService: MenuService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  async ngOnInit() {
    this.menubooks = await this.menuService.getMyBooks();
    const sections = await this.menuService.getMySections();
    this.sections = sections.filter(sec => !!sec.is_active);
    this.selectedSections = this.sections;
    this.isReady = true;
    const accountName = await this.menuService.getAccountName();
    const sub = this.searchTransactionsForwardGQL.subscribe({
      "query": `receiver:${this.scatterService.code} auth:${accountName} status:executed  db.table:sec/${this.scatterService.code}`,
    }).pipe(takeUntil(this.unSubscription$));
    sub.subscribe((next) => {
      console.log(next, 'update ?');
    })
  }

  async dropSections(evt: CdkDragDrop<Section[]>) {
    const prev = evt.previousIndex;

    let prevItem = this.selectedSections[prev];

    try{
      const resp = await this.menuService.setSecOrder(this.selectedMenuBook.book_id, prevItem.section_id, evt.currentIndex);
      const sections = await this.menuService.getMySections();
      this.sections = sections.filter(sec => !!sec.is_active);
      this.openSnackBar('Order Changed',"");
    }
    catch(e){
      this.openSnackBar('Error : ' + e , '');
    }
  }

  async onSectionsSubmit() {
    try {
      const resp = await this.menuService.addSection(this.selectedMenuBook.book_id, this.sectionsForm.get('section').value);
      console.log(this.menubooks, this.sections, this.selectedSections);
       let newSec = new Section();
       newSec.section_name = this.sectionsForm.get('section').value;
       newSec.section_id   = this.sections[this.sections.length-1].section_id + 1;
       newSec.is_active    = 1;
      this.selectedSections.push(newSec);
      this.sections.push(newSec);
      this.selectedMenuBook.sections.push(newSec.section_id);
      this.sectionsForm.get('section').setValue(null);
      
    }
    catch (e) {
      this.openSnackBar(e, '');
    }
  }

  async onBookChange(evt) {
    const secs = evt.value.sections;
    this.selectedSections = this.sections.filter(sec => secs.includes(sec.section_id)) as any;
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
    try {
      const resp = await this.menuService.deleteSection(this.selectedMenuBook.book_id,id);
      this.sections = this.sections.filter(sec => sec.section_id !== id); 
      this.selectedSections = this.sections.filter(sec => this.selectedMenuBook.sections.includes(sec.section_id) && sec.section_id !== id );
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
