/* eslint-disable @typescript-eslint/no-explicit-any */
// persian-datepicker.component.ts
import { Component, input, signal, forwardRef } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PersianDateTimePickerModule } from 'persian-date-time-picker-signal';

@Component({
  selector: 'pt-persian-datepicker',
  imports: [PersianDateTimePickerModule, FormsModule],
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
  calendarType = input<'jalali' | 'gregorian'>('jalali');
  isRange = input<boolean>(false);
  format = input<string>('yyyy/MM/dd');
  disabled = input<boolean>(false);
  rtl = input<boolean>(true);

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

  setDisabledState?() // isDisabled: boolean
  : void {
    // Handle disabled state if needed
  }

  // Method to handle value changes from the date picker
  onDateChange(value: any): void {
    this.selectedDate.set(value);
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
