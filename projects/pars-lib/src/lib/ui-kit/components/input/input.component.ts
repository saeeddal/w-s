/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
// pt-input.component.ts
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  inject,
  Input,
  Output,
  effect,
  signal,
  ChangeDetectorRef,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BmnConvertPersianDigitsDirective } from '../../directives/persian-number.directive';
import DEFAULT from '../../prepared-config';
import { UK_TYPE } from '../../../uk-type';
import {
  UIKIT_EMPTY_FUNCTION,
  UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT,
} from '../../uikit-empty.constant';
import type { InputBorderColor, InputType } from './_/input.type';

@Component({
  selector: 'pt-input',
  imports: [FormsModule, CommonModule, BmnConvertPersianDigitsDirective],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PtInput),
      multi: true,
    },
  ],
  styleUrl: './input.component.scss',
})
export class PtInput implements ControlValueAccessor {
  @Input()
  public inputType: InputType = DEFAULT.input.type;

  @Input()
  public value: any;

  @Input()
  public disabled = false;

  @Input()
  public isDisabled = false;

  @Input()
  public placeholder = '';

  @Input()
  public borderColor: InputBorderColor = DEFAULT.input.borderColor;

  @Output()
  public readonly KEY_UP = new EventEmitter<any>();

  @Output()
  public readonly ON_BLUR = new EventEmitter<boolean>();

  @Output()
  public readonly ON_FOCUS = new EventEmitter<null>();

  @Input()
  public hasRedBorderWhenActive = UK_TYPE.BOOLEAN_TYPE.FALSE;

  @Input()
  public maxLength: number = null!;

  public readonly UK_TYPE = UK_TYPE;
  public changeDetectorRef = inject(ChangeDetectorRef);

  // Use signal for internal state
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private internalValue = signal<any>('');

  // Computed signal for the input value
  public inputValue = this.internalValue.asReadonly();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public val!: any;
  public changed = UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT;
  public touched = UIKIT_EMPTY_FUNCTION;

  constructor() {
    // Keep val in sync with internalValue for ngModel compatibility
    effect(() => {
      this.val = this.internalValue();
    });
  }

  public onBlur(): void {
    this.touched();
  }

  public onFocus(): void {
    this.ON_BLUR.emit(false);
  }

  public onChange(event?: Event): void {
    const target = event?.target as HTMLInputElement;
    const value = target?.value ?? this.val;

    this.internalValue.set(value);
    this.val = value;
    this.changed(value);
  }

  public writeValue(value: boolean): void {
    this.internalValue.set(value);
    this.val = value;
    this.changeDetectorRef.markForCheck();
  }

  public clearValue(): void {
    this.internalValue.set('');
    this.val = '';
    this.onChange();
    this.changeDetectorRef.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
    this.changeDetectorRef.markForCheck();
  }
}
