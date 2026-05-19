import { ChangeDetectorRef, Component, HostListener, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarMenuItem } from '@app/settings/const-config/_/sidebar-menu-item.interface';
import { SIDEBAR_MENU } from '@app/settings/const-config/const-config.setting';
import {
  PtBasicCard,
  PtIcon,
  PtImage,
  PtLabel,
  UK_TYPE,
} from '../../../../../../../pars-lib/src/public-api';
import { AppFacade } from '@app/core/app.facade';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, PtBasicCard, PtLabel, PtIcon, PtImage],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: SidebarMenuItem[] = SIDEBAR_MENU;
  public readonly UK_TYPE = UK_TYPE;
  collapsed = signal(false);
  openMenu = signal<string | null>(null);
  public readonly APP_FACADE = inject(AppFacade);
  private cdr = inject(ChangeDetectorRef);
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
