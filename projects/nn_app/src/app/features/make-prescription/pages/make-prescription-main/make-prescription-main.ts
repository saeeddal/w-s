import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  PtLabel,
  PtBasicCard,
  PtInput,
  PtIcon,
  UK_TYPE,
  PtButton,
  PtImage,
  PtSelect,
} from '../../../../../../../pars-lib/src/public-api';
import { InfoPatient } from '@app/shared/components/insurance-identify/info-patient';
import { DoctorInfo, IdentifyInfo, InsuranceInfo } from '../../helpers/mock-data';
import { IMedicalCenter } from '@app/shared/models/dto/medical-center';
import { IdTitle } from '@app/shared/models/common/common.interface';

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
    InfoPatient,
    PtImage,
    PtSelect,
  ],
  templateUrl: './make-prescription-main.html',
  styleUrl: './make-prescription-main.scss',
})
export class MakePrescriptionMain {
  private readonly ROUTER = inject(Router);
  public readonly UK_TYPE = UK_TYPE;
  public phoneNumberBlurred = false;
  public onInputBlur(statusOfBlur: boolean): void {
    this.phoneNumberBlurred = statusOfBlur;
  }
  public readonly identifyInfo = IdentifyInfo;
  public readonly insuranceInfo = InsuranceInfo;
  public selectedCenter!: number;
  public medicalCenters: IdTitle[] = [
    { id: 1, title: 'دکتر بالتازار' },
    { id: 2, title: 'دکتر معین' },
  ];
  public patientPhoneNumber = '09108582385';
  public readonly isDoctor = signal(true);
  public readonly doctorInfo = signal(DoctorInfo);
  public readonly showSearch = signal(true);
}
