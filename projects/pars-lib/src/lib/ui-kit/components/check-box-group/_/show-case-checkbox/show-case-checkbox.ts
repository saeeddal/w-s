import { Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PtCheckBox } from '../../../check-box/check-box';
import { PtCheckBoxGroup } from '../../check-box-group';
import { UK_TYPE } from '../../../../../uk-type';
import { PtLabel } from '../../../label/label';

@Component({
  selector: 'pt-show-case-checkbox',
  imports: [PtCheckBox, PtCheckBoxGroup, ReactiveFormsModule, FormsModule, PtLabel],
  templateUrl: './show-case-checkbox.html',
  styleUrl: './show-case-checkbox.scss',
})
export class PtShowCaseCheckbox {
  public readonly UK_TYPE = UK_TYPE;
  public selectedValues = [1, 2];
  public checkBoxItems: { value: number; label: string; disabled: boolean }[] = [
    {
      value: 1,
      label: 'نقد',
      disabled: false,
    },
    {
      value: 2,
      label: 'اقساط',
      disabled: false,
    },
    {
      value: 3,
      label: 'رایگان',
      disabled: false,
    },
    {
      value: 4,
      label: 'جدید و دیزیبل',
      disabled: true,
    },
  ];
}
