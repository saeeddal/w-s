export const AUTH_CONFIG = {
  clientId: 'sabaId',
  clientScope: 'sabaScope',

  authorizeUrl: 'https://auth.esata.ir/authentication/oauth/authorize',

  tokenUrl: 'https://auth.esata.ir/authentication/oauth/token',

  redirectUri: 'http://localhost:4200/auth/call-back',

  grant_type: 'authorization_code',

  clientSecret: '6fd523b2-3b69-484d-ab3f-5c8b5aef80c8',

  user: 'https://auth.esata.ir/authentication/user',

  getCenters2: 'https://esakhad.esata.ir:9092/presc/selectCenter/getListSelectCenter',
};

export const AUTH_CONFIG_NEW = {
  clientId: 'sakhad',
  clientScope: 'sakhadScope',

  authorizeUrl: 'https://esakhad.esata.ir:9089/authentication/oauth/authorize',

  tokenUrl: 'https://esakhad.esata.ir:9089/authentication/oauth/token',

  redirectUri: 'http://localhost:4200/auth/call-back',

  grant_type: 'authorization_code',

  clientSecret: 'sakhadSecret',

  user: 'https://esakhad.esata.ir:9089/authentication/user',

  getCenters2: 'https://esakhad.esata.ir:9088/presc/selectCenter/getListSelectCenter',
};
