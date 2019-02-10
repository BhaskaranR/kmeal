import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AccountService } from './services/account.service';
import { ScatterModule } from '@kmeal-nx/scatter';
import { Routes, RouterModule } from '@angular/router';
import { MenuSidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { SendComponent } from './send/send.component';
import { MatSidenavModule, MatListModule, MatCardModule, MatIconModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const profileRoutes: Routes = [
  {
    path: '', component: MenuSidenavComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'send', component: SendComponent },
    ]
  }
]


@NgModule({
  imports: [CommonModule, ScatterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
  MatSidenavModule,
  RouterModule.forChild(profileRoutes)],
  declarations: [MenuSidenavComponent, ProfileComponent, WalletComponent, HomeComponent, SendComponent],
  providers: [AccountService]
})
export class FeatureRestaurantProfileModule { }
