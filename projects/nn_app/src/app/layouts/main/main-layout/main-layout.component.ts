import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { filter } from 'rxjs';
import { AppFacade } from '@app/core/app.facade';
import { Themes } from '@app/core/base-services/models/themes.enum';
import { FormsModule } from '@angular/forms';
import {
  PtBasicCard,
  PtButton,
  PtIcon,
  PtImage,
  PtLabel,
  PtSelect,
  UK_TYPE,
} from '../../../../../../pars-lib/src/public-api';
import { MEDICAL_CENTERS } from '../helper/mock-data';
import { Sidebar } from '../components/sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    CommonModule,
    PtImage,
    PtBasicCard,
    PtLabel,
    PtSelect,
    PtButton,
    PtBasicCard,
    PtIcon,
    Sidebar,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BmnMainLayoutComponent {
  public readonly UK_TYPE = UK_TYPE;
  public reduceHeightForPwaIphone = signal(200);
  public isOnline = signal(true);
  public showHeader = signal(true);
  public showFooter = signal(true);

  public hideFooter = signal(false);
  public showBack = signal(false);
  public hideLoginButton = signal(false);
  public headerTitle = signal('');
  public backAddress = signal('');
  public headerHasBackGround = signal(false);

  public readonly APP_FACADE = inject(AppFacade);
  public readonly ROUTER = inject(Router);

  public readonly Themes = Themes;
  public readonly MEDICAL_CENTERS = MEDICAL_CENTERS;
  public readonly selectedCenter = this.MEDICAL_CENTERS[0];
  public isMobile = signal(window.innerWidth < 600);
  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(window.innerWidth < 600);
  }

  constructor() {
    this.ROUTER.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateRouteData();
    });
    this.updateRouteData();
  }

  private updateRouteData(): void {
    this.setDefault();

    const CURRENT_ROUTE = this.getCurrentRoute(this.ROUTER.routerState.root);

    if (CURRENT_ROUTE?.snapshot?.data) {
      this.showHeader.set(CURRENT_ROUTE.snapshot.data?.['showHeader'] || false);
      this.hideFooter.set(CURRENT_ROUTE.snapshot.data?.['hideFooter'] || false);

      this.showBack.set(CURRENT_ROUTE.snapshot.data?.['showBack']);

      this.headerTitle.set(CURRENT_ROUTE.snapshot.data?.['headerTitle'] || '');

      this.backAddress.set(CURRENT_ROUTE.snapshot.data?.['backAddress'] || '');

      this.hideLoginButton.set(CURRENT_ROUTE.snapshot.data?.['hideLoginButton'] || false);
      this.headerHasBackGround.set(CURRENT_ROUTE.snapshot.data?.['headerHasBackGround'] || false);
      if (CURRENT_ROUTE.snapshot.data?.['dynamicHeaderTitle']) {
        this.headerTitle.set(this.APP_FACADE.dynanicHeaderTitle() || '');
      }
    } else {
      this.setDefault();
    }
  }

  private setDefault(): void {
    this.showHeader.set(true);
    this.hideFooter.set(true);
    this.headerTitle.set('');
    this.showBack.set(false);
    this.backAddress.set('/');
  }

  private getCurrentRoute(route: ActivatedRoute): ActivatedRoute {
    if (route.firstChild) {
      return this.getCurrentRoute(route.firstChild);
    }

    return route;
  }
  public toggleTheme() {
    this.APP_FACADE.toggleTheme();
    this.cdr.markForCheck();
  }
  private cdr = inject(ChangeDetectorRef);
}
