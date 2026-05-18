import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppFacade } from '@app/core/app.facade';
import { FormsModule } from '@angular/forms';
import { PtBasicCard, UK_TYPE } from '../../../../../../pars-lib/src/public-api';
import { Sidebar } from '../components/sidebar/sidebar';
import { Header } from '../components/header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, CommonModule, FormsModule, CommonModule, PtBasicCard, Sidebar, Header],
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
  private cdr = inject(ChangeDetectorRef);
  public toggleSidebar() {
    this.APP_FACADE.toggleSidebar();
    this.cdr.markForCheck();
  }
}
