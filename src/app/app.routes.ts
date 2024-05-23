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
      import('home').then((componente) => componente.HomeComponent),
  },
  {
    path: 'users',
    // loadComponent implementa o lazy load da página
    loadComponent: () =>
      import('users').then((componente) => componente.UsersComponent),
  },
];
