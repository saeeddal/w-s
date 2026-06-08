import type { IMenu } from '@app/shared/models/auth/menu-items.interface';
import type { IResponse } from '@app/shared/models/common';

export const menuList: IResponse<IMenu[]> = {
  developMode: true,
  Status: 0,
  message: {
    data: [
      {
        menu_key: 'Bill',
        title: 'Bill',
        farsi_title: 'امکانات عمومي',
        parentMenu: null,
        priority: 1,
        children: [
          {
            menu_key: 'generalInfoCenter',
            title: 'generalInfoCenter',
            farsi_title: 'قرارداد مرکز',
            parentMenu: null,
            priority: 1,
            children: [],
          },
          {
            menu_key: 'manageClosingBills',
            title: 'manageClosingBills',
            farsi_title: 'صورتحساب',
            parentMenu: null,
            priority: 2,
            children: [],
          },
          {
            menu_key: 'usedItemsPr',
            title: 'usedItemsPr',
            farsi_title: 'خدمات مورد علاقه',
            parentMenu: null,
            priority: 3,
            children: [],
          },
        ],
      },
      {
        menu_key: 'acceptSecretaryMenu_jpa1',
        title: 'acceptSecretaryMenu_jpa1',
        farsi_title: 'نسخه نويسي',
        parentMenu: null,
        priority: 2,
        children: [
          {
            menu_key: 'epMakePrescription',
            title: 'epMakePrescription',
            farsi_title: 'پذيرش',
            parentMenu: null,
            priority: 1,
            children: [],
          },
          {
            menu_key: 'epClientele',
            title: 'epClientele',
            farsi_title: 'مراجعين',
            parentMenu: null,
            priority: 2,
            children: [],
          },
          {
            menu_key: 'epHistory',
            title: 'epHistory',
            farsi_title: 'تاريخچه تجويز',
            parentMenu: null,
            priority: 3,
            children: [],
          },
          {
            menu_key: 'preHistory',
            title: 'preHistory',
            farsi_title: 'تاريخچه ارائه خدمت (نسخه پيچي)',
            parentMenu: null,
            priority: 4,
            children: [],
          },
          {
            menu_key: 'usedPr',
            title: 'usedPr',
            farsi_title: 'نسخه بيماري (پر مصرف)',
            parentMenu: null,
            priority: null,
            children: [],
          },
        ],
      },
    ],
    total: 12,
  },
};
