import type { Routes } from '@angular/router';
import { GeneralLayout } from './general-layout/general-layout.component';
import { BASE_LAYOUT_ROUTES } from '../base/base-layout.routes';

export const GENERAL_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: GeneralLayout,
    children: [
      {
        path: '',
        children: [...BASE_LAYOUT_ROUTES],
      },
    ],
  },
];
