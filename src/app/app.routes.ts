import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // dessa forma não terá lazy load
    // component: HomeComponent,
    // loadComponent implementa o lazy load da página
    loadComponent: () =>
      import('./home/home.component').then(
        (componente) => componente.HomeComponent
      ),
  },
  {
    path: 'users',
    // loadComponent implementa o lazy load da página
    loadComponent: () =>
      import('./users/users.component').then(
        (componente) => componente.UsersComponent
      ),
  },
];
