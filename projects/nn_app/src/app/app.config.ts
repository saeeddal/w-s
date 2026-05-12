import type { ApplicationConfig } from '@angular/core';
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ROUTES } from './app.routes';
import { CORE_PROVIDERS } from './core/core.providers';
export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(ROUTES),
    CORE_PROVIDERS,
  ],
};
