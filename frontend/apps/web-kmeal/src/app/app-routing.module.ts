import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
}, {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule' , 
}, {
        path: 'login', 
        loadChildren: './pages/login/login.module#LoginModule', 
}, {
        path: 'profile', 
        loadChildren: './pages/profile/profile.module#ProfileModule', 
},{
        path: '**', 
        loadChildren: './pages/profile/profile.module#ProfileModule', 
},
];

export const routing = RouterModule.forRoot(AppRoutes, {enableTracing:true});