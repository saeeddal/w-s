import { Component, inject } from '@angular/core';
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
} from '../../../../../../../pars-lib/src/public-api';
import { InsuranceIdendify } from '@app/shared/components/insurance-identify/insurance-identify';

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
    InsuranceIdendify,
    PtImage,
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
}
