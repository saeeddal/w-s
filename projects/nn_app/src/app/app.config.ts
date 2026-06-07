import type { ApplicationConfig } from '@angular/core';
import {
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { ROUTES } from './app.routes';
import { CORE_PROVIDERS } from './core/core.providers';

import { provideOAuthClient } from 'angular-oauth2-oidc';
import { AuthFacade } from './core/auth/auth.facade';
import { CenterFacade } from './features/centers/centers.facade';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor, getTokenInterceptor } from './core/interceptors';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(ROUTES, withViewTransitions()),
    CORE_PROVIDERS,
    provideOAuthClient(),

    provideAppInitializer(async () => {
      const authFacade = inject(AuthFacade);
      const centerFacade = inject(CenterFacade);
      await authFacade.restoreSession();
      await centerFacade.restoreSession();
    }),
    provideHttpClient(withInterceptors([getTokenInterceptor, authInterceptor])),
  ],
};
