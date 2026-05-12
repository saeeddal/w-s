import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  forwardRef,
  inject,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import {
  SelectBgColor,
  SelectBorderColor,
  SelectBorderRadius,
  SelectFgColor,
  SelectItemsAppearance,
  SelectMarginRight,
} from './_/select.type';
import DEFAULT from '../../prepared-config';
import { BooleanType, CrudMode } from '../../definitions/uk.type';
import { UK_TYPE } from '../../../uk-type';
import {
  UIKIT_EMPTY_FUNCTION,
  UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT,
} from '../../uikit-empty.constant';

@Component({
  selector: 'pt-select',
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
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
  public bgColor: SelectBgColor = DEFAULT.select.bgColor;

  @Input()
  public fgColor: SelectFgColor = DEFAULT.select.fgColor;

  @Input()
  public borderColor: SelectBorderColor = DEFAULT.select.borderColor;

  @Input()
  public borderRadius: SelectBorderRadius = DEFAULT.select.borderRadius;

  @Input()
  public itemsAppearance: SelectItemsAppearance = DEFAULT.select.itemsAppearance;

  @Input()
  public multiSelect: BooleanType = DEFAULT.select.multiSelect;

  @Input()
  public placeholder = '';

  @Input()
  public parentForm: FormGroup = null!;

  @Input()
  public fieldName = '';

  @Input()
  public isDisabled = false;

  @Input()
  public isSilentDisabled = false;

  @Input()
  public hasBorder = true;

  @Input()
  public hasFocus = false;

  @Input()
  public items: any = [];

  @Input()
  public bindValue = 'id';

  @Input()
  public bindLabel = 'name';

  @Input()
  public isInSelectSearch = false;

  @Input()
  public hasIconBefore = false;

  @Input()
  public modalTitle = '';

  @Input()
  public crudMode: CrudMode = DEFAULT.input.crudMode;

  @Input()
  public searchPlaceholder = 'عنوان جستجو';

  @Input()
  public searchProperty = '';

  @Input()
  public firstSelection = true;

  @Input()
  public marginRight: SelectMarginRight = DEFAULT.select.marginRight;

  public readonly UK_TYPE = UK_TYPE;

  public innerValue: any = null!;
  public destroyRef = inject(DestroyRef);
  public changed = UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT;
  public touched = UIKIT_EMPTY_FUNCTION;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  public get formControl(): FormControl | null {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  public writeValue(value: string): void {
    this.innerValue = value;
    this.changeDetectorRef.markForCheck();
  }

  public onChange(value: any): void {
    this.changed(value);
  }

  public onTouche(): void {
    this.touched();
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.isDisabled = disabled;
  }
}
