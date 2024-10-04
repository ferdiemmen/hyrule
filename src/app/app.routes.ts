import { ActivatedRouteSnapshot, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { HeroesComponent } from './heroes/heroes.component';
import { inject } from '@angular/core';

export const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.routes').then(m => m.routes),
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundErrorComponent
  }
];
