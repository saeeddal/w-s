import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersianDateTimePickerModule } from 'persian-date-time-picker-signal';

@Component({
  selector: 'pt-persian-datepicker',
  imports: [PersianDateTimePickerModule, FormsModule],
  templateUrl: './persian-datepicker.html',
  styleUrl: './persian-datepicker.scss',
})
export class PtPersianDatepicker {
  selectedDate: Date | string = '1403/01/01';
}
