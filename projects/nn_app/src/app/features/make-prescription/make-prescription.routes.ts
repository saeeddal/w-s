import type { Routes } from '@angular/router';
import { MakePrescriptionLayout } from './make-prescription-layout/make-prescription-layout';

export const MAKE_PRESCRIPTION_ROUTES: Routes = [
  {
    path: '',
    component: MakePrescriptionLayout,
    children: [
      {
        path: '',
        loadComponent: async () =>
          import('./pages/make-prescription-main/make-prescription-main').then(
            (C) => C.MakePrescriptionMain,
          ),
        title: 'پذیرش',
        data: {
          breadcrumb: 'پذیرش',
        },
        resolve: {
          delay: () => {
            // Add artificial delay to see loading bar
            return new Promise((resolve) => setTimeout(resolve, 5000));
          },
        },
      },
    ],
  },
];
