import type { Routes } from '@angular/router';
import { BmnAuthLayoutComponent } from './auth-layout/auth-layout.component';

export const AUTH_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: BmnAuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          import('../../features/centers/centers.routes').then((x) => x.CENTER_ROUTES),
      },
    ],
  },
];
