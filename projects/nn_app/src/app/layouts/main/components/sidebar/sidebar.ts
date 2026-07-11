/* eslint-disable @typescript-eslint/member-ordering */
import type { OnInit } from '@angular/core';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import type { ISidebarMenuItem } from '@app/shared/models/auth/sidebar-menu-item.interface';
import { PtBasicCard, PtIcon, PtImage, PtLabel, UK_TYPE } from '@pars-lib/public-api';
import { AppFacade } from '@app/core/app/app.facade';
import { AuthFacade } from '@app/core/auth/auth.facade';
import { RouteMapperService } from '@app/core/services/route-mapper.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, PtBasicCard, PtLabel, PtIcon, PtImage],
  templateUrl: './sidebar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  public readonly UK_TYPE = UK_TYPE;
  public readonly APP_FACADE = inject(AppFacade);
  public readonly AUTH_FACADE = inject(AuthFacade);
  public readonly ROUTER = inject(Router);
  public menuItems = this.AUTH_FACADE.menuList;
  public collapsed = signal(false);
  public openMenu = signal<string | null>(null);
  public childRoute = signal('');
  public activeMenuKey = signal('');

  public constructor() {
    this.checkScreenSize();
  }
  ngOnInit(): void {
    this.AUTH_FACADE.getMenuList();
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

  private cdr = inject(ChangeDetectorRef);

  private routeMapper = inject(RouteMapperService);
  expandedParents: Record<string, boolean> = {};

  public onMenuItemClick(event: Event, menuKey: string): void {
    event.stopPropagation();
    this.activeMenuKey.set(menuKey);

    this.routeMapper.navigateByMenuKey(menuKey);
  }
}
