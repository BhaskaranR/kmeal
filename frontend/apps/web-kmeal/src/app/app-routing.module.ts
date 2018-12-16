import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
}, {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule' , 
},{
        path: 'profile', 
        loadChildren: './pages/profile/profile.module#ProfileModule', 
},{
        path: 'restaurant', 
        loadChildren: './pages/restaurant/res.module#ResModule', 
},{
        path: 'dish', 
        loadChildren: './pages/dish/dish.module#DishModule', 
},{
        path: '**', 
        loadChildren: './pages/profile/profile.module#ProfileModule', 
},
];

export const routing = RouterModule.forRoot(AppRoutes, {enableTracing:false});