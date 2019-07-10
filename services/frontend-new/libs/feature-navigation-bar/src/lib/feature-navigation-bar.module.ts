import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { UiModule } from '@kmeal-nx/ui';


@NgModule({
  imports: [MatIconModule, RouterModule,MatBadgeModule, UiModule],
  declarations: [NavBarComponent,FooterComponent,SearchBarComponent],
  providers: [],
  entryComponents:[],
  exports:[NavBarComponent,FooterComponent,SearchBarComponent]
})
export class FeatureNavigationBarModule {}