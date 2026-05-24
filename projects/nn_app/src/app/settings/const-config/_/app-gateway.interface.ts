export interface IGateway {
  payPath: string;
  serviceName: IServiceNames;
}

interface IServiceNames {
  config: string;
  geoLocation: string;
}
