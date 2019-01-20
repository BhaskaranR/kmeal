import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewmenuComponent } from './newmenu/newmenu.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatGridListModule, MatMenuModule, MatIconModule, MatSnackBarModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewgroupComponent } from './newgroup/newgroup.component';
import { HomeComponent } from './home/home.component';
import { NewlistingComponent } from './newlisting/newlisting.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkSelectionModule } from '@kmeal-nx/ui';



export const restaurantMenuRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newmenu', component: NewmenuComponent },
  { path: 'newgroup', component: NewgroupComponent },
  { path: 'newlisting', component: NewlistingComponent }
]

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule,    
    MatCheckboxModule,
    MatCardModule, ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule, MatMenuModule, MatIconModule, LayoutModule, FlexLayoutModule,
    CdkSelectionModule,
    DragDropModule,
    RouterModule.forChild(restaurantMenuRoutes)],
  declarations: [NewmenuComponent, HomeComponent, NewgroupComponent, NewlistingComponent]
})
export class FeatureRestaurantMenuModule { }
