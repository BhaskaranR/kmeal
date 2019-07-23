import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderBlotterComponent } from './order-blotter/order-blotter.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatTabsModule } from '@angular/material';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { OrderService } from './services/order.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: OrderBlotterComponent} 
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule
  ],
  declarations: [OrderBlotterComponent, ActiveOrdersComponent],
  providers:[OrderService]
})
export class FeatureRestaurantOrdersModule { }
