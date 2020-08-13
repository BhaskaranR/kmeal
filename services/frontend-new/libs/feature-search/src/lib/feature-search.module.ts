import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { UiModule } from "@kmeal-nx/ui";
import {MatMenuModule} from '@angular/material/menu';
import { MatProgressSpinnerModule, MatDividerModule, MatIconModule, MatCardModule, MatGridListModule } from "@angular/material";

export const featureSearchRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, MatMenuModule, MatDividerModule, MatIconModule, MatCardModule, MatGridListModule,
     UiModule],
  declarations:[SearchComponent]
})
export class FeatureSearchModule {}
