import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { NavBarComponent } from './nav.component';



@NgModule({
  imports: [SharedModule, SearchBarModule],
  declarations: [NavBarComponent],
  providers: [],
  entryComponents:[],
  exports:[NavBarComponent,]
})
export class NavBarModule {}