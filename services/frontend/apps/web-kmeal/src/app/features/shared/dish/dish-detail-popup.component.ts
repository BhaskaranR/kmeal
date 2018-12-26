import { Component ,ChangeDetectionStrategy, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import {  MatDialogRef } from '@angular/material';



@Component({
    selector: 'dish-card-popup',
    moduleId: module.id,
    templateUrl:'./dish-detail-popup.component.html' ,
    styleUrls:['./dish.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishDetailPopupComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DishDetailPopupComponent>) { }

    ngOnInit(){
        console.log(this.dialogRef);
    }

    orderNow() {
        this.dialogRef.close('order');
    }

    closeDialog(){
        this.dialogRef.close('close');
    }
}