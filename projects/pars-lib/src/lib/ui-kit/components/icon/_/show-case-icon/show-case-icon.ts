import { Component } from '@angular/core';

import { PtIcon, UK_TYPE } from '../../../../../../public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pt-show-case-icon',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, PtIcon],
  templateUrl: './show-case-icon.html',
  styleUrl: './show-case-icon.scss',
})
export class PtShowCaseIcon {
  public readonly UK_TYPE = UK_TYPE;
}
