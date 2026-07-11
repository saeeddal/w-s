export const StaticDevelopMenuItems = [
  {
    menu_key: 'home',
    title: 'home',
    farsi_title: 'خانه',
    priority: 0,
    children: [],
  },
  {
    menu_key: 'guid',
    title: 'guid',
    farsi_title: 'راهنما',
    priority: 100,
    children: [
      {
        menu_key: 'sampleComponentUsage',
        title: 'sampleComponentUsage',
        farsi_title: 'استفاده از کامپوننت ها',
        priority: 1,
      },
      {
        menu_key: 'sampleReactiveForm',
        title: 'sampleReactiveForm',
        farsi_title: 'نمونه فرم',
        priority: 2,
      },
    ],
  },
];
