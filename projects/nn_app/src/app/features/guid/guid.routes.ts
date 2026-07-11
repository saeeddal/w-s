import type { Routes } from '@angular/router';
import { GuidLayout } from './guid-layout/guid-layout';
import { NotFound } from '@app/shared/components/not-found/not-found.component';

export const GUID_ROUTES: Routes = [
  {
    path: '',
    component: GuidLayout,
    children: [
      { path: '', redirectTo: 'sampleReactiveForm', pathMatch: 'full' },
      {
        path: 'sampleReactiveForm',
        loadComponent: async () => import('./pages/guid-form/guid-form').then((C) => C.GuidForm),
        data: {
          breadcrumb: 'نمونه فرم',
        },
      },
      {
        path: 'sampleComponentUsage',
        loadComponent: async () =>
          import('./pages/guid-components/guid-components').then((C) => C.GuidComponents),
        data: {
          breadcrumb: 'سمپل استفاده از کامپوننت‌ها',
        },
      },
      {
        path: '**',
        component: NotFound,
      },
    ],
  },
];
