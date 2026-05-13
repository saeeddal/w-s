import { Routes } from '@angular/router';
import { HomeLayout } from './home-layout/home-layout';
import { BmnNotFoundComponent } from '@app/shared/components/not-found/not-found.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: 'details/:id',
        loadComponent: async () =>
          import('./pages/loans-detail/loans-detail').then((C) => C.LoanDetail),
      },
      {
        path: 'create',
        loadComponent: async () =>
          import('./pages/loans-create/loans-create').then((C) => C.LoansCreate),
      },
      {
        path: '',
        loadComponent: async () => import('./pages/loans-list/loans-list').then((C) => C.LoansList),
      },
      {
        path: '**',
        component: BmnNotFoundComponent,
      },
    ],
  },
];
