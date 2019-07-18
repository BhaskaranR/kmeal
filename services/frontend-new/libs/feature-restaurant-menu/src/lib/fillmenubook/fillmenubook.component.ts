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
    section_id: [null, Validators.required],
    book_id: [null, Validators.required],
    item_id:[null, Validators.required]
  });

  menubooks         : Book[] ;
  sections          : Section[];
  selectedSections  : Section[];
  items             : Item[];
  selectedItems     : Item[];
  selectedItemId    : number;
  isReady           : boolean = true;
  selectedMenuBook  : Book;
  selectedSection   : Section;
  unSubscription$ = new Subject();

  constructor(public menuService: MenuService,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL,
    public  dialog: MatDialog,
    public snackBar: MatSnackBar,
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

  onSectionChange(ev: MatSelectChange) {
    this.selectedItems = this.items.filter( item => this.selectedSection.items.includes(item.item_id));
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

  private async callContactToDeleteItem(id){
    try{
      const resp = await this.menuService.removeFromSection(this.selectedSection.section_id, id);
      this.items = this.items.filter(i => i.item_id !== id);
      this.selectedItems = this.selectedItems.filter(i => i.item_id !== id);
      this.openSnackBar('Deleted','');
    }
    catch(e){
      this.openSnackBar('Failed to delete item', '');
    }
  }

  newItemSelected(et: MatAutocompleteSelectedEvent) {
    const indx = this.items.findIndex(i => i.item_name === et.option.value) ;
    this.selectedItemId  = this.items[indx].item_id;
  }

  async onSubmit() {
    
    try {
      const resp = await this.menuService.addToSection(this.selectedMenuBook.book_id, this.selectedSection.section_id, this.sectionsForm.get('item_id').value, 0);
      this.openSnackBar('added selected item to the section','');
    }
    catch(e){
      this.openSnackBar(e,'');
    }
    
  }

  submitItems(objects, optype) {
    
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  OnBookChange(evt){
    this.selectedSections = this.sections.filter( sec => this.selectedMenuBook.sections.includes(sec.section_id));

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
