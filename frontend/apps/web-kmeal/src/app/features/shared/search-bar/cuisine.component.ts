import { Component ,Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'cuisine-menu',
  moduleId: module.id,
  templateUrl:'./cuisine.component.html' ,
  styleUrls:['./cuisine.component.scss']
})
export class CuisineMenuComponent  {
    categories:string[] = ['Indian', 'Chinese','Korean','American','Brunch','Pizza','Breakfast','Jpanese','Burger','Mexican','South American','Sea Food','Caribbean']
    constructor(
        public dialogRef: MatDialogRef<CuisineMenuComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any){}


    closeDialog(e){
        this.dialogRef.close('cuisine');
    }

    selectCuisine(e,name){
        console.log(name);
        this.closeDialog(e);
    }
}