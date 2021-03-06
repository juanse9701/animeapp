import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    { path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesModule) }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false,
            scrollPositionRestoration: 'enabled',
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
