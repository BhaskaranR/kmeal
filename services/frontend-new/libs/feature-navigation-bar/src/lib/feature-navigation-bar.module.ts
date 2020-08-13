import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatIconModule, MatMenuModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { UiModule } from '@kmeal-nx/ui';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [MatIconModule, RouterModule,MatBadgeModule, UiModule, MatMenuModule, FormsModule, MatProgressSpinnerModule],
  declarations: [NavBarComponent,FooterComponent,SearchBarComponent],
  providers: [],
  entryComponents:[],
  exports:[NavBarComponent,FooterComponent,SearchBarComponent]
})
export class FeatureNavigationBarModule {}