import { Routes } from '@angular/router';
import { heroExistsResolver } from './hero-exists.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./heroes.component').then(c => c.HeroesComponent),
    children: [
      {
        path: 'link',
        loadComponent: () => import('./link/link.component').then(c => c.LinkComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./hero/hero.component').then(c => c.HeroComponent),
        resolve: {
          heroExists: heroExistsResolver,
        },
      },
    ],
  },
];
