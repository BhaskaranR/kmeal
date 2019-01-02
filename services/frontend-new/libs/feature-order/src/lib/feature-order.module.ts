import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartComponent, OrderhistoryComponent]
})
export class FeatureOrderModule {}
