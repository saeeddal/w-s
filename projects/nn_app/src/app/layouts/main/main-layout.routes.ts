import type { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout.component';
import { NotFound } from '@app/shared/components/not-found/not-found.component';
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
        component: NotFound,
        title: 'آدرس اشتباه',
      },
    ],
  },
];
