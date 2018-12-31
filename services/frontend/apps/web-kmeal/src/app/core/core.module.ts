import { NgModule } from '@angular/core';

// xplat
import { FooCoreModule } from '@kmeal-frontend/web';
import { DataService } from './data.service';
import { CartService } from './shopping-cart.service';

@NgModule({
  imports: [FooCoreModule],
  providers:[DataService, CartService]
})
export class CoreModule {}
