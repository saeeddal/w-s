import { Routes } from '@angular/router';
import { MakePrescriptionLayout } from './make-prescription-layout/make-prescription-layout';
import { BmnNotFoundComponent } from '@app/shared/components/not-found/not-found.component';

export const MAKE_PRESCRIPTION_ROUTES: Routes = [
  {
    path: '',
    component: MakePrescriptionLayout,
    children: [
      {
        path: '',
        loadComponent: async () =>
          import('./pages/make-prescription-main/make-prescription-main').then(
            (C) => C.MakePrescriptionMain
          ),
      },
      {
        path: '**',
        component: BmnNotFoundComponent,
      },
    ],
  },
];
