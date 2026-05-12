export interface BmnGateway {
  payPath: string;
  serviceName: BmnServiceNames;
}

interface BmnServiceNames {
  config: string;

  geoLocation: string;
}
