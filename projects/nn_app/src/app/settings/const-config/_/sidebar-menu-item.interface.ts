export interface SidebarMenuItem {
  title: string;
  icon: string;
  route?: string;
  children?: SidebarMenuItem[];
}
