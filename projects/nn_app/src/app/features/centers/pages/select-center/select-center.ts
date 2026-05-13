import { Component, inject, model } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  PtBasicCard,
  PtButton,
  PtImage,
  PtLabel,
  PtSelect,
  UK_TYPE,
  PtIcon,
} from '../../../../../../../pars-lib/src/public-api';
import { IMedicalCenter } from '@app/shared/models/dto/medical-center';
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
  private readonly ROUTER = inject(Router);
  public readonly UK_TYPE = UK_TYPE;
  public selectedCenter!: number;
  public medicalCenters: IMedicalCenter[] = [
    { id: 1, title: 'شخصی' },
    { id: 2, title: 'عمومی' },
  ];
}
