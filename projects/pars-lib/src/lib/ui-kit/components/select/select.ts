/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'pt-select',
  standalone: true,
  imports: [...SelectModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsSelectComponent),
      multi: true,
    },
  ],
})
export class DsSelectComponent implements ControlValueAccessor {
  options = input<any[]>([]);

  optionLabel = input<string>('label');

  optionValue = input<string>('value');

  multiple = input(false);

  searchable = input(false);

  clearable = input(false);

  disabled = input(false);

  theme = input<'light' | 'dark'>('light');

  value = signal<any>(null);

  readonly isDark = computed(() => this.theme() === 'dark');

  private onChange = (_: any) => {};

  private onTouched = () => {};

  writeValue(value: any): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDisabledState(disabled: boolean): void {
    // optional internal handling
  }

  valueChanged(value: any): void {
    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }
}
