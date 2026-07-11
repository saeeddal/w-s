import type { ISidebarMenuItem } from '@app/shared/models/auth';
import type { IResponse } from '@app/shared/models/common';
import { StaticDevelopMenuItems } from './static-sidebar-menu';

export const menuList: IResponse<ISidebarMenuItem[]> = {
  developMode: true,
  Status: 0,
  message: {
    data: [
      ...StaticDevelopMenuItems,
      {
        menu_key: 'Bill',
        title: 'Bill',
        farsi_title: 'امکانات عمومي',
        priority: 1,
        children: [
          {
            menu_key: 'generalInfoCenter',
            title: 'generalInfoCenter',
            farsi_title: 'قرارداد مرکز',
            priority: 1,
          },
          {
            menu_key: 'manageClosingBills',
            title: 'manageClosingBills',
            farsi_title: 'صورتحساب',
            priority: 2,
          },
          {
            menu_key: 'usedItemsPr',
            title: 'usedItemsPr',
            farsi_title: 'خدمات مورد علاقه',
            priority: 3,
          },
        ],
      },
      {
        menu_key: 'acceptSecretaryMenu_jpa1',
        title: 'acceptSecretaryMenu_jpa1',
        farsi_title: 'نسخه نويسي',
        priority: 2,
        children: [
          {
            menu_key: 'epMakePrescription',
            title: 'epMakePrescription',
            farsi_title: 'پذيرش',
            priority: 1,
          },
          {
            menu_key: 'epClientele',
            title: 'epClientele',
            farsi_title: 'مراجعين',
            priority: 2,
          },
          {
            menu_key: 'epHistory',
            title: 'epHistory',
            farsi_title: 'تاريخچه تجويز',
            priority: 3,
          },
          {
            menu_key: 'preHistory',
            title: 'preHistory',
            farsi_title: 'تاريخچه ارائه خدمت (نسخه پيچي)',
            priority: 4,
          },
          {
            menu_key: 'usedPr',
            title: 'usedPr',
            farsi_title: 'نسخه بيماري (پر مصرف)',
            priority: null,
          },
        ],
      },
    ],
    total: 12,
  },
};
