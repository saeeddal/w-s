import { CommonModule } from '@angular/common';
import type { OnInit, Signal } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppFacade } from '@app/core/app/app.facade';
import {
  PtButton,
  PtIcon,
  PtImage,
  PtLabel,
  PtSelect,
  UK_TYPE,
  PtToggleSwitch,
} from '@pars-lib/public-api';
import { Themes } from '@app/core/services/models/themes.enum';
import { CenterFacade } from '@app/features/centers/centers.facade';
import type { ICenterInfo } from '@app/shared/models/dto/center/center-info.interface';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    PtImage,
    PtLabel,
    PtSelect,
    PtButton,
    PtIcon,
    PtToggleSwitch,
    ReactiveFormsModule,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './header.component.scss',
})
export class Header implements OnInit {
  public readonly APP_FACADE = inject(AppFacade);
  public readonly CENTER_FACADE = inject(CenterFacade);
  public readonly ROUTER = inject(Router);
  public readonly THEMES = Themes;
  public readonly UK_TYPE = UK_TYPE;
  public reduceHeightForPwaIphone = signal(200);
  public isOnline = signal(true);
  public showHeader = signal(true);
  public showFooter = signal(true);
  public fixSidebar = signal(false);

  public hideFooter = signal(false);
  public showBack = signal(false);
  public hideLoginButton = signal(false);
  public headerTitle = signal('');
  public backAddress = signal('');
  public headerHasBackGround = signal(false);

  public readonly centerFacade = inject(CenterFacade);
  public readonly medicalCenters: Signal<ICenterInfo[] | null> = this.centerFacade.centers;
  public readonly selectedCenter = this.centerFacade.selectedCenter;

  public isMobile = signal(window.innerWidth < 600);
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

  public onMedicalCentersChange(selectedCenter: ICenterInfo | unknown) {
    this.centerFacade.setSelectedCenter(selectedCenter as ICenterInfo);
  }

  ngOnInit(): void {
    if (!this.centerFacade.centers() || !this.centerFacade.centers()?.length) {
      this.centerFacade.getListSelectCenter();
    }
  }
  private cdr = inject(ChangeDetectorRef);
}
