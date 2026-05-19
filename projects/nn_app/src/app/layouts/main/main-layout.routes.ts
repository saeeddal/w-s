import type { Routes } from '@angular/router';
import { BmnMainLayoutComponent } from './main-layout/main-layout.component';
import { BmnNotFoundComponent } from '@app/shared/components/not-found/not-found.component';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: BmnMainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: async () =>
          import('../../features/home/home.routes').then((s) => s.HOME_ROUTES),
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
        component: BmnNotFoundComponent,
      },
    ],
  },
];
