/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

const RADIO_BUTTON_GROUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PtRadioButtonGroup),
  multi: true,
};

@Component({
  selector: 'pt-radio-button-group',
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-button-group.html',
  styleUrls: ['./radio-button-group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RADIO_BUTTON_GROUP_VALUE_ACCESSOR],
})
export class PtRadioButtonGroup implements ControlValueAccessor {
  private _internalValue: any;
  private onChange!: (m: any) => void;
  private onTouched!: (m: any) => void;

  public onGroupChange = new Subject<any>();

  public get model(): any {
    return this._internalValue;
  }

  public writeValue(value: any): void {
    this._internalValue = value;
    this.onGroupChange.next(this._internalValue);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public emit(): void {
    this.onGroupChange.next(this._internalValue);
  }

  public set(value: any): void {
    this._internalValue = value;
    this.onChange(this._internalValue);
    this.onGroupChange.next(this._internalValue);
  }
}
