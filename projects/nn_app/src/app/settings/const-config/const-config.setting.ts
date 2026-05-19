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
    title: 'خانه',
    icon: 'group',
    route: '/',
  },
  {
    title: 'نسخه نویسی',
    icon: 'group',
    children: [
      {
        title: 'پذیرش',
        icon: 'list',
        route: '/make-prescription',
      },
      {
        title: 'مراجعین',
        icon: 'person_add',
        route: '/users/create',
      },
      {
        title: 'تاریخچه تجویز',
        icon: 'person_add',
        route: '/users/create',
      },
      {
        title: 'نسخه بیمار',
        icon: 'person_add',
        route: '/users/create',
      },
    ],
  },
  {
    title: 'نسخه‌پیچی',
    icon: 'settings',
    children: [
      {
        title: 'پروفایل',
        icon: 'account_circle',
        route: '/settings/profile',
      },
    ],
  },
  {
    title: 'استحقاق‌سنجی/ معرفی‌نامه',
    icon: 'settings',
    children: [
      {
        title: 'پروفایل',
        icon: 'account_circle',
        route: '/settings/profile',
      },
    ],
  },
  {
    title: '2 استحقاق‌سنجی/ معرفی‌نامه',
    icon: 'settings2',
    children: [
      {
        title: 'پروفایل',
        icon: 'account_circle2',
        route: '/settings/profile2',
      },
    ],
  },
];
