import { Component } from '@angular/core';

import { PtLabel, PtRadioButton, PtRadioButtonGroup, UK_TYPE } from '../../../../../../public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pt-show-case-radio',
  imports: [PtRadioButtonGroup, PtRadioButton, ReactiveFormsModule, FormsModule, PtLabel],
  templateUrl: './show-case-radio.html',
  styleUrl: './show-case-radio.scss',
})
export class PtShowCaseRadio {
  public readonly UK_TYPE = UK_TYPE;
  public tempValueRadioGroup!: number;
  public radioBoxItems: { id: number; text: string; disabled: boolean }[] = [
    {
      id: 1,
      text: 'نقد',
      disabled: false,
    },
    {
      id: 2,
      text: 'اقساط',
      disabled: false,
    },
    {
      id: 3,
      text: 'رایگان',
      disabled: false,
    },
    {
      id: 4,
      text: 'جدید و دیزیبل',
      disabled: true,
    },
  ];
}
