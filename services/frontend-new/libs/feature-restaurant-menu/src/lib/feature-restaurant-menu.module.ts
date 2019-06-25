import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule,
  MatCardModule, MatGridListModule, MatMenuModule, MatIconModule, MatSnackBarModule,
  MatListModule, MatCheckboxModule, MatSliderModule, MatSidenavModule, MatToolbarModule,
  MatStepperModule, MatButtonToggleModule, MatDatepickerModule, MatSlideToggleModule,
  MatNativeDateModule, MatAutocompleteModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewgroupComponent, DeleteBookDialog } from './newgroup/newgroup.component';
import { HomeComponent } from './home/home.component';
import { NewlistingComponent } from './newlisting/newlisting.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkSelectionModule } from '@kmeal-nx/ui';
import { NewmenuComponent } from './newmenu/newmenu.component';
import { FillmenubookComponent } from './fillmenubook/fillmenubook.component';
import { MenuSidenavComponent } from './sidenav/sidenav.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NewsectionComponent } from './newsection/newsection.component';
import { MenuService } from './services/menu.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


export const restaurantMenuRoutes: Routes = [
  {
    path: '', component: MenuSidenavComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'newmenu', component: NewmenuComponent },
      { path: 'newsection', component: NewsectionComponent },
      { path: 'newgroup', component: NewgroupComponent },
      { path: 'newlisting', component: NewlistingComponent },
      { path: 'fillmenubook', component: FillmenubookComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule,
    //MatChipsModule,
    MatAutocompleteModule,
    NgxMaterialTimepickerModule.forRoot(),
    MatProgressSpinnerModule,
    MatSliderModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule, ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule, MatMenuModule, MatIconModule, LayoutModule, FlexLayoutModule,
    CdkSelectionModule,
    DragDropModule,
    RouterModule.forChild(restaurantMenuRoutes)],
  declarations: [MenuSidenavComponent, NewmenuComponent, HomeComponent, NewgroupComponent, NewlistingComponent, FillmenubookComponent, NewsectionComponent, DeleteBookDialog],
  entryComponents:[DeleteBookDialog],
  providers: [MenuService]
})
export class FeatureRestaurantMenuModule { }
