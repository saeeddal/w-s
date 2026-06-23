/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import type { TemplateRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  forwardRef,
  inject,
  Input,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { UK_TYPE } from '../../../uk-type';
import {
  UIKIT_EMPTY_FUNCTION,
  UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT,
} from '../../uikit-empty.constant';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'pt-multi-select',
  standalone: true,
  imports: [MultiSelectModule, FormsModule, NgTemplateOutlet],
  templateUrl: './multi-select.html',
  styleUrl: './multi-select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PtMultiSelect),
      multi: true,
    },
  ],
})
export class PtMultiSelect<T extends { id: number | string }> implements ControlValueAccessor {
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
  public items: T[] = [];

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

  @ContentChild('itemTemplate') customItemTemplate: TemplateRef<any> | undefined;

  defaultItemTemplate!: TemplateRef<any | undefined>;

  public readonly UK_TYPE = UK_TYPE;

  public innerValue: T[] = [];
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
