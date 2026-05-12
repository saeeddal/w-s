import type { Routes } from '@angular/router';
import { BmnStepsLayoutComponent } from './steps-layout/steps-layout.component';
import { BmnNotFoundComponent } from '@app/shared/components/not-found/not-found.component';

export const SIMPLE_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: BmnStepsLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
        import('../../features/centers/centers.routes').then(x=>x.CENTER_ROUTES)
      },
      {
        path: '**',
        component: BmnNotFoundComponent,
      },
    ],
  },
];
