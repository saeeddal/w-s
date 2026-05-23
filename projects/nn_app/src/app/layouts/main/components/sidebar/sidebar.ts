import { ChangeDetectorRef, Component, HostListener, inject, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
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
import { filter, map } from 'rxjs';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, PtBasicCard, PtLabel, PtIcon, PtImage],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  menuItems: SidebarMenuItem[] = SIDEBAR_MENU;
  public readonly UK_TYPE = UK_TYPE;
  collapsed = signal(false);
  openMenu = signal<string | null>(null);
  public readonly APP_FACADE = inject(AppFacade);
  public readonly ROUTER = inject(Router);
  public childRoute = signal('');
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    this.cdr.markForCheck();
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

  ngOnInit() {
    this.ROUTER.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map(() => this.ROUTER.url)
      )
      .subscribe((url) => {
        //const cleanedUrl = url.startsWith('/') ? url.substring(1) : url;
        this.childRoute.set(url);
      });
  }
}
