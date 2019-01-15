import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EosioAccountComponent } from './eosio-account/eosio-account.component';
import { ScatterService } from './services/scatter.service';
import { EosioTokenMathService } from './services/eosio.token-math.service';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatSnackBarModule, MatMenuModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

const components = [EosioAccountComponent, LoginComponent];

export const scatterRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'account',
    data: {},
    component: EosioAccountComponent
  }
];

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule,
    MatCardModule, ReactiveFormsModule,
    MatSnackBarModule, MatMenuModule, MatIconModule, LayoutModule, FlexLayoutModule],
  declarations: components,
  exports: components,
  providers: [
    ScatterService,
    EosioTokenMathService
  ]
})
export class ScatterModule {}
