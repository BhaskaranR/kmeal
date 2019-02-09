import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AccountService } from './services/account.service';
import { ScatterModule } from '@kmeal-nx/scatter';

@NgModule({
  imports: [CommonModule, ScatterModule],
  declarations: [ProfileComponent],
  providers:[AccountService]
})
export class FeatureRestaurantProfileModule {}
