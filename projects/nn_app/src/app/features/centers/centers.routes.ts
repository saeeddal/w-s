import { Routes } from '@angular/router';
import { CenterLayout } from './centers-layout/centers-layout';
import { BmnNotFoundComponent } from '@app/shared/components/not-found/not-found.component';

export const CENTER_ROUTES: Routes = [
  {
    path: '',
    component: CenterLayout,
    children: [
      { path: '', redirectTo: 'select-center', pathMatch: 'full' },
      {
        path: 'select-center',
        loadComponent: () =>
          import('./pages/select-center/select-center').then((C) => C.SelectCenter),
      },
      {
        path: '**',
        component: BmnNotFoundComponent,
      },
    ],
  },
];
