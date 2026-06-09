export interface ISidebarMenuItem {
  title: string;
  icon?: string;
  route?: string;
  menu_key: string;
  farsi_title: string;
  priority?: number | null;
  children: ISubMenuItem[];
}

export type ISubMenuItem = Omit<ISidebarMenuItem, 'children'>;
