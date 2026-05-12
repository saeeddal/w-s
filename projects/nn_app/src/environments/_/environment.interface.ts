export interface BmnEnvironment {
  name: BmnEnvironmentName;
  production: boolean;
  apiBaseUrl: string;
  payUrl: string;
}

export enum BmnEnvironmentName {
  TEST = 'TEST',
  PRODUCT = 'PRODUCT',
}
