import type { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: async () =>
      import('./layouts/general/general-layout.routes').then((r) => r.GENERAL_LAYOUT_ROUTES),
  },
];
