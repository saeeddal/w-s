import type { Routes } from '@angular/router';

import { BaseLayout } from './base-layout/base-layout.component';
import { NotFound } from '@app/shared/components/not-found/not-found.component';

export const BASE_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: BaseLayout,
    children: [
      {
        path: 'steps',
        component: BaseLayout,
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
        component: BaseLayout,
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
    component: NotFound,
  },
];
