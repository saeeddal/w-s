import type { OnInit } from '@angular/core';
import { Component, inject, signal } from '@angular/core';
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
import type { IMedicalCenter } from '@app/shared/models/dto/medical-center';
import { MEDICAL_CENTERS } from '@app/layouts/main/helper/mock-data';
import type { IIdTitle } from '@app/shared/models/common/common.interface';
import { CenterFacade } from '../../centers.facade';
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
  styleUrl: './select-center.scss',
})
export class SelectCenter implements OnInit {
  public readonly UK_TYPE = UK_TYPE;
  public selectedCenter = signal<IIdTitle | null>(null);
  public medicalCenters: IMedicalCenter[] = MEDICAL_CENTERS;
  public readonly centerFacade = inject(CenterFacade);

  ngOnInit(): void {
    if (this.centerFacade.selectedCenter()) {
      this.ROUTER.navigate(['/']);
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
