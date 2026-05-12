import type { Routes } from '@angular/router';
import { BmnGeneralLayoutComponent } from './general-layout/general-layout.component';

export const GENERAL_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: BmnGeneralLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          import('../base/base-layout.routes').then((r) => r.BASE_LAYOUT_ROUTES),
      },
    ],
  },
];
