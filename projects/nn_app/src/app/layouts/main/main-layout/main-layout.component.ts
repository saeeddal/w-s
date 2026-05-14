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
import { PtBasicCard, PtLabel, UK_TYPE } from '../../../../../../pars-lib/src/public-api';
import { MEDICAL_CENTERS } from '../helper/mock-data';
import { Sidebar } from '../components/sidebar/sidebar';
import { Header } from '../components/header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    CommonModule,
    PtBasicCard,
    PtLabel,
    Sidebar,
    Header,
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
}
