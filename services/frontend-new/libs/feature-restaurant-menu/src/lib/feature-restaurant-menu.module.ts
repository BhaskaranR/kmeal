import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewmenuComponent } from './newmenu/newmenu.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatGridListModule, MatMenuModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewgroupComponent } from './newgroup/newgroup.component';
import { HomeComponent } from './home/home.component';



export const restaurantMenuRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'newmenu', component: NewmenuComponent},
  {path: 'newgroup', component: NewgroupComponent}
]

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule, 
    MatGridListModule, MatMenuModule, MatIconModule, LayoutModule, FlexLayoutModule,
    RouterModule.forChild(restaurantMenuRoutes)],
  declarations: [ NewmenuComponent, HomeComponent, NewgroupComponent]
})
export class FeatureRestaurantMenuModule {}
