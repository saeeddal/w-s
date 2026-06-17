/* eslint-disable @typescript-eslint/no-explicit-any */
// persian-datepicker.component.ts
// persian-datepicker.component.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
// persian-datepicker.component.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, input, signal, forwardRef, Output, EventEmitter } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { PersianDateTimePickerModule } from 'persian-date-time-picker-signal';
import type { CalenderType, PersianDateFormat } from './_/persian-date-format';
import { PtCalenderType, PtPersianDateFormat } from './_/persian-date-format';

@Component({
  selector: 'pt-persian-datepicker',
  imports: [PersianDateTimePickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './persian-datepicker.html',
  styleUrl: './persian-datepicker.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PtPersianDatepicker),
      multi: true,
    },
  ],
})
export class PtPersianDatepicker implements ControlValueAccessor {
  // Inputs
  minDate = input<string>('');
  maxDate = input<string>('');
  calendarType = input<CalenderType>(PtCalenderType.JALALI);
  isRange = input<boolean>(false);
  format = input<PersianDateFormat>(PtPersianDateFormat.DATE_DASH);
  disabled = input<boolean>(false);
  rtl = input<boolean>(true);

  // Output for two-way binding
  @Output() selectedDateChange = new EventEmitter<any>();

  // Internal state
  selectedDate = signal<any>('');

  // ControlValueAccessor methods
  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this.selectedDate.set(value);
    } else {
      this.selectedDate.set('');
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDisabledState(isDisabled: boolean): void {
    // Handle disabled state if needed
  }

  // Method to handle value changes from the date picker
  onDateChange(value: any): void {
    this.selectedDate.set(value);
    this.selectedDateChange.emit(value);
    this.onChange(value);
    this.onTouched();
  }

  // Helper method to set value programmatically
  setValue(value: any): void {
    this.writeValue(value);
    this.onChange(value);
  }

  // ControlValueAccessor callbacks
  public onTouched: any = () => {};
  private onChange: any = () => {};
}
// https://github.com/soheilMohammadix/persian-date-time-picker-signal
