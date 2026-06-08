export interface IAuthority {
  role: string;
  isDefault: boolean;
  title: string | null;
  authority: string;
}

export interface IUserPrincipal {
  id: number | null;
  version: number | null;
  dataState: number;

  createDate: string | null;
  modifyDate: string | null;
  deleteDate: string | null;

  email: string | null;
  firstName: string;
  lastName: string;
  login: string;
  username: string;

  password: string | null;
  status: number;

  uuid: string;

  description: string | null;

  scheduled: unknown | null;
  ipRange: string | null;

  picture: string | null;
  pictureType: string | null;

  encryptedPass: string | null;

  mobile: string | null;
  codm: string | null;
  cesr: string | null;

  loginAttempt: number;
  twoFactor: boolean | null;

  expiresIn: number;

  clientAddr: string | null;

  mcntsDTOModel: unknown | null;

  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  enabled: boolean;

  authorities: IAuthority[];
}

export interface IUserAuthentication {
  authorities: IAuthority[];
  details: unknown | null;
  authenticated: boolean;
  principal: IUserPrincipal;
  credentials: unknown | null;
  name: string;
}

export interface IOAuthAuthority {
  authority: string;
  role?: string;
  isDefault?: boolean;
  title?: string | null;
}

export interface IOAuth2Request {
  clientId: string;

  scope: string[];

  requestParameters: {
    code: string;
    grant_type: string;
    scope: string;
    response_type: string;
    redirect_uri: string;
    state: string;
    client_id: string;
  };

  resourceIds: string[];

  authorities: IOAuthAuthority[];

  approved: boolean;
  refresh: boolean;

  redirectUri: string;

  responseTypes: string[];

  extensions: Record<string, unknown>;

  grantType: string;

  refreshTokenRequest: unknown | null;
}

export interface IUserInfoResponse {
  authorities: IAuthority[];

  details: unknown | null;

  authenticated: boolean;

  userAuthentication: IUserAuthentication;

  clientOnly: boolean;

  oauth2Request: IOAuth2Request;

  credentials: string;

  principal: IUserPrincipal;

  name: string;
}
