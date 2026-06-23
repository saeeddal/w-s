/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import { CommonModule } from '@angular/common';
import type { AfterViewInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, forwardRef, inject, Input } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import type { Subscription } from 'rxjs';
import { PtCheckBoxGroup } from '../check-box-group/check-box-group';
import {
  UIKIT_EMPTY_FUNCTION,
  UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT,
} from '../../uikit-empty.constant';

@Component({
  selector: 'pt-check-box',
  imports: [CommonModule, FormsModule],
  templateUrl: './check-box.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './check-box.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PtCheckBox),
      multi: true,
    },
  ],
})
export class PtCheckBox implements ControlValueAccessor, AfterViewInit, OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _id: any = `radio-button-${String(Math.floor(Math.random() * 1000) + new Date().getTime())}`;
  private readonly checkboxGroup = inject(PtCheckBoxGroup, { optional: true });

  private subscription: Subscription = null!;

  @Input()
  public name = `check-box-group-${this.id}`;

  @Input()
  public value: any;

  @Input()
  public disabled = false;

  public internalValue!: any;
  public changed = UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT;
  public touched = UIKIT_EMPTY_FUNCTION;

  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  @Input()
  public set id(v: any) {
    this._id = v;

    if (this.checkboxGroup) {
      this.internalValue = v;
      this.changeDetectorRef.markForCheck();
    }
  }

  public get id(): any {
    return this._id;
  }

  public onChange(): void {
    const val = this.value;

    this.changed(val);
    this.checkboxGroup?.update(this.id);
  }

  public writeValue(value: boolean): void {
    this.value = value;
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

  public ngAfterViewInit(): void {
    if (this.checkboxGroup) {
      this.subscription = this.checkboxGroup.onGroupChange.subscribe((ids: any[]) => {
        if (ids?.length >= 0) {
          this.value = ids.includes(this.internalValue);
          this.changeDetectorRef.markForCheck();
        }
      });
      this.checkboxGroup.emit();
    }
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
