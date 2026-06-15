import type { EnvironmentProviders } from '@angular/core';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';

export const CORE_PROVIDERS: EnvironmentProviders = provideHttpClient(
  withXhr(),
  withInterceptors([]),
);
