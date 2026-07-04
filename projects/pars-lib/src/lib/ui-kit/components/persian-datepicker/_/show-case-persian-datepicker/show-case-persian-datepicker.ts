import { Component, signal } from '@angular/core';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UK_TYPE } from '../../../../../uk-type';
import { PtPersianDatepicker } from '../../persian-datepicker';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'pt-show-case-persian-datepicker',
  imports: [ReactiveFormsModule, FormsModule, PtPersianDatepicker, JsonPipe],
  templateUrl: './show-case-persian-datepicker.html',
  styleUrl: './show-case-persian-datepicker.scss',
})
export class PtShowCasePersianDatepicker {
  public readonly UK_TYPE = UK_TYPE;
  public myDate = signal(new Date());
  public myDate2 = new FormControl(new Date());
}
