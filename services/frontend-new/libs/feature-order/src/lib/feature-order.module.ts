import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FeatureCoreModule } from '@kmeal-nx/feature-core';
import { UiModule } from '@kmeal-nx/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderHistoryClientComponent } from './order-history-client/order-history.component';
import {MatTreeModule} from '@angular/material';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  imports: [CommonModule, FeatureCoreModule, UiModule, ReactiveFormsModule, MatTreeModule,NgxStripeModule],
  declarations: [CartComponent, OrderHistoryComponent, CheckoutComponent, OrderHistoryClientComponent]
})
export class FeatureOrderModule {}
