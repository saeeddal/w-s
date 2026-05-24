import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppFacade } from '@app/core/app.facade';
import {
  PtButton,
  PtIcon,
  PtImage,
  PtLabel,
  PtSelect,
  UK_TYPE,
} from '../../../../../../../pars-lib/src/public-api';
import { Themes } from '@app/core/base-services/models/themes.enum';
import { MEDICAL_CENTERS } from '../../helper/mock-data';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, CommonModule, PtImage, PtLabel, PtSelect, PtButton, PtIcon],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './header.component.scss',
})
export class Header {
  public readonly APP_FACADE = inject(AppFacade);
  public readonly ROUTER = inject(Router);
  public readonly THEMES = Themes;
  public readonly MEDICAL_CENTERS = MEDICAL_CENTERS;
  public readonly SELECTED_CENTER = this.MEDICAL_CENTERS[0];
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

  public isMobile = signal(window.innerWidth < 600);
  private cdr = inject(ChangeDetectorRef);
  @HostListener('window:resize')
  public onResize() {
    this.isMobile.set(window.innerWidth < 600);
  }

  public toggleTheme() {
    this.APP_FACADE.toggleTheme();
    this.cdr.markForCheck();
  }

  public toggleSidebar() {
    this.APP_FACADE.toggleSidebar();
    this.cdr.markForCheck();
  }
}
