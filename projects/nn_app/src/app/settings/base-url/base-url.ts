import { InjectionToken } from '@angular/core';

export interface BmnApiConfig {
  apiBaseUrl: string;
}

export const API_CONFIG_TOKEN = new InjectionToken<BmnApiConfig>('');
