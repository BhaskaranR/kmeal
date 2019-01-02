import { Component ,ChangeDetectionStrategy, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import {  MatDialogRef } from '@angular/material';


@Component({
    selector: 'dish-card-popup',
    moduleId: module.id,
    templateUrl:'./dish-detail-popup.component.html' ,
    styleUrls:['./dish.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishDetailPopupComponent  {
    constructor(public dialogRef: MatDialogRef<DishDetailPopupComponent>) { }
}