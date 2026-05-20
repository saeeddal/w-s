import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PtBasicCard, PtKeyVal, PtLabel, UK_TYPE } from '../../../../../../pars-lib/src/public-api';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'info-patient',
  imports: [CommonModule, FormsModule, RouterModule, PtLabel, PtKeyVal, PtBasicCard],
  templateUrl: './info-patient.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './info-patient.scss',
})
export class InfoPatient {
  public readonly UK_TYPE = UK_TYPE;
  public title = input.required();
  public details = input.required<Record<string, string>>();
}
