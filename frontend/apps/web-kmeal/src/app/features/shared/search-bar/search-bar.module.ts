import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { SearchBarService } from './search-bar.service';
import { CuisineMenuComponent } from './cuisine.component';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [CommonModule],
  declarations: [SearchBarComponent,CuisineMenuComponent],
  providers: [SearchBarService],
  exports:[SearchBarComponent,CuisineMenuComponent]
})
export class SearchBarModule {}