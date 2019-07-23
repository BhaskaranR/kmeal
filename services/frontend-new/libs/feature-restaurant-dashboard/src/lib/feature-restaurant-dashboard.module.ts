import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: DashboardComponent, canActivate:[] },
      { path: 'welcome', pathMatch:'full', component:WelcomeComponent}
    ]),

    
  ],
  declarations: [DashboardComponent, WelcomeComponent]
})
export class FeatureRestaurantDashboardModule {}
