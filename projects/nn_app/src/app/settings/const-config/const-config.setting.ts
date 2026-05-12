import { BmnConstConfig } from './_/const-config.interface';

export const CONST_CONFIG: BmnConstConfig = {
  image: {
    defaultImageUrl: '',
    noImageProfile: './../../../assets/images/empty/no-image.jpg',
    noImagePicture: './../../../assets/images/no-images/no-image-picture.gif',
    noImageProduct: './../../../assets/images/no-images/no-image-product.gif',
  },

  appSetting: {
    //maxAppWidth: 450,
    header: {
      backgroundColor: '#ffffff',
      headerHeight: 45,
    },

    appVersion: '4.0.3',
    callCenter: '02191070265',
  },

  common: {
    maxMobileWidth: 450,
    maxMobileWidthPadded: 430,
    maxDesktopWidth: 1300,
    maxDesktopWidthPadded: 1280,
  },
  gateway: {
    payPath: 'https://pay.baman.club/v2',
    serviceName: {
      config: '/config',
      geoLocation: '/geoLocation',
    },
  },
  relevantPath: {
    transactionList: '',
  },
};
