import type { OnInit } from '@angular/core';
import { ChangeDetectorRef, Component, HostListener, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import type { ISidebarMenuItem } from '@app/settings/const-config/_/sidebar-menu-item.interface';
import { SIDEBAR_MENU } from '@app/settings/const-config/const-config.setting';
import {
  PtBasicCard,
  PtIcon,
  PtImage,
  PtLabel,
  UK_TYPE,
} from '../../../../../../../pars-lib/src/public-api';
import { AppFacade } from '@app/core/app/app.facade';
import { filter, map } from 'rxjs';
import { AuthFacade } from '@app/core/auth/auth.facade';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, PtBasicCard, PtLabel, PtIcon, PtImage],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  public readonly UK_TYPE = UK_TYPE;
  public readonly APP_FACADE = inject(AppFacade);
  public readonly AUTH_FACADE = inject(AuthFacade);
  public readonly ROUTER = inject(Router);
  public menuItems: ISidebarMenuItem[] = SIDEBAR_MENU;
  public collapsed = signal(false);
  public openMenu = signal<string | null>(null);
  public childRoute = signal('');

  public constructor() {
    this.cdr.markForCheck();
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.checkScreenSize();
  }

  public checkScreenSize(): void {
    this.collapsed.set(window.innerWidth <= 992);
  }

  public toggleMenu(title: string): void {
    this.openMenu.update((current) => (current === title ? null : title));
  }

  public hasChildren(item: ISidebarMenuItem): boolean {
    return !!item.children?.length;
  }

  public ngOnInit() {
    this.ROUTER.events
      .pipe(
        filter((event: unknown) => event instanceof NavigationEnd),
        map(() => this.ROUTER.url),
      )
      .subscribe((url) => {
        //const cleanedUrl = url.startsWith('/') ? url.substring(1) : url;
        this.childRoute.set(url);
      });
  }
  private cdr = inject(ChangeDetectorRef);
}
