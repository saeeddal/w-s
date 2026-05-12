import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { filter } from 'rxjs';
import { AppFacade } from '@app/core/app.facade';
import { Themes } from '@app/core/base-services/models/themes.enum';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BmnMainLayoutComponent {
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
