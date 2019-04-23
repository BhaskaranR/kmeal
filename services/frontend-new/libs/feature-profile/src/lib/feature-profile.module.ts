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
import { ProfileTokenTransferComponent } from './profile-clientApp/profile-token-transfer.component';
import { NgXCreditCardsModule } from 'ngx-credit-cards';

@NgModule({
  imports: [CommonModule,FlexLayoutModule, ScatterModule, FeatureCoreModule, ReactiveFormsModule,NgXCreditCardsModule],
  declarations: [ProfileComponent, ProfileClientComponent, ProfileCreditCardComponent, ProfileDetailCompoonent, ProfileTokenTransferComponent],
  exports:[ProfileComponent, ProfileClientComponent, ProfileCreditCardComponent, ProfileTokenTransferComponent],
  providers:[AccountService, CreditCardService, ScatterService]
})
export class FeatureProfileModule {}
