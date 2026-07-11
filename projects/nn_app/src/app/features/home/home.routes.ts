import type { Routes } from '@angular/router';
import { HomeLayout } from './home-layout/home-layout';
import { HomeMain } from './pages/home-main/home-main';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        //loadComponent: async () => import('./pages/home-main/home-main').then((C) => C.HomeMain),
        component: HomeMain,
        data: {
          breadcrumb: 'خانه',
        },
        resolve: {
          delay: () => {
            // Add artificial delay to see loading bar
            return new Promise((resolve) => setTimeout(resolve, 1000));
          },
        },
      },
    ],
  },
  {
    path: '**',
    loadComponent: async () =>
      import('../../shared/components/not-found/not-found.component').then((x) => x.NotFound),
    title: 'آدرس اشتباه',
  },
];
