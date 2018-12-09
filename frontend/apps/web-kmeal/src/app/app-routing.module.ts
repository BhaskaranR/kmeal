import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
}, {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule   ' , 
        canActivate: [],
}, {
        path: 'login', 
        loadChildren: './pages/login/login.module#LoginModule', 
        canActivate: []
}];

export const routing = RouterModule.forRoot(AppRoutes, {enableTracing:true});