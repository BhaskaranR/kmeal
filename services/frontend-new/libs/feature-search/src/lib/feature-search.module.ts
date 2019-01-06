import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { FeatureCoreModule } from "@kmeal-nx/feature-core";


export const featureSearchRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  imports: [CommonModule, FeatureCoreModule],
  declarations:[SearchComponent]
})
export class FeatureSearchModule {}
