import { Component ,ViewChild, ElementRef,Inject} from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';


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
            width:'450px',
            data:{name:'Shaun'}
        })
    }
}