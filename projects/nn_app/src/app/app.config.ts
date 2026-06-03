import type { ApplicationConfig } from '@angular/core';
import {
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { ROUTES } from './app.routes';
import { CORE_PROVIDERS } from './core/core.providers';

import { provideOAuthClient } from 'angular-oauth2-oidc';
import { AuthFacade } from './core/auth/auth.facade';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(ROUTES),
    CORE_PROVIDERS,
    provideOAuthClient(),

    provideAppInitializer(async () => {
      const facade = inject(AuthFacade);
      await facade.restoreSession();
    }),
  ],
};
