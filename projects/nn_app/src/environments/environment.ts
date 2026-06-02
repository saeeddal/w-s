import { type IEnvironment, IEnvironmentName } from './_/environment.interface';

const authorizeBase = 'http://10.128.60.34:9089';
//const authorizeBase = 'https://esakhad.esata.ir:9082';
export const ENVIRONMENT: IEnvironment = {
  name: IEnvironmentName.TEST,
  production: false,
  apiBaseUrl: '',
  clientId: 'sakhad',
  clientScope: 'sakhadScope',
  authenticationSourceUrl: '',
  oAuthLogoutUrl: authorizeBase + '/authentication/logout',
  authorizeUrl: authorizeBase + 'authentication/oauth/authorize',
  authorizationUrl: authorizeBase + '/authorization',
  resourceUrl: '',
  oAuthCallbackUrl: 'http://localhost:4200/',
  authenticationServerUrl: authorizeBase + '/authentication',
  userUrl: authorizeBase + '/authentication/user',
};
// https://esakhad.esata.ir:9082/authentication/login#/usermanagement
// username :2710202948 pass:0911805Mm@
