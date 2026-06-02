import { type IEnvironment, IEnvironmentName } from './_/environment.interface';

export const ENVIRONMENT: IEnvironment = {
  name: IEnvironmentName.PRODUCT,
  production: true,
  apiBaseUrl: 'https://api.baman.club/v2/',
  clientId: '',
  clientScope: '',
  authenticationSourceUrl: '',
  oAuthLogoutUrl: '',
  authorizeUrl: '',
  authorizationUrl: '',
  resourceUrl: '',
  oAuthCallbackUrl: '',
  authenticationServerUrl: '',
  userUrl: 'user',
};
