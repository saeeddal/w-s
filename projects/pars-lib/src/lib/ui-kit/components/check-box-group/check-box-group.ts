/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CHECK_BOX_GROUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PtCheckBoxGroup),
  multi: true,
};

@Component({
  selector: 'pt-check-box-group',
  imports: [CommonModule, FormsModule],
  templateUrl: './check-box-group.html',
  styleUrls: ['./check-box-group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CHECK_BOX_GROUP_VALUE_ACCESSOR],
})
export class PtCheckBoxGroup implements ControlValueAccessor {
  private _internalValue: any[] = [];
  private onChange!: (m: any) => void;
  private onTouched!: (m: any) => void;

  public onGroupChange = new Subject<any>();

  public get model(): any[] {
    return this._internalValue;
  }

  public writeValue(value: any[]): void {
    this._internalValue = value;
    this.onGroupChange.next(this._internalValue);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public set(value: any[]): void {
    this._internalValue = value;
    this.onChange(this._internalValue);
    this.onGroupChange.next(value);
  }

  public emit(): void {
    this.onGroupChange.next(this._internalValue);
  }

  public update(value: any): void {
    const index = this._internalValue.indexOf(value);

    if (index < 0) {
      this._internalValue.push(value);
    } else {
      this._internalValue.splice(index, 1);
    }

    this.onChange(this._internalValue);
  }
}
