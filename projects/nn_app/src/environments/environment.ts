import { type IEnvironment, IEnvironmentName } from './_/environment.interface';

export const ENVIRONMENT: IEnvironment = {
  name: IEnvironmentName.TEST,
  production: false,
  apiBaseUrl: 'https://testapi.baman.club/',
  payUrl: 'https://testpay.baman.club/pay/pay/payment?tokenId=',
};
