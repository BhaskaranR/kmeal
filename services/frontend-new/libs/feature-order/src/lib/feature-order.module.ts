import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UiModule } from '@kmeal-nx/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderHistoryClientComponent } from './order-history-client/order-history.component';
import {MatTreeModule} from '@angular/material';
import { NgxStripeModule, StripeService } from 'ngx-stripe';
import { StripeComponent } from './payment/payment.component';

@NgModule({
  imports: [CommonModule, UiModule, ReactiveFormsModule, MatTreeModule,
    NgxStripeModule.forRoot('pk_test_hiOCFCFJ9kNryP5NjM5CEIvJ009VjtHoMw')],
  declarations: [CartComponent, OrderHistoryComponent, CheckoutComponent, OrderHistoryClientComponent, StripeComponent],
  entryComponents:[StripeComponent],
})
export class FeatureOrderModule {}
