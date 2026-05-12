export interface IConfigApiService {
  authQuery: string;
}

export enum BmnConfigApiServices {
  AuthQuery = 'auth-read',
}

export type ConfigApiServices = `${BmnConfigApiServices}`;
