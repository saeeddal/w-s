import { Routes } from '@angular/router';
import { LoansLayout } from './loans-layout/loans-layout';

export const LOANS_ROUTES: Routes = [
  {
    path: '',
    component: LoansLayout,
    children: [
      {
        path: '',
        loadComponent: async () => import('./pages/loans-list/loans-list').then((C) => C.LoansList),
      },
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
    ],
  },
];
