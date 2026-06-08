export interface IMenu {
  menu_key: string;
  title: string;
  farsi_title: string;
  parentMenu: IMenu | null;
  children: IMenu[];
  priority: number | null;
}
