import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

const ROUTE_MAP: Record<string, string> = {
  home: '/home',
  Bill: '/bill',
  generalInfoCenter: '/bill/general-info-center',
  manageClosingBills: '/bill/manage-closing-bills',
  usedItemsPr: '/bill/used-items-pr',
  acceptSecretaryMenu_jpa1: '/make-prescription',
  epMakePrescription: '/make-prescription',
  epClientele: '/prescription/ep-clientele',
  epHistory: '/prescription/ep-history',
  preHistory: '/prescription/pre-history',
  usedPr: '/prescription/used-pr',
};

@Injectable({ providedIn: 'root' })
export class RouteMapperService {
  public navigateByMenuKey(menuKey: string): void {
    const route = ROUTE_MAP[menuKey];
    if (route) {
      this.router.navigateByUrl(route);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  public getRouteByMenuKey(menuKey: string): string | null {
    return ROUTE_MAP[menuKey] || null;
  }

  private router = inject(Router);
}
