export interface IEnvironment {
  name: IEnvironmentName;
  production: boolean;
  apiBaseUrl: string;
  clientId: string;
  clientScope: string;
  authenticationSourceUrl: string;
  oAuthLogoutUrl: string;
  authorizeUrl: string;
  authorizationUrl: string;
  resourceUrl: string;
  oAuthCallbackUrl: string;
  authenticationServerUrl: string;
  userUrl: string;
}

export enum IEnvironmentName {
  TEST = 'TEST',
  PRODUCT = 'PRODUCT',
}
