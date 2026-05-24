import { InjectionToken } from '@angular/core';

export interface IApiConfig {
  apiBaseUrl: string;
}

export const API_CONFIG_TOKEN = new InjectionToken<IApiConfig>('');
