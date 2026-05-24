export interface ISidebarMenuItem {
  title: string;
  icon: string;
  route?: string;
  children?: ISidebarMenuItem[];
}
