/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  forwardRef,
  inject,
  Input,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { UK_TYPE } from '../../../uk-type';
import {
  UIKIT_EMPTY_FUNCTION,
  UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT,
} from '../../uikit-empty.constant';

@Component({
  selector: 'pt-select',
  standalone: true,
  imports: [SelectModule, FormsModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PtSelect),
      multi: true,
    },
  ],
})
export class PtSelect implements ControlValueAccessor {
  @Input()
  public placeholder = '';

  @Input()
  public fieldName = '';

  @Input()
  public isDisabled = false;

  @Input()
  public isSilentDisabled = false;

  @Input()
  public hasFocus = false;

  @Input()
  public items: any = [];

  @Input()
  public bindValue: string | undefined = undefined;

  @Input()
  public bindLabel = 'name';

  @Input()
  public isInSelectSearch = false;

  @Input()
  public hasIconBefore = false;

  @Input()
  public modalTitle = '';

  @Input()
  public searchPlaceholder = 'عنوان جستجو';

  @Input()
  public searchProperty = '';

  @Input()
  public firstSelection = true;

  public readonly UK_TYPE = UK_TYPE;

  public innerValue: any = null!;
  public destroyRef = inject(DestroyRef);
  public changeDetectorRef = inject(ChangeDetectorRef);

  // ✅ These should be properly initialized
  public changed = UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT;
  public touched = UIKIT_EMPTY_FUNCTION;

  // ✅ Implement ControlValueAccessor methods properly
  public writeValue(value: any): void {
    this.innerValue = value;
    this.changeDetectorRef.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  // ✅ Handle change events properly
  public onModelChange(value: any): void {
    this.innerValue = value;
    this.changed(value);
  }

  public onTouch(): void {
    this.touched();
  }
}
