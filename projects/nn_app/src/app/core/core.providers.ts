import type { EnvironmentProviders } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const CORE_PROVIDERS: EnvironmentProviders = provideHttpClient(withInterceptors([]));
