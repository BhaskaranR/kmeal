import { NgModule } from '@angular/core';
import { FeatureCoreModule } from '@kmeal-nx/feature-core';
import { NavBarComponent } from './nav-bar/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ScatterModule } from '@kmeal-nx/scatter';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  imports: [FeatureCoreModule, MatIconModule, RouterModule, ScatterModule,MatBadgeModule],
  declarations: [NavBarComponent,FooterComponent,SearchBarComponent],
  providers: [],
  entryComponents:[],
  exports:[NavBarComponent,FooterComponent,SearchBarComponent]
})
export class FeatureNavigationBarModule {}