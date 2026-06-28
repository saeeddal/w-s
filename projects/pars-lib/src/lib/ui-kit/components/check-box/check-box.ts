// check-box.ts
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
  private _id: any = `checkbox-${String(Math.floor(Math.random() * 1000) + new Date().getTime())}`;
  private readonly checkboxGroup = inject(PtCheckBoxGroup, { optional: true });
  private subscription: Subscription = null!;
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  @Input()
  public name = `check-box-group-${this.id}`;

  @Input()
  public value: any; // This is the checkbox VALUE (what gets stored in the group)

  @Input()
  public disabled = false;

  // This is the CHECKED state
  public isChecked = false;

  public changed = UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT;
  public touched = UIKIT_EMPTY_FUNCTION;

  @Input()
  public set id(v: any) {
    this._id = v;
    // CRITICAL: Set the value to the id when it's provided
    this.value = v;
    if (this.checkboxGroup) {
      this.changeDetectorRef.markForCheck();
    }
  }

  public get id(): any {
    return this._id;
  }

  public onChange(): void {
    // When checkbox is clicked, toggle the checked state
    this.isChecked = !this.isChecked;

    // Emit the value (not the checked state)
    this.changed(this.value);
    this.checkboxGroup?.update(this.value);

    this.changeDetectorRef.markForCheck();
  }

  public writeValue(value: any): void {
    // CRITICAL FIX: Value comes from the group - this is the array of selected values
    if (this.checkboxGroup) {
      // Check if this checkbox's value is in the group's selected values
      this.isChecked = Array.isArray(value) ? value.includes(this.value) : false;
    } else {
      // Standalone mode - value is boolean
      this.isChecked = !!value;
    }
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

  public ngAfterViewInit(): void {
    if (this.checkboxGroup) {
      this.subscription = this.checkboxGroup.onGroupChange.subscribe((selectedValues: any[]) => {
        // Update checked state based on group's selected values
        this.isChecked = Array.isArray(selectedValues)
          ? selectedValues.includes(this.value)
          : false;
        this.changeDetectorRef.markForCheck();
      });
      // Initial sync
      this.checkboxGroup.emit();
    }
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
