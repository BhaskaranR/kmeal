import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { NavBarComponent } from './nav.component';
import { FooterComponent } from './footer.component';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';



@NgModule({
  imports: [SharedModule, SearchBarModule, ShoppingCartModule],
  declarations: [NavBarComponent,FooterComponent,],
  providers: [],
  entryComponents:[],
  exports:[NavBarComponent,FooterComponent]
})
export class NavBarModule {}