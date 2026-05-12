import { type BmnEnvironment, BmnEnvironmentName } from './_/environment.interface';

export const ENVIRONMENT: BmnEnvironment = {
  name: BmnEnvironmentName.TEST,
  production: false,
  apiBaseUrl: 'https://testapi.baman.club/',
  payUrl: 'https://testpay.baman.club/pay/pay/payment?tokenId=',
};
