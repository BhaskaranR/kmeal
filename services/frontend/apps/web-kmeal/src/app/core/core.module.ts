import { NgModule } from '@angular/core';

// xplat
import { FooCoreModule } from '@kmeal-frontend/web';
import { DataService } from './data.service';
import { CartService } from './shopping-cart.service';
import { UserProfileService } from './user-profile.service';

@NgModule({
  imports: [FooCoreModule],
  providers:[DataService, CartService, UserProfileService]
})
export class CoreModule {}
