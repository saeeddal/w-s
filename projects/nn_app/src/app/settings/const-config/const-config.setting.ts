import { BmnConstConfig } from './_/const-config.interface';
import { SidebarMenuItem } from './_/sidebar-menu-item.interface';

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

export const SIDEBAR_MENU: SidebarMenuItem[] = [
  {
    title: 'Users',
    icon: 'group',
    children: [
      {
        title: 'User List',
        icon: 'list',
        route: '/users/list',
      },
      {
        title: 'Create User',
        icon: 'person_add',
        route: '/users/create',
      },
    ],
  },
  {
    title: 'Settings',
    icon: 'settings',
    children: [
      {
        title: 'Profile',
        icon: 'account_circle',
        route: '/settings/profile',
      },
      {
        title: 'Security',
        icon: 'security',
        route: '/settings/security',
      },
    ],
  },
];
