import { NgModule } from '@angular/core';
import { FeatureCoreModule } from '@kmeal-nx/feature-core';
import { NavBarComponent } from './nav-bar/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  imports: [FeatureCoreModule],
  declarations: [NavBarComponent,FooterComponent,SearchBarComponent],
  providers: [],
  entryComponents:[],
  exports:[NavBarComponent,FooterComponent,SearchBarComponent]
})
export class FeatureNavigationBarModule {}