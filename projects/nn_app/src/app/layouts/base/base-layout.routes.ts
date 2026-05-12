import type { Routes } from '@angular/router';

import { BmnBaseLayoutComponent } from './base-layout/base-layout.component';
import { BmnNotFoundComponent } from '@app/shared/components/not-found/not-found.component';

export const BASE_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: BmnBaseLayoutComponent,
    children: [
      {
        path: 'steps',
        component: BmnBaseLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: async () =>
              import('../steps/steps-layout.routes').then((r) => r.SIMPLE_LAYOUT_ROUTES),
          },
        ],
      },
      {
        path: '',
        component: BmnBaseLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: async () =>
              import('../main/main-layout.routes').then((r) => r.MAIN_LAYOUT_ROUTES),
          },
        ],
      },
    ],
  },

  {
    path: '**',
    component: BmnNotFoundComponent,
  },
];
