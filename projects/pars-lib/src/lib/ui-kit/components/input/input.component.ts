import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputBorderColor, InputType } from './_/input.type';
import { BmnConvertPersianDigitsDirective } from '../../directives/persian-number.directive';
import DEFAULT from '../../prepared-config';
import { UK_TYPE } from '../../../uk-type';
import {
  UIKIT_EMPTY_FUNCTION,
  UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT,
} from '../../uikit-empty.constant';

@Component({
  selector: 'pt-input',
  imports: [
    FormsModule,
    FormsModule,
    CommonModule,
    // NgxMaskDirective,
    BmnConvertPersianDigitsDirective,
  ],
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
  // @Input()
  // public type: 'NUMBER' | 'TEXT' = 'TEXT';

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

  public val!: any;
  public changed = UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT;
  public touched = UIKIT_EMPTY_FUNCTION;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  public onBlur(): void {
    this.touched();
    // this.ON_BLUR.emit(true);
  }

  public onFocus(): void {
    this.ON_BLUR.emit(false);
  }

  public onChange(): void {
    const val = this.val;

    this.changed(val);
  }

  public writeValue(value: boolean): void {
    this.val = value;
    this.changeDetectorRef.markForCheck();
  }

  public clearValue(): void {
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
  }
}
