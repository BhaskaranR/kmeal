import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { NavBarComponent ,ShoppingCartComponent} from './nav.component';
import { FooterComponent } from './footer.component';



@NgModule({
  imports: [SharedModule, SearchBarModule],
  declarations: [NavBarComponent,FooterComponent,ShoppingCartComponent],
  providers: [],
  entryComponents:[ShoppingCartComponent],
  exports:[NavBarComponent,FooterComponent,ShoppingCartComponent]
})
export class NavBarModule {}