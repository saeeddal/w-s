import { type BmnEnvironment, BmnEnvironmentName } from './_/environment.interface';

export const ENVIRONMENT: BmnEnvironment = {
  name: BmnEnvironmentName.PRODUCT,
  production: true,
  apiBaseUrl: 'https://api.baman.club/v2/',
  payUrl: 'https://pay.baman.club/v2/pay/pay/payment?tokenId=',
};
