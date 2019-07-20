import { Component, OnInit , Inject, OnDestroy}       from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar }  from "@angular/material";
import { MenuService }             from "../services/menu.service";
import { Book }                    from "../model/books";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SearchTransactionsForwardGQL } from "../generated/graphql";
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { UalService } from "ual-ngx-material-renderer";

interface DeleteDialog {
  name:string,
  id:string,
}

@Component({
  selector: "kmeal-nx-newgroup",
  templateUrl: "./newgroup.component.html",
  styleUrls: ["./newgroup.component.scss"]
})
export class NewgroupComponent implements OnInit, OnDestroy {

  constructor(
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL,
    public  dialog: MatDialog,
    private menuService: MenuService,
    public  snackBar: MatSnackBar,
    private fb: FormBuilder) {}

  unSubscription$ = new Subject();

  menuBookForm = this.fb.group({
    menubook: [null, Validators.required]
  });

  menubooks: Book[];
  isReady = false;

  async ngOnInit() {
    const accountName = await this.menuService.getAccountName();

    const sub = this.searchTransactionsForwardGQL.subscribe({
      "query": `receiver:kmealowner12 auth:${accountName} status:executed  db.table:sec/kmealowner12`,
    })
    .pipe(takeUntil(this.unSubscription$))
    .subscribe(this.updateHandler.bind(this));

    this.menubooks = await this.menuService.getMyBooks();
    this.isReady = true;
  }

  private updateHandler(data){
    console.log('update ? ', data);
  }


  async onBookSubmit() {
    try {
     const resp = await this.menuService.createbook(this.menuBookForm.value.menubook);
     this.menubooks = await this.menuService.getMyBooks();
     this.menuBookForm.get('menubook').setValue(null);
     this.openSnackBar("Menu Book is created", "");
    }
    catch (e) {
      this.openSnackBar("Error creating menu book :" + e, "");
    }
  }


  async deleteMenuGroup(id, name) {
    const dialogRef = this.dialog.open(DeleteBookDialog, {
      width: '250px',
      data: {name: name, id:id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.callContactToDeleteBook(id);
    });
    
  }

  async callContactToDeleteBook(id){
    const book = this.menubooks.find(b => b.book_id == id);

    if (book.sections.length > 0){
      this.openSnackBar('Failed to delete this menu book because it has sections in it','');
      return;
    }

    try {
      const resp = await this.menuService.deleteBook(id);
      this.menubooks = this.menubooks.filter(book => book.book_id !== id);
      this.menuBookForm.markAsPristine();
      this.menuBookForm.markAsUntouched();
      this.menuBookForm.reset();
      this.openSnackBar('Deleted','');
    }
    catch(e){
      this.openSnackBar('Error deleteing book '+e,'');
    }
  }


  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

  ngOnDestroy(){
    this.unSubscription$.next();
    this.unSubscription$.complete();
  }
}


@Component({
  selector: 'delet-book-dialog',
  template: `<h4 mat-dialog-title>Warning</h4>
  <div mat-dialog-content>
    <p>Are you sure to delete {{data.name}}?</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onYes()">Yes</button>
    <button mat-button (click)="onNo()" cdkFocusInitial>No</button>
  </div>`,
})
export class DeleteBookDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteBookDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteDialog) {}

  onYes(): void {
    this.dialogRef.close(true);
  }

  onNo():void {
    this.dialogRef.close(false);
  }

}
