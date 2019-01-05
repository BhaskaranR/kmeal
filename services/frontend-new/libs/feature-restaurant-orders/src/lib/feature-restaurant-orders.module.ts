
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderBlotterComponent } from './order-blotter/order-blotter.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: OrderBlotterComponent} 
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [OrderBlotterComponent]
})
export class FeatureRestaurantOrdersModule { }
