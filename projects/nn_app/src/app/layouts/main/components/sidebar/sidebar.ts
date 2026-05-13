import { Component, HostListener, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarMenuItem } from '@app/settings/const-config/_/sidebar-menu-item.interface';
import { SIDEBAR_MENU } from '@app/settings/const-config/const-config.setting';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: SidebarMenuItem[] = SIDEBAR_MENU;

  collapsed = signal(false);

  openMenu = signal<string | null>(null);

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.collapsed.set(window.innerWidth <= 992);
  }

  toggleMenu(title: string): void {
    this.openMenu.update((current) => (current === title ? null : title));
  }

  hasChildren(item: SidebarMenuItem): boolean {
    return !!item.children?.length;
  }
}
