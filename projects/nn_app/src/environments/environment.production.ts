import { type IEnvironment, IEnvironmentName } from './_/environment.interface';

export const ENVIRONMENT: IEnvironment = {
  name: IEnvironmentName.PRODUCT,
  production: true,
  apiBaseUrl: 'https://api.baman.club/v2/',
  payUrl: 'https://pay.baman.club/v2/pay/pay/payment?tokenId=',
};
