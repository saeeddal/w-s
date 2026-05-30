import type { Routes } from '@angular/router';
import { HomeLayout } from './home-layout/home-layout';
import { NotFound } from '@app/shared/components/not-found/not-found.component';
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
      },
      {
        path: '**',
        component: NotFound,
      },
    ],
  },
];
