import type { Routes } from '@angular/router';
import { CenterLayout } from './centers-layout/centers-layout';
import { NotFound } from '@app/shared/components/not-found/not-found.component';
import { authGuard } from '@app/core/guards/auth.guard';

export const CENTER_ROUTES: Routes = [
  {
    path: '',
    component: CenterLayout,
    children: [
      { path: '', redirectTo: 'select-center', pathMatch: 'full' },
      {
        path: 'select-center',
        loadComponent: () =>
          import('./pages/select-center/select-center').then((C) => C.SelectCenter),
        canActivate: [authGuard],
      },
      {
        path: 'call-back',
        loadComponent: () => import('./pages/call-back/call-back').then((C) => C.CallBack),
      },
      {
        path: '**',
        component: NotFound,
        title: 'ادرس اشتباه در مراحل',
      },
    ],
  },
];
