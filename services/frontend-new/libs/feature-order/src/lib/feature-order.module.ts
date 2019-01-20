import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  declarations: [CartComponent,  OrderHistoryComponent]
})
export class FeatureOrderModule {}
