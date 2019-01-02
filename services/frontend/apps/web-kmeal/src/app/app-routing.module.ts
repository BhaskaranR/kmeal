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
        path: 'restaurant/:id', 
        loadChildren: './pages/restaurant/res.module#ResModule', 
},{
        path: 'dish', 
        loadChildren: './pages/dish/dish.module#DishScreenModule', 
},{
        path: 'search', 
        loadChildren: './pages/search/search.module#SearchModule', 
},{
        path: 'shopping-cart', 
        loadChildren: './pages/shopping-cart/cart.module#CartModule', 
},{
        path: '**', 
        loadChildren: './pages/error/error.module#ErrorModule', 
},
];

export const routing = RouterModule.forRoot(AppRoutes, {enableTracing:false});