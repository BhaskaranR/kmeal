import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FeatureCoreModule } from '@kmeal-nx/feature-core';


@NgModule({
  imports: [CommonModule, FeatureCoreModule],
  declarations: [CartComponent, OrderHistoryComponent, CheckoutComponent]
})
export class FeatureOrderModule {}
