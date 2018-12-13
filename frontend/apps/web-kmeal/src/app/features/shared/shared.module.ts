import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTabsModule, MatDialogModule,MatListModule, MatIconModule, MatProgressBarModule, MatSidenavModule, MatIconRegistry ,MatButtonModule} from '@angular/material';

//import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [],
  providers: [MatIconRegistry]
})
export class SharedModule {

}
