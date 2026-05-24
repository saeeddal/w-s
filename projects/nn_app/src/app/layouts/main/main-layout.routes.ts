import type { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout.component';
import { NotFound } from '@app/shared/components/not-found/not-found.component';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: async () =>
          import('../../features/home/home.routes').then((s) => s.HOME_ROUTES),
        title: 'خانه',
      },
      {
        path: 'make-prescription',
        loadChildren: async () =>
          import('../../features/make-prescription/make-prescription.routes').then(
            (s) => s.MAKE_PRESCRIPTION_ROUTES
          ),
      },

      {
        path: '**',
        component: NotFound,
        title: 'آدرس اشتباه',
      },
    ],
  },
];
