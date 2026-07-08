import { Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UK_TYPE } from '../../../../../uk-type';
import { PtDivider } from '../../divider';

@Component({
  selector: 'pt-show-case-divider',
  imports: [ReactiveFormsModule, FormsModule, PtDivider],
  templateUrl: './show-case-divider.html',
  styleUrl: './show-case-divider.scss',
})
export class PtShowCaseDivider {
  public readonly UK_TYPE = UK_TYPE;
}
