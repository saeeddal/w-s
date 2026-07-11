import type { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout.component';
import { HOME_ROUTES } from '../../features/home/home.routes';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        title: 'خانه',
        children: HOME_ROUTES,
      },
      {
        path: 'guid',
        title: 'راهنما',
        loadChildren: async () =>
          import('../../features/guid/guid.routes').then((s) => s.GUID_ROUTES),
        data: {
          breadcrumb: 'راهنما',
        },
      },
      {
        path: 'make-prescription',
        loadChildren: async () =>
          import('../../features/make-prescription/make-prescription.routes').then(
            (s) => s.MAKE_PRESCRIPTION_ROUTES,
          ),
        data: {
          breadcrumb: 'نسخه نویسی',
        },
      },

      {
        path: '**',
        loadComponent: async () =>
          import('../../shared/components/not-found/not-found.component').then((x) => x.NotFound),
        title: 'آدرس اشتباه',
      },
    ],
  },
];
