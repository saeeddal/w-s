import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  PtBasicCard,
  PtButton,
  PtIcon,
  PtImage,
  PtInput,
  PtLabel,
  PtSelect,
  UK_TYPE,
} from '../../../../../../../pars-lib/src/public-api';
import type { IIdTitle } from '@app/shared/models/common/common.interface';
import { InfoPatient } from '@app/shared/components/insurance-identify/info-patient';
import { DOCTOR_INFO, IDENTIFY_INFO, INSURANCE_INFO } from '../../helpers/mock-data';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-make-prescription-main',
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    PtLabel,
    PtBasicCard,
    PtInput,
    PtIcon,
    PtButton,
    PtImage,
    PtSelect,
    InfoPatient,
  ],
  templateUrl: './make-prescription-main.html',
  styleUrl: './make-prescription-main.scss',
})
export class MakePrescriptionMain {
  public phoneNumberBlurred = false;
  public readonly UK_TYPE = UK_TYPE;
  public patientPhoneNumber = '09108582385';
  public readonly IDENTIFY_INFO = IDENTIFY_INFO;
  public readonly INSURANCE_INFO = INSURANCE_INFO;
  public readonly IS_DOCTOR = signal(true);
  public readonly DOCTOR_INFO = signal(DOCTOR_INFO);
  public readonly SHOW_SEARCH = signal(true);
  public selectedCenter!: number;
  public medicalCenters: IIdTitle[] = [
    { id: 1, title: 'دکتر بالتازار' },
    { id: 2, title: 'دکتر معین' },
  ];
  public onInputBlur(statusOfBlur: boolean): void {
    this.phoneNumberBlurred = statusOfBlur;
  }
  private readonly ROUTER = inject(Router);
}
