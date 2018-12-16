import { Component ,ViewChild, ElementRef,Inject} from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'shopping-cart',
    moduleId: module.id,
    template:'Shopping Cart Content' ,
  })
export class ShoppingCartComponent {
    constructor(
        public dialogRef: MatDialogRef<ShoppingCartComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
}

@Component({
  selector: 'nav-bar',
  moduleId: module.id,
  templateUrl:'./nav.component.html' ,
  styleUrls:['./nav.component.scss']
})
export class NavBarComponent  {
    dia:any;
    isLoggedIn=true;
    constructor(public dialog:MatDialog){}
    openCart(){
        this.dia = this.dialog.open(ShoppingCartComponent, {
            width:'300px',
            data:{name:'Shaun'}
        })
    }
}