import type { OnInit, Signal } from '@angular/core';
import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  PtBasicCard,
  PtButton,
  PtIcon,
  PtImage,
  PtLabel,
  PtSelect,
  UK_TYPE,
} from '../../../../../../../pars-lib/src/public-api';
import { CenterFacade } from '../../centers.facade';
import type { ICenterInfo } from '@app/shared/models/dto/center/center-info.interface';
@Component({
  selector: 'app-select-center',
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    PtImage,
    PtBasicCard,
    PtLabel,
    PtSelect,
    PtButton,
    PtIcon,
  ],
  templateUrl: './select-center.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './select-center.scss',
})
export class SelectCenter implements OnInit {
  public readonly UK_TYPE = UK_TYPE;
  public selectedCenter = signal<ICenterInfo | null>(null);
  public readonly centerFacade = inject(CenterFacade);
  public medicalCenters: Signal<ICenterInfo[] | null> = this.centerFacade.centers;

  ngOnInit(): void {
    if (this.centerFacade.selectedCenter()) {
      this.ROUTER.navigate(['/']);
    }
    if (!this.centerFacade.centers() || !this.centerFacade.centers()?.length) {
      this.centerFacade.getListSelectCenter();
    }
  }
  public setSelectedCenter() {
    const center = this.selectedCenter();
    if (center) {
      this.centerFacade.setSelectedCenter(center);
      this.ROUTER.navigate(['/']);
    }
  }

  private readonly ROUTER = inject(Router);
}
