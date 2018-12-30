import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { NavBarComponent } from './nav.component';
import { FooterComponent } from './footer.component';
import { SearchBarComponent } from './search-bar.component';


@NgModule({
  imports: [SharedModule],
  declarations: [NavBarComponent,FooterComponent,SearchBarComponent],
  providers: [],
  entryComponents:[],
  exports:[NavBarComponent,FooterComponent]
})
export class NavBarModule {}