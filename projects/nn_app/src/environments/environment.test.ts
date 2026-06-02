import { type IEnvironment, IEnvironmentName } from './_/environment.interface';

export const ENVIRONMENT: IEnvironment = {
  name: IEnvironmentName.TEST,
  production: false,
  apiBaseUrl: 'https://testapi.baman.club/',
  clientId: '',
  clientScope: '',
  authenticationSourceUrl: '',
  oAuthLogoutUrl: '',
  authorizeUrl: '',
  authorizationUrl: '',
  resourceUrl: '',
  oAuthCallbackUrl: '',
  authenticationServerUrl: '',
  userUrl: '',
};
