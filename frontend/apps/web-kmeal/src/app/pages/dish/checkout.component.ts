import { Component, ElementRef, ViewChild,Inject } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: "ceckout-dialog",
    moduleId: module.id,
    templateUrl: "./checkout.component.html",
})
export class CheckoutDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<CheckoutDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }

}