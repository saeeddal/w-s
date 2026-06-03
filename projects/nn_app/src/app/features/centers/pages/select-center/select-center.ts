import { Component, inject } from '@angular/core';
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
export class SelectCenter {
  public readonly UK_TYPE = UK_TYPE;
  public selectedCenter!: number;
  public medicalCenters: IMedicalCenter[] = MEDICAL_CENTERS;
  private readonly ROUTER = inject(Router);
}
