import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { SearchBarService } from './search-bar.service';
import { CuisineMenuComponent } from './cuisine.component';
import { SharedModule } from '../shared.module';



@NgModule({
  imports: [SharedModule],
  declarations: [SearchBarComponent,CuisineMenuComponent],
  providers: [SearchBarService],
  entryComponents:[CuisineMenuComponent],
  exports:[SearchBarComponent,CuisineMenuComponent]
})
export class SearchBarModule {}