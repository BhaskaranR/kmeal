import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { Routes } from '@angular/router';


export const routing: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent}
];