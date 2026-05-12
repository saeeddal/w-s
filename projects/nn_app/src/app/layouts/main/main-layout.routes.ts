import type { Routes } from '@angular/router';
import { BmnMainLayoutComponent } from './main-layout/main-layout.component';
import { BmnNotFoundComponent } from '@app/shared/components/not-found/not-found.component';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: BmnMainLayoutComponent,
    children: [
      { path: '', redirectTo: 'loans', pathMatch: 'full' },
      {
        path: 'loans',
        loadChildren: async () =>
          import('../../features/loans/loans.routes').then((s) => s.LOANS_ROUTES),
      },
      {
        path: '**',
        component: BmnNotFoundComponent,
      },
    ],
  },
];
