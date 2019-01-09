import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EosioAccountComponent } from './eosio-account/eosio-account.component';
import { ScatterService } from './services/scatter.service';
import { EosioTokenMathService } from './services/eosio.token-math.service';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

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
  imports: [CommonModule],
  declarations: components,
  exports: components,
  providers: [
    ScatterService,
    EosioTokenMathService
  ]
})
export class ScatterModule {}
