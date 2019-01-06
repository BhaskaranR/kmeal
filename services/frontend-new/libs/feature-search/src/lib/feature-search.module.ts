import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route, Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";


export const featureSearchRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  imports: [CommonModule],
  declarations:[SearchComponent]
})
export class FeatureSearchModule {}
