import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { SearchBarService } from './search-bar.service';
import { SharedModule } from '../shared.module';



@NgModule({
  imports: [SharedModule],
  declarations: [SearchBarComponent],
  providers: [SearchBarService],
  entryComponents:[],
  exports:[SearchBarComponent,]
})
export class SearchBarModule {}