/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pt-toggle-switch',
  standalone: true,
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PtToggleSwitch),
      multi: true,
    },
  ],
})
export class PtToggleSwitch implements ControlValueAccessor {
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<boolean>();

  @Input() value = false;

  // ControlValueAccessor methods
  onChange: any = () => {};
  onTouched: any = () => {};

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.checked;
    this.onChange(this.value);
    this.onTouched();
    this.valueChange.emit(this.value);
  }

  // Write a new value to the element
  writeValue(value: any): void {
    this.value = value;
  }

  // Register a function to call when the value changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Register a function to call when the control is touched
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Set the disabled state
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
