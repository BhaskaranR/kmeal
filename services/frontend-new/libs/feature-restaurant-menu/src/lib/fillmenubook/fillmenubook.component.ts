import { Component, OnInit, Inject } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar, MatSelectChange, MatAutocompleteSelectedEvent, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { MenuService } from "../services/menu.service";
import { Book } from "../model/books";
import { Section } from "../model/section";
import { Item } from "../model/item";
import { takeUntil } from "rxjs/operators";
import { SearchTransactionsForwardGQL } from "../generated/graphql";
import { Subject } from "rxjs";

@Component({
  selector: 'kmeal-nx-fillmenubook',
  templateUrl: './fillmenubook.component.html',
  styleUrls: ['./fillmenubook.component.scss']
})
export class FillmenubookComponent implements OnInit {
  

  sectionsForm = this.fb.group({
    section: [null, Validators.required],
    book: [null, Validators.required],
    item:[null, Validators.required]
  });

  menubooks         : Book[];
  selectedMenuBook  : Book;

  sections          : Section[];
  selectedSections  : Section[];
  selectedSection   : Section;

  items             : Item[];
  selectedItem      : Item;
  selectedItems     : Item[];

  isReady           : boolean = true;

  unSubscription$ = new Subject();

  constructor(
    public  menuService: MenuService,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL,
    public  dialog: MatDialog,
    public  snackBar: MatSnackBar,
    private fb: FormBuilder) {}

  async ngOnInit() {
    const accountName = await this.menuService.getAccountName();

    const sub = this.searchTransactionsForwardGQL.subscribe({
      "query": `receiver:kmealowner12 auth:${accountName} status:executed  db.table:sec/kmealowner12`,
    })
    .pipe(takeUntil(this.unSubscription$))
    .subscribe(this.updateHandler.bind(this));
    
    this.menubooks = await this.menuService.getMyBooks()
    this.sections = await this.menuService.getMySections();
    this.items  = await this.menuService.getMyItems();
    this.selectedSections = this.sections;
    this.isReady = true;
  }

  private updateHandler(update) {
    console.log('update ? ', update);
  }

  dropSections(event: CdkDragDrop<Section[]>) {
    
  }

  OnBookChange(evt: MatSelectChange){
    this.selectedSections = this.sections.filter( sec => this.selectedMenuBook.sections.includes(sec.section_id));
  }

  onSectionChange(evt: MatSelectChange) {
    this.selectedItems = this.items.filter(i => this.selectedSection.items.includes(i.item_id))
  }

  onRemoveItemFromSection(ev) {
    const dialogRef = this.dialog.open(DeleteItemDialog, {
      width: '250px',
      data: {name: ev.item_name, id:ev.item_id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.callContactToDeleteItem(ev.item_id);
    });
  }

  private async callContactToDeleteItem(item){
    try{
      const resp = await this.menuService.removeFromSection(this.selectedSection.section_id, item.item_id);
      this.selectedItems = this.selectedItems.filter( i => i.item_id !== item.item_id);
      this.openSnackBar('Deleted','');
    } catch(e){
      this.openSnackBar('Failed to delete item', '');
    }
  }


  async onSubmit() {
    try {
      const resp = await this.menuService.addToSection(this.selectedMenuBook.book_id, this.selectedSection.section_id, this.selectedItem.item_id, 0);
      this.selectedItems.push(this.selectedItem);
      this.sectionsForm.reset();
      this.sectionsForm.markAsUntouched();
      this.openSnackBar('added selected item to the section','');
    } catch(e){
      this.openSnackBar(e,'');
    } 
  }


  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}



@Component({
  selector: 'delet-item-dialog',
  template: `<h4 mat-dialog-title>Warning</h4>
  <div mat-dialog-content>
    <p>Are you sure to delete {{data.name}}?</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onYes()">Yes</button>
    <button mat-button (click)="onNo()" cdkFocusInitial>No</button>
  </div>`,
})
export class DeleteItemDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteItemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onYes(): void {
    this.dialogRef.close(true);
  }

  onNo():void {
    this.dialogRef.close(false);
  }

}
