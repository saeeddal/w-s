/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import type { AfterViewInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  forwardRef,
  inject,
  Input,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { Subscription } from 'rxjs';

import { PtImage } from '../image/image';
import { PtRadioButtonGroup } from '../radio-button-group/radio-button-group';
import {
  UIKIT_EMPTY_FUNCTION,
  UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT,
} from '../../uikit-empty.constant';

@Component({
  selector: 'pt-radio-button',
  imports: [CommonModule, FormsModule, PtImage],
  templateUrl: './radio-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './radio-button.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PtRadioButton),
      multi: true,
    },
  ],
})
export class PtRadioButton implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private _id: any = `radio-button-${String(Math.floor(Math.random() * 1000) + new Date().getTime())}`;
  private readonly radioButtonGroup = inject(PtRadioButtonGroup, {
    optional: true,
  });

  private subscription: Subscription = null!;

  @Input()
  public name = 'radio-button-group';

  @Input()
  public value: any;

  @Input()
  public disabled = false;

  @Input()
  public isInVoucherEarn = false;

  public destroyRef = inject(DestroyRef);
  public internalValue!: any;
  public changed = UIKIT_EMPTY_FUNCTION_UNI_ARGUMENT;
  public touched = UIKIT_EMPTY_FUNCTION;

  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  @Input()
  public set id(v: any) {
    this._id = v;

    if (this.radioButtonGroup) {
      this.value = v;
      this.changeDetectorRef.markForCheck();
    }
  }

  public get id(): any {
    return this._id;
  }

  public onChange(): void {
    this.changed(this.internalValue);
    this.radioButtonGroup?.set(this.id);
  }

  public writeValue(value: boolean): void {
    this.internalValue = value;
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
    if (this.radioButtonGroup) {
      this.subscription = this.radioButtonGroup.onGroupChange
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((id: any) => {
          this.internalValue = id;
          this.changeDetectorRef.markForCheck();
        });
      this.radioButtonGroup.emit();
    }
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
