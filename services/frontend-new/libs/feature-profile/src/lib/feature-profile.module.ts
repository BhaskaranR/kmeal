import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AccountService } from './services/account.service';
import { ScatterModule } from '@kmeal-nx/scatter';
import { ProfileClientComponent } from './profile-clientApp/profile-client.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeatureCoreModule } from '@kmeal-nx/feature-core';

@NgModule({
  imports: [CommonModule,FlexLayoutModule, ScatterModule, FeatureCoreModule],
  declarations: [ProfileComponent, ProfileClientComponent],
  exports:[ProfileComponent, ProfileClientComponent],
  providers:[AccountService]
})
export class FeatureProfileModule {}
