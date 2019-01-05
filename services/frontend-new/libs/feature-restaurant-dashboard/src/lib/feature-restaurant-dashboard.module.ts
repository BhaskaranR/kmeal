import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: "", pathMatch: "full", component: DashboardComponent }]),

    MatGridListModule,

    MatCardModule,

    MatMenuModule,

    MatIconModule,

    MatButtonModule,

    LayoutModule
  ],
  declarations: [DashboardComponent]
})
export class FeatureRestaurantDashboardModule {}
