import type { Routes } from '@angular/router';

import { BaseLayout } from './base-layout/base-layout.component';
// import { authGuard } from '@app/core/guards/auth.guard';
// import { selectCenterGuard } from '@app/core/guards/select-center.guard';

export const BASE_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: BaseLayout,
    children: [
      {
        path: 'auth',
        children: [
          {
            path: '',
            loadChildren: async () =>
              import('../auth/auth-layout.routes').then((r) => r.AUTH_LAYOUT_ROUTES),
          },
        ],
      },
      {
        path: '',
        // canActivate: [authGuard, selectCenterGuard],
        children: [
          {
            path: '',
            loadChildren: async () =>
              import('../main/main-layout.routes').then((r) => r.MAIN_LAYOUT_ROUTES),
          },
          {
            path: '**',
            loadComponent: async () =>
              import('../../shared/components/not-found/not-found.component').then(
                (x) => x.NotFound,
              ),
            title: 'آدرس اشتباه',
          },
        ],
      },
    ],
  },
];
