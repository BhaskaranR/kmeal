import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AccountService } from './services/account.service';
import { ScatterModule } from '@kmeal-nx/scatter';
import { ProfileClientComponent } from './profile-client/profile-client.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeatureCoreModule } from '@kmeal-nx/feature-core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileCreditCardComponent } from './profile-client/profile-credit-card.component';
import { CreditCardService } from './services/credit-card.servies';
import { ProfileDetailCompoonent } from './profile-client/profile-detail.component';
import { ProfileTokenTransferComponent } from './profile-client/profile-token-transfer.component';
import { NgXCreditCardsModule } from 'ngx-credit-cards';

@NgModule({
  imports: [CommonModule,FlexLayoutModule, ScatterModule, FeatureCoreModule, ReactiveFormsModule,NgXCreditCardsModule],
  declarations: [ProfileComponent, ProfileClientComponent, ProfileCreditCardComponent, ProfileDetailCompoonent, ProfileTokenTransferComponent],
  exports:[ProfileComponent, ProfileClientComponent, ProfileCreditCardComponent, ProfileTokenTransferComponent],
  providers:[AccountService, CreditCardService]
})
export class FeatureProfileModule {}
