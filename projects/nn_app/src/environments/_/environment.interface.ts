export interface IEnvironment {
  name: IEnvironmentName;
  production: boolean;
  apiBaseUrl: string;
  payUrl: string;
}

export enum IEnvironmentName {
  TEST = 'TEST',
  PRODUCT = 'PRODUCT',
}
