/* eslint-disable @typescript-eslint/no-unused-vars */
// check-box-group.ts
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'pt-check-box-group',
  imports: [CommonModule, FormsModule],
  templateUrl: './check-box-group.html',
  styleUrls: ['./check-box-group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PtCheckBoxGroup),
      multi: true,
    },
  ],
})
export class PtCheckBoxGroup implements ControlValueAccessor {
  private _internalValue: any[] = [];
  private onChange!: (value: any[]) => void;
  private onTouched!: () => void;
  private cdr = inject(ChangeDetectorRef);

  public onGroupChange = new Subject<any[]>();

  public get model(): any[] {
    return this._internalValue;
  }

  public writeValue(value: any[]): void {
    this._internalValue = Array.isArray(value) ? [...value] : [];
    // Emit the updated values to all child checkboxes
    this.onGroupChange.next([...this._internalValue]);
    this.cdr.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    // Handle disabled state if needed
  }

  public set(value: any[]): void {
    this._internalValue = Array.isArray(value) ? [...value] : [];
    this.onChange(this._internalValue);
    this.onGroupChange.next([...this._internalValue]);
    this.cdr.markForCheck();
  }

  public emit(): void {
    this.onGroupChange.next([...this._internalValue]);
  }

  public update(value: any): void {
    const index = this._internalValue.indexOf(value);

    if (index < 0) {
      this._internalValue.push(value);
    } else {
      this._internalValue.splice(index, 1);
    }

    // Notify Angular forms
    this.onChange([...this._internalValue]);
    // Notify child checkboxes
    this.onGroupChange.next([...this._internalValue]);
    this.cdr.markForCheck();
  }
}
