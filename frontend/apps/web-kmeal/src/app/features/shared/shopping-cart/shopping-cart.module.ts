import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ShoppingCartComponent } from './shopping-cart.component';



@NgModule({
  imports: [SharedModule],
  declarations: [ShoppingCartComponent],
  providers: [],
  entryComponents:[ShoppingCartComponent],
  exports:[]
})
export class ShoppingCartModule {}