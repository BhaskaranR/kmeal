import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AccountService } from './services/account.service';
import { ScatterModule, ScatterService } from '@kmeal-nx/scatter';
import { ProfileClientComponent } from './profile-clientApp/profile-client.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeatureCoreModule } from '@kmeal-nx/feature-core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileCreditCardComponent } from './profile-clientApp/profile-credit-card.component';
import { CreditCardService } from './services/credit-card.servies';
import { ProfileDetailCompoonent } from './profile-clientApp/profile-detail.component';

@NgModule({
  imports: [CommonModule,FlexLayoutModule, ScatterModule, FeatureCoreModule, ReactiveFormsModule],
  declarations: [ProfileComponent, ProfileClientComponent, ProfileCreditCardComponent, ProfileDetailCompoonent],
  exports:[ProfileComponent, ProfileClientComponent, ProfileCreditCardComponent],
  providers:[AccountService, CreditCardService, ScatterService]
})
export class FeatureProfileModule {}
